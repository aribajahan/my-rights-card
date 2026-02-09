import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Play, Pause, RotateCcw, ChevronRight, VolumeX, Volume2 } from 'lucide-react';
import { InfoPageLayout } from '@/components/InfoPageLayout';
import { NavListItem } from '@/components/NavListItem';

// Audio timestamp data
const PRACTICE_DATA = {
  audioFile: "/audio/rights_practice_audio.mp3",
  phrases: [
    { id: 1, text: "I am exercising my constitutional rights.", startTime: 0, endTime: 3.5, pauseSeconds: 7 },
    { id: 2, text: "I do not consent to a search of my person, my belongings, my vehicle, or my home.", startTime: 3.5, endTime: 10.2, pauseSeconds: 10 },
    { id: 3, text: "I am choosing to remain silent.", startTime: 10.2, endTime: 12.5, pauseSeconds: 5 },
    { id: 4, text: "I want to speak with a lawyer before answering any questions.", startTime: 12.5, endTime: 16.8, pauseSeconds: 7 }
  ]
};

type Screen = 'landing' | 'intro' | 'playing' | 'countdown' | 'done';

export default function PracticeRights() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [voiceOff, setVoiceOff] = useState(false);
  const [audioError, setAudioError] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);
  const voiceOffTimerRef = useRef<NodeJS.Timeout | null>(null);
  const phraseIndexRef = useRef(phraseIndex);
  
  // Keep ref in sync with state
  useEffect(() => {
    phraseIndexRef.current = phraseIndex;
  }, [phraseIndex]);
  
  // Ensure phraseIndex is always valid
  const safeIndex = Math.min(phraseIndex, PRACTICE_DATA.phrases.length - 1);
  const currentPhrase = PRACTICE_DATA.phrases[safeIndex];
  const isLastPhrase = safeIndex === PRACTICE_DATA.phrases.length - 1;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (countdownRef.current) clearInterval(countdownRef.current);
      if (voiceOffTimerRef.current) clearTimeout(voiceOffTimerRef.current);
    };
  }, []);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(PRACTICE_DATA.audioFile);
    audio.preload = 'auto';
    
    audio.onerror = () => {
      console.error('Audio failed to load');
      setAudioError(true);
      setVoiceOff(true);
    };
    
    audioRef.current = audio;
    
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Handle audio timeupdate to detect phrase end
  const hasTriggeredCountdown = useRef(false);
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || screen !== 'playing' || voiceOff) {
      hasTriggeredCountdown.current = false;
      return;
    }

    const handleTimeUpdate = () => {
      if (!hasTriggeredCountdown.current && audio.currentTime >= currentPhrase.endTime) {
        hasTriggeredCountdown.current = true;
        audio.pause();
        startCountdown();
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, [screen, phraseIndex, voiceOff, currentPhrase]);

  const startCountdown = useCallback(() => {
    // Clear any existing interval first
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
    
    const idx = phraseIndexRef.current;
    const phrase = PRACTICE_DATA.phrases[idx];
    if (!phrase) {
      setScreen('done');
      return;
    }
    
    setScreen('countdown');
    setCountdown(phrase.pauseSeconds);
    
    countdownRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          if (countdownRef.current) clearInterval(countdownRef.current);
          countdownRef.current = null;
          // Move to next phrase or done
          const currentIdx = phraseIndexRef.current;
          const lastIdx = PRACTICE_DATA.phrases.length - 1;
          if (currentIdx >= lastIdx) {
            setScreen('done');
          } else {
            hasTriggeredCountdown.current = false;
            setPhraseIndex(i => Math.min(i + 1, lastIdx));
            setScreen('playing');
          }
          return phrase.pauseSeconds;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  // Auto-play phrase when entering 'playing' screen
  useEffect(() => {
    if (screen !== 'playing' || isPaused) return;
    
    const phrase = PRACTICE_DATA.phrases[phraseIndex];
    
    if (voiceOff) {
      // Voice off mode: show text for 3 seconds then countdown
      voiceOffTimerRef.current = setTimeout(() => {
        startCountdown();
      }, 3000);
      return () => {
        if (voiceOffTimerRef.current) clearTimeout(voiceOffTimerRef.current);
      };
    } else {
      // Play audio from phrase start time
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = phrase.startTime;
        audio.play().catch(err => {
          console.error('Playback failed:', err);
          setVoiceOff(true);
        });
      }
    }
  }, [screen, phraseIndex, isPaused, voiceOff, startCountdown]);

  const handleBegin = () => {
    setPhraseIndex(0);
    setIsPaused(false);
    setScreen('playing');
  };

  const handlePauseToggle = () => {
    const audio = audioRef.current;
    
    if (isPaused) {
      // Resume
      setIsPaused(false);
      if (screen === 'playing' && audio && !voiceOff) {
        audio.play();
      }
      if (screen === 'countdown') {
        // Clear any existing interval first
        if (countdownRef.current) {
          clearInterval(countdownRef.current);
          countdownRef.current = null;
        }
        const lastIdx = PRACTICE_DATA.phrases.length - 1;
        countdownRef.current = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              if (countdownRef.current) clearInterval(countdownRef.current);
              countdownRef.current = null;
              const currentIdx = phraseIndexRef.current;
              if (currentIdx >= lastIdx) {
                setScreen('done');
              } else {
                hasTriggeredCountdown.current = false;
                setPhraseIndex(i => Math.min(i + 1, lastIdx));
                setScreen('playing');
              }
              return 5;
            }
            return prev - 1;
          });
        }, 1000);
      }
    } else {
      // Pause
      setIsPaused(true);
      if (audio) audio.pause();
      if (countdownRef.current) clearInterval(countdownRef.current);
      if (voiceOffTimerRef.current) clearTimeout(voiceOffTimerRef.current);
    }
  };

  const handleReplay = () => {
    // Clear any running timers
    if (countdownRef.current) clearInterval(countdownRef.current);
    if (voiceOffTimerRef.current) clearTimeout(voiceOffTimerRef.current);
    
    setIsPaused(false);
    setScreen('playing');
    
    // Force re-trigger of the useEffect by briefly setting to a different screen
    // The useEffect will handle playing
  };

  const handlePrevPhrase = () => {
    if (phraseIndex > 0) {
      if (countdownRef.current) clearInterval(countdownRef.current);
      if (voiceOffTimerRef.current) clearTimeout(voiceOffTimerRef.current);
      if (audioRef.current) audioRef.current.pause();
      
      setPhraseIndex(i => i - 1);
      setIsPaused(false);
      setScreen('playing');
    }
  };

  const handleNextPhrase = () => {
    if (countdownRef.current) clearInterval(countdownRef.current);
    if (voiceOffTimerRef.current) clearTimeout(voiceOffTimerRef.current);
    if (audioRef.current) audioRef.current.pause();
    
    const lastIdx = PRACTICE_DATA.phrases.length - 1;
    if (phraseIndex >= lastIdx) {
      setScreen('done');
    } else {
      setPhraseIndex(i => Math.min(i + 1, lastIdx));
      setIsPaused(false);
      setScreen('playing');
    }
  };

  const handleVoiceToggle = () => {
    const newVoiceOff = !voiceOff;
    setVoiceOff(newVoiceOff);
    
    if (newVoiceOff && audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handlePracticeAgain = () => {
    setPhraseIndex(0);
    setIsPaused(false);
    setScreen('intro');
  };

  const handleBackToLanding = () => {
    if (audioRef.current) audioRef.current.pause();
    if (countdownRef.current) clearInterval(countdownRef.current);
    if (voiceOffTimerRef.current) clearTimeout(voiceOffTimerRef.current);
    setScreen('landing');
    setPhraseIndex(0);
    setIsPaused(false);
  };

  // Landing page
  if (screen === 'landing') {
    return (
      <InfoPageLayout 
        title="Practice Your Rights" 
        subtitle="Words you've only read are hard to say when you're scared. Practice out loud so they come easier."
        backTo="/tips"
        backLabel="Tips"
      >
        <p className="text-sm text-muted-foreground mb-6">Takes about 30 seconds.</p>
        
        <div className="section-divider mb-6" />
        
        <button
          onClick={() => setScreen('intro')}
          className="w-full flex items-center justify-between p-4 text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90"
        >
          Start Practice
          <ChevronRight size={20} />
        </button>
        
        <div className="section-divider my-6" />
        
        <p className="text-xs text-muted-foreground text-center mb-6">
          Go at your pace. Pause anytime.
        </p>
        
        <div className="section-divider mb-6" />
        
        <nav className="nav-list">
          <NavListItem to="/hotlines" label="Hotlines & Resources" />
        </nav>
        
        <p className="text-xs text-muted-foreground text-center mt-6">
          This is not legal advice.
        </p>
      </InfoPageLayout>
    );
  }

  // Fullscreen practice screens (intro, playing, countdown, done)
  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col"
      style={{ backgroundColor: '#1A1A1A', color: '#FAF9F6' }}
    >
      {/* Intro screen */}
      {screen === 'intro' && (
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <p className="text-lg mb-2">We'll go through 4 phrases.</p>
          <p className="text-sm opacity-70 mb-8">
            Listen first.<br />
            Then say it out loud when it's your turn.
          </p>
          
          {audioError && (
            <p className="text-xs opacity-50 mb-4">
              Audio unavailable. Using text-only mode.
            </p>
          )}
          
          <button
            onClick={handleBegin}
            className="px-8 py-4 text-lg font-bold uppercase tracking-wider border-2 border-current hover:bg-white/10 transition-colors"
          >
            Begin
          </button>
          
          <button
            onClick={handleBackToLanding}
            className="mt-8 text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center gap-1"
          >
            <ChevronLeft size={16} />
            Back
          </button>
        </div>
      )}

      {/* Playing / Countdown screens */}
      {(screen === 'playing' || screen === 'countdown') && (
        <>
          {/* Progress indicator */}
          <div className="absolute top-6 left-0 right-0 flex justify-center gap-2">
            {PRACTICE_DATA.phrases.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 transition-colors ${
                  i <= phraseIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            {screen === 'playing' && (
              <p className="text-2xl sm:text-3xl font-bold leading-relaxed max-w-md">
                "{currentPhrase.text}"
              </p>
            )}
            
            {screen === 'countdown' && (
              <>
                <p className="text-lg opacity-70 mb-4">Your turn.</p>
                <p className="text-6xl font-bold tabular-nums">{countdown}</p>
              </>
            )}
            
            {isPaused && (
              <p className="mt-8 text-sm opacity-50">Paused</p>
            )}
          </div>

          {/* Controls */}
          <div className="p-6 pb-10">
            <div className="flex items-center justify-center gap-6">
              {/* Back */}
              <button
                onClick={handlePrevPhrase}
                disabled={phraseIndex === 0}
                className="p-3 opacity-70 hover:opacity-100 disabled:opacity-30 transition-opacity"
                aria-label="Previous phrase"
              >
                <ChevronLeft size={24} />
              </button>
              
              {/* Replay */}
              <button
                onClick={handleReplay}
                className="p-3 opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Replay phrase"
              >
                <RotateCcw size={20} />
              </button>
              
              {/* Play/Pause */}
              <button
                onClick={handlePauseToggle}
                className="p-4 border-2 border-current hover:bg-white/10 transition-colors"
                aria-label={isPaused ? 'Resume' : 'Pause'}
              >
                {isPaused ? <Play size={24} /> : <Pause size={24} />}
              </button>
              
              {/* Voice toggle */}
              <button
                onClick={handleVoiceToggle}
                className={`p-3 transition-opacity ${voiceOff ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                aria-label={voiceOff ? 'Turn voice on' : 'Turn voice off'}
              >
                {voiceOff ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              
              {/* Next */}
              <button
                onClick={handleNextPhrase}
                className="p-3 opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Next phrase"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Done screen */}
      {screen === 'done' && (
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <p className="text-2xl font-bold mb-4">Nice work.</p>
          <p className="text-sm opacity-70 max-w-xs">
            The more you practice, the easier these words come when you need them.
          </p>
          
          <div className="mt-10 w-full max-w-xs space-y-3">
            <div className="border-t border-white/20 pt-6" />
            
            <button
              onClick={handlePracticeAgain}
              className="w-full py-4 text-base font-bold uppercase tracking-wider border-2 border-current hover:bg-white/10 transition-colors"
            >
              Practice Again
            </button>
            
            <Link
              to="/tips"
              className="flex items-center justify-center gap-1 py-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={16} />
              Back to Tips
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
