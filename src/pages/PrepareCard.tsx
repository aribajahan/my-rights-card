import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { useLanguage } from '@/contexts/LanguageContext';
import { StatusSelector } from '@/components/StatusSelector';
import { DocumentForm } from '@/components/DocumentForm';
import { EmergencyContactForm } from '@/components/EmergencyContactForm';
import { RightsPreview } from '@/components/RightsPreview';
import { RightsCard } from '@/components/RightsCard';
import { ImmigrationStatus, EmergencyContact, DocumentInfo } from '@/types/card';
import { ArrowLeft, Download, BookOpen, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

type Step = 'status' | 'documents' | 'contacts' | 'preview' | 'card';

export default function PrepareCard() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<Step>('status');
  const [status, setStatus] = useState<ImmigrationStatus>(null);
  const [documentInfo, setDocumentInfo] = useState<DocumentInfo>({ type: null, number: '' });
  const [contacts, setContacts] = useState<EmergencyContact[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const steps: Step[] = ['status', 'documents', 'contacts', 'preview', 'card'];
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
    setStep('status');
    setStatus(null);
    setDocumentInfo({ type: null, number: '' });
    setContacts([]);
  };

  const renderStepContent = () => {
    switch (step) {
      case 'status':
        return <StatusSelector value={status} onChange={setStatus} onSelect={() => goNext()} />;
      case 'documents':
        return <DocumentForm value={documentInfo} onChange={setDocumentInfo} />;
      case 'contacts':
        return <EmergencyContactForm contacts={contacts} onChange={setContacts} />;
      case 'preview':
        return <RightsPreview />;
      case 'card':
        return (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs overflow-hidden rounded-2xl shadow-card-hover">
              <div className="transform scale-[0.5] origin-top-left w-[200%]">
                <RightsCard ref={cardRef} status={status} documentInfo={documentInfo} contacts={contacts} />
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
        <div className="space-y-2">
          <button
            onClick={saveCard}
            className="w-full flex items-center justify-center gap-2 p-4 text-base font-medium bg-primary text-primary-foreground rounded-xl transition-all duration-200 hover:opacity-90"
          >
            <Download size={18} />
            {t('downloadImage')}
          </button>
          <Link
            to="/rights"
            className="w-full flex items-center justify-center gap-2 p-4 text-base font-medium bg-card text-foreground rounded-xl shadow-card hover:shadow-card-hover transition-all duration-200"
          >
            <BookOpen size={18} className="opacity-50" />
            {t('reviewRights')}
          </Link>
          <button
            onClick={startOver}
            className="w-full flex items-center justify-center gap-2 p-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw size={16} />
            {t('startOver')}
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
            className="w-full flex items-center justify-center gap-2 p-4 text-base font-medium bg-primary text-primary-foreground rounded-xl transition-all duration-200 hover:opacity-90 disabled:opacity-50"
          >
            {t('generateCard')}
          </button>
        )}

        {showNext && (
          <button
            onClick={goNext}
            className="w-full flex items-center justify-center gap-2 p-4 text-base font-medium bg-primary text-primary-foreground rounded-xl transition-all duration-200 hover:opacity-90"
          >
            {t('next')}
          </button>
        )}

        {showSkip && (
          <button
            onClick={skipStep}
            className="w-full p-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between p-4">
          <button
            onClick={goBack}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            {t('back')}
          </button>

          {/* Progress dots */}
          <div className="flex gap-1.5">
            {steps.map((s, i) => (
              <div
                key={s}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i <= currentStepIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-6 px-4 pb-40">
        <div className="animate-fade-in">
          {renderStepContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4">
        <div className="container max-w-sm mx-auto">
          {renderNavButtons()}
        </div>
      </footer>
    </div>
  );
}
