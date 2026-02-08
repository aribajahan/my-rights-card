import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { StatusSelector } from '@/components/StatusSelector';
import { DocumentForm } from '@/components/DocumentForm';
import { EmergencyContactForm } from '@/components/EmergencyContactForm';
import { RightsPreview } from '@/components/RightsPreview';
import { RightsCard } from '@/components/RightsCard';
import { PrivacyNotice } from '@/components/PrivacyNotice';
import { FocusFrameCard } from '@/components/FocusFrameCard';
import { ImmigrationStatus, EmergencyContact, DocumentInfo } from '@/types/card';
import { ChevronLeft, Download, BookOpen, RotateCcw, Volume2 } from 'lucide-react';
import { toast } from 'sonner';

type Step = 'status' | 'documents' | 'contacts' | 'preview' | 'card';

export default function PrepareCard() {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<Step>('status');
  const [status, setStatus] = useState<ImmigrationStatus>(null);
  const [documentInfo, setDocumentInfo] = useState<DocumentInfo>({ type: null, number: '' });
  const [contacts, setContacts] = useState<EmergencyContact[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Pending contact state (lifted from EmergencyContactForm for auto-save)
  const [pendingContactName, setPendingContactName] = useState('');
  const [pendingContactPhone, setPendingContactPhone] = useState('');

  const steps: Step[] = ['status', 'documents', 'contacts', 'preview', 'card'];
  const currentStepIndex = steps.indexOf(step);

  const formatPhoneDisplay = (phone: string): string => {
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 10) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    return phone;
  };

  const isValidPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[^\d+]/g, '');
    const digitCount = cleaned.replace(/\D/g, '').length;
    return digitCount >= 10 && digitCount <= 15;
  };

  const goNext = () => {
    // Auto-save pending contact data when leaving contacts step
    if (step === 'contacts' && pendingContactName.trim() && pendingContactPhone.trim()) {
      if (isValidPhone(pendingContactPhone.trim()) && contacts.length < 3) {
        const newContact: EmergencyContact = {
          id: Date.now().toString(),
          name: pendingContactName.trim(),
          phone: formatPhoneDisplay(pendingContactPhone.trim()),
        };
        setContacts([...contacts, newContact]);
        setPendingContactName('');
        setPendingContactPhone('');
      }
    }
    
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setStep(steps[nextIndex]);
    }
  };

  const goBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setStep(steps[prevIndex]);
    } else {
      navigate('/');
    }
  };

  const skipStep = () => {
    goNext();
  };

  const generateCard = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 100));
    setStep('card');
    setIsGenerating(false);
  };

  const saveCard = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
      });

      // Convert to blob/file for sharing
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], 'know-your-rights-card.png', { 
        type: 'image/png' 
      });

      // Try Web Share API first (works better on mobile for Photos)
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Know Your Rights Card',
        });
        toast.success('Card shared successfully!');
      } else {
        // Fallback: standard download
        const link = document.createElement('a');
        link.download = 'know-your-rights-card.png';
        link.href = dataUrl;
        link.click();
        toast.success('Card saved to your device!');
      }
    } catch (error) {
      // Handle user cancellation gracefully
      if ((error as Error).name === 'AbortError') {
        return; // User cancelled, no error message needed
      }
      console.error('Failed to save card:', error);
      toast.error('Failed to save card. Please try again.');
    }
  };

  const downloadAudio = () => {
    const link = document.createElement('a');
    link.href = '/audio/rights-statement-en.mp3';
    link.download = 'rights-statement.mp3';
    link.click();
    toast.success('Audio statement downloaded!');
  };

  const shareCard = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
      });

      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], 'know-your-rights-card.png', { type: 'image/png' });

      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Know Your Rights Card',
          text: 'My rights card from Know Your Rights app',
        });
      } else {
        toast.info('Sharing not supported. Downloading instead.');
        saveCard();
      }
    } catch (error) {
      console.error('Failed to share:', error);
      toast.error('Failed to share. Downloading instead.');
      saveCard();
    }
  };

  const startOver = () => {
    setStep('status');
    setStatus(null);
    setDocumentInfo({ type: null, number: '' });
    setContacts([]);
  };

  const renderStepContent = () => {
    switch (step) {
      case 'status':
        return (
          <div className="max-w-md mx-auto">
            {/* Stacked title */}
            <h1 className="headline-stacked headline-page text-center mb-2">
              <span className="block">Prepare</span>
              <span className="block">My Card</span>
            </h1>
            <StatusSelector value={status} onChange={setStatus} onSelect={() => goNext()} />
          </div>
        );
      case 'documents':
        return (
          <div className="max-w-md mx-auto">
            <h2 className="headline-stacked headline-page text-center mb-6">
              <span className="block">Document</span>
              <span className="block">Info</span>
            </h2>
            <DocumentForm value={documentInfo} onChange={setDocumentInfo} />
          </div>
        );
      case 'contacts':
        return (
          <div className="max-w-md mx-auto">
            <h2 className="headline-stacked headline-page text-center mb-6">
              <span className="block">Emergency</span>
              <span className="block">Contacts</span>
            </h2>
            <EmergencyContactForm 
              contacts={contacts} 
              onChange={setContacts}
              pendingName={pendingContactName}
              onPendingNameChange={setPendingContactName}
              pendingPhone={pendingContactPhone}
              onPendingPhoneChange={setPendingContactPhone}
            />
          </div>
        );
      case 'preview':
        return (
          <div className="max-w-md mx-auto">
            <h2 className="headline-stacked headline-page text-center mb-6">
              <span className="block">Your</span>
              <span className="block">Rights</span>
            </h2>
            <RightsPreview />
          </div>
        );
      case 'card':
        return (
          <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
            {/* Compact title */}
            <h2 className="text-xl font-bold uppercase tracking-wider text-center">
              Your Card Is Ready
            </h2>

            {/* Hidden card for image generation - positioned off-screen */}
            <div 
              style={{
                position: 'absolute',
                left: '-9999px',
                top: 0,
              }}
            >
              <RightsCard 
                ref={cardRef} 
                status={status} 
                documentInfo={documentInfo} 
                contacts={contacts} 
              />
            </div>

            {/* Phone mockup container - smaller */}
            <div className="relative">
              {/* Phone frame */}
              <div 
                className="relative bg-foreground overflow-hidden shadow-2xl"
                style={{
                  width: '140px',
                  height: '310px',
                  borderRadius: '20px',
                  padding: '6px',
                }}
              >
                {/* Screen area */}
                <div 
                  className="relative overflow-hidden bg-background"
                  style={{
                    borderRadius: '14px',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {/* Scaled card preview */}
                  <div 
                    style={{
                      transform: 'scale(0.118)',
                      transformOrigin: 'top left',
                      width: '1080px',
                      height: '2400px',
                    }}
                  >
                    <RightsCard status={status} documentInfo={documentInfo} contacts={contacts} />
                  </div>
                </div>
                {/* Notch/dynamic island */}
                <div 
                  className="absolute top-2 left-1/2 -translate-x-1/2 bg-foreground"
                  style={{
                    width: '48px',
                    height: '16px',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </div>
            
            {/* Instruction text */}
            <p className="text-center text-xs text-muted-foreground">
              This fits your lock screen.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const renderNavButtons = () => {
    if (step === 'card') {
      return (
        <div className="space-y-2">
          <button
            onClick={saveCard}
            className="w-full flex items-center justify-center gap-2 p-3 text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90"
          >
            <Download size={18} />
            Download Card Image
          </button>
          <button
            onClick={downloadAudio}
            className="w-full flex items-center justify-center gap-2 p-2.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            <Volume2 size={16} />
            Download Audio Statement
          </button>
          <div className="flex items-center justify-center gap-4 text-xs">
            <Link
              to="/tips/audio-shortcut"
              className="underline underline-offset-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Set up shortcuts
            </Link>
            <span className="text-muted-foreground/40">·</span>
            <Link
              to="/rights"
              className="underline underline-offset-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Review rights
            </Link>
          </div>
          <button
            onClick={startOver}
            className="w-full flex items-center justify-center gap-1 p-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw size={12} />
            Start Over
          </button>
        </div>
      );
    }

    // Show skip for documents and contacts, show next for documents
    const showSkip = step === 'documents' || step === 'contacts';
    const showNext = step === 'documents' || step === 'contacts';
    const showGenerate = step === 'preview';

    return (
      <div className="space-y-2">
        {showGenerate && (
          <button
            onClick={generateCard}
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-2 p-4 text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90 disabled:opacity-50"
          >
            Generate My Card
          </button>
        )}

        {showNext && (
          <button
            onClick={goNext}
            className="w-full flex items-center justify-center gap-2 p-4 text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90"
          >
            Next
          </button>
        )}

        {showSkip && (
          <button
            onClick={skipStep}
            className="w-full p-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between p-4">
          <button
            onClick={goBack}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft size={18} />
            Back
          </button>

          {/* Progress dots */}
          <div className="flex gap-1.5">
            {steps.map((s, i) => (
              <div
                key={s}
                className={`w-2 h-2 transition-colors ${
                  i <= currentStepIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-6 px-4 pb-32">
        <div className="animate-fade-in">
          {renderStepContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4">
        <div className="container max-w-sm mx-auto space-y-3">
          {renderNavButtons()}
          <PrivacyNotice />
        </div>
      </footer>
    </div>
  );
}
