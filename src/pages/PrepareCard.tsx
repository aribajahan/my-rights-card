import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';
import { StatusSelector } from '@/components/StatusSelector';
import { EmergencyContactForm } from '@/components/EmergencyContactForm';
import { RightsPreview } from '@/components/RightsPreview';
import { RightsCard } from '@/components/RightsCard';
import { ImmigrationStatus, EmergencyContact } from '@/types/card';
import { ArrowLeft, ArrowRight, Download, Share2, RotateCcw, Check } from 'lucide-react';
import { toast } from 'sonner';

type Step = 'language' | 'status' | 'contacts' | 'preview' | 'card';

export default function PrepareCard() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<Step>('language');
  const [status, setStatus] = useState<ImmigrationStatus>(null);
  const [contacts, setContacts] = useState<EmergencyContact[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const steps: Step[] = ['language', 'status', 'contacts', 'preview', 'card'];
  const currentStepIndex = steps.indexOf(step);

  const goNext = () => {
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

      const link = document.createElement('a');
      link.download = 'know-your-rights-card.png';
      link.href = dataUrl;
      link.click();

      toast.success(t('downloadSuccess'));
    } catch (error) {
      console.error('Failed to save card:', error);
      toast.error('Failed to save card. Please try again.');
    }
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
        toast.info(t('shareFailed'));
        saveCard();
      }
    } catch (error) {
      console.error('Failed to share:', error);
      toast.error('Failed to share. Downloading instead.');
      saveCard();
    }
  };

  const startOver = () => {
    setStep('language');
    setStatus(null);
    setContacts([]);
  };

  const renderStepContent = () => {
    switch (step) {
      case 'language':
        return <LanguageSelector onSelect={() => goNext()} />;
      case 'status':
        return <StatusSelector value={status} onChange={setStatus} />;
      case 'contacts':
        return <EmergencyContactForm contacts={contacts} onChange={setContacts} />;
      case 'preview':
        return <RightsPreview />;
      case 'card':
        return (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm overflow-hidden border-2 border-foreground/20 rounded-sm shadow-warm-md">
              <div className="transform scale-[0.5] origin-top-left w-[200%]">
                <RightsCard ref={cardRef} status={status} contacts={contacts} />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderNavButtons = () => {
    if (step === 'card') {
      return (
        <div className="space-y-3">
          <button
            onClick={saveCard}
            className="w-full flex items-center justify-center gap-3 p-4 text-base font-semibold bg-primary text-primary-foreground rounded-sm transition-all duration-200 hover:shadow-warm-md"
          >
            <Download size={20} />
            {t('saveCard')}
          </button>
          <button
            onClick={shareCard}
            className="w-full flex items-center justify-center gap-3 p-4 text-base font-semibold bg-secondary text-secondary-foreground rounded-sm transition-all duration-200 hover:shadow-warm-md"
          >
            <Share2 size={20} />
            {t('shareCard')}
          </button>
          <button
            onClick={startOver}
            className="w-full flex items-center justify-center gap-3 p-4 text-base font-medium bg-card text-foreground border-2 border-foreground/20 rounded-sm transition-all duration-200 hover:bg-muted"
          >
            <RotateCcw size={20} />
            {t('startOver')}
          </button>
        </div>
      );
    }

    const showSkip = step === 'status' || step === 'contacts';
    const showNext = step !== 'language' && step !== 'preview';
    const showGenerate = step === 'preview';

    return (
      <div className="space-y-3">
        {showGenerate && (
          <button
            onClick={generateCard}
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-3 p-4 text-base font-semibold bg-primary text-primary-foreground rounded-sm transition-all duration-200 hover:shadow-warm-md disabled:opacity-50"
          >
            <Check size={20} />
            {t('generateCard')}
          </button>
        )}

        {showNext && (
          <button
            onClick={goNext}
            className="w-full flex items-center justify-center gap-3 p-4 text-base font-semibold bg-primary text-primary-foreground rounded-sm transition-all duration-200 hover:shadow-warm-md"
          >
            {t('next')}
            <ArrowRight size={20} />
          </button>
        )}

        {showSkip && (
          <button
            onClick={skipStep}
            className="w-full p-3 text-muted-foreground font-medium hover:text-foreground transition-colors"
          >
            {t('skip')}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b border-foreground/10">
        <div className="container flex items-center justify-between p-4">
          <button
            onClick={goBack}
            className="flex items-center gap-2 font-medium text-foreground hover:text-secondary transition-colors"
          >
            <ArrowLeft size={20} />
            {t('back')}
          </button>

          {/* Progress indicator */}
          <div className="flex gap-2">
            {steps.map((s, i) => (
              <div
                key={s}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i <= currentStepIndex ? 'bg-secondary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-8 px-4 pb-48">
        <div className="animate-fade-in">
          {renderStepContent()}
        </div>
      </main>

      {/* Footer with navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background border-t border-foreground/10 p-4">
        <div className="container max-w-md mx-auto">
          {renderNavButtons()}
        </div>
      </footer>
    </div>
  );
}
