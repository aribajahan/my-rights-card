import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { StatusSelector } from '@/components/StatusSelector';
import { DocumentForm } from '@/components/DocumentForm';
import { RightsCard } from '@/components/RightsCard';
import { PrivacyNotice } from '@/components/PrivacyNotice';
import { ImmigrationStatus, DocumentInfo } from '@/types/card';
import { ChevronLeft, Download, RotateCcw } from 'lucide-react';
import { HamburgerMenu } from '@/components/HamburgerMenu';
import { toast } from 'sonner';
import { NavListItem } from '@/components/NavListItem';

type Step = 'status' | 'documents' | 'card';

export default function PrepareCard() {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<Step>('status');
  const [status, setStatus] = useState<ImmigrationStatus>(null);
  const [documentInfo, setDocumentInfo] = useState<DocumentInfo>({ type: null, number: '' });

  // Determine steps dynamically based on status selection
  const getSteps = (): Step[] => {
    if (status === 'preferNot') {
      return ['status', 'card'];
    }
    return ['status', 'documents', 'card'];
  };

  const steps = getSteps();
  const currentStepIndex = steps.indexOf(step);

  const handleStatusSelect = (selectedStatus: ImmigrationStatus) => {
    setStatus(selectedStatus);
    // If "preferNot", skip to card
    if (selectedStatus === 'preferNot') {
      setTimeout(() => setStep('card'), 150);
    } else {
      setTimeout(() => setStep('documents'), 150);
    }
  };

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
      const file = new File([blob], 'stay-ready-card.png', { 
        type: 'image/png' 
      });

      // Try Web Share API first (works better on mobile for Photos)
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Stay Ready Card',
        });
        toast.success('Card saved!');
      } else {
        // Fallback: standard download
        const link = document.createElement('a');
        link.download = 'stay-ready-card.png';
        link.href = dataUrl;
        link.click();
        toast.success('Card saved to your device!');
      }
    } catch (error) {
      // Handle user cancellation gracefully
      if ((error as Error).name === 'AbortError') {
        return;
      }
      console.error('Failed to save card:', error);
      toast.error('Failed to save card. Please try again.');
    }
  };

  const startOver = () => {
    setStep('status');
    setStatus(null);
    setDocumentInfo({ type: null, number: '' });
  };

  const renderStepContent = () => {
    switch (step) {
      case 'status':
        return (
          <div className="max-w-md mx-auto">
            <h1 className="headline-stacked headline-page text-center mb-2">
              <span className="block">Prepare</span>
              <span className="block">My Card</span>
            </h1>
            <StatusSelector 
              value={status} 
              onChange={setStatus} 
              onSelect={() => {
                if (status === 'preferNot') {
                  setStep('card');
                } else {
                  setStep('documents');
                }
              }} 
            />
          </div>
        );
      case 'documents':
        return (
          <div className="max-w-md mx-auto">
            <h2 className="headline-stacked headline-page text-center mb-6">
              <span className="block">Prepare</span>
              <span className="block">My Card</span>
            </h2>
            <DocumentForm value={documentInfo} onChange={setDocumentInfo} status={status} />
          </div>
        );
      case 'card':
        return (
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <h2 className="headline-stacked headline-page text-center">
              <span className="block">Your Card</span>
              <span className="block">Is Ready</span>
            </h2>

            {/* Hidden card for image generation */}
            <div 
              style={{
                position: 'fixed',
                left: '-9999px',
                top: 0,
                pointerEvents: 'none',
              }}
            >
              <RightsCard 
                ref={cardRef} 
                status={status} 
                documentInfo={documentInfo} 
                contacts={[]} 
              />
            </div>

            {/* Phone mockup container */}
            <div className="relative">
              <div 
                className="relative bg-foreground overflow-hidden shadow-2xl"
                style={{
                  width: '140px',
                  height: '310px',
                  borderRadius: '20px',
                  padding: '6px',
                }}
              >
                <div 
                  className="relative overflow-hidden bg-background"
                  style={{
                    borderRadius: '14px',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <div 
                    style={{
                      transform: 'scale(0.118)',
                      transformOrigin: 'top left',
                      width: '1080px',
                      height: '2400px',
                    }}
                  >
                    <RightsCard status={status} documentInfo={documentInfo} contacts={[]} />
                  </div>
                </div>
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
            
            <p className="text-center text-xs text-muted-foreground">
              1080 × 2400 — fits your lock screen
            </p>

            {/* Lock screen instructions */}
            <div className="w-full mt-4">
              <div className="section-divider mb-4" />
              <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-3 font-bold">
                How to Set as Lock Screen
              </p>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-bold mb-1">iPhone</p>
                  <p className="text-muted-foreground">Settings → Wallpaper → Add New → Photos → Select your card</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Android</p>
                  <p className="text-muted-foreground">Long press home → Wallpaper → My photos → Select your card</p>
                </div>
              </div>

              <div className="section-divider my-4" />
              <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-3 font-bold">
                Next Steps
              </p>
              <nav className="nav-list">
                <NavListItem to="/tips/emergency-contacts" label="Set up emergency contacts" />
                <NavListItem to="/rights/practice" label="Practice your rights (30 sec)" />
              </nav>
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
            className="w-full flex items-center justify-center gap-2 p-3 text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90"
          >
            <Download size={18} />
            Save to Photos
          </button>
          <button
            onClick={startOver}
            className="w-full flex items-center justify-center gap-1 p-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw size={12} />
            Start Over
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center justify-center gap-1 p-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Home
          </button>
        </div>
      );
    }

    // Show Next button on documents step
    if (step === 'documents') {
      // Only require document number if a document type is selected (and not "none")
      const canProceed = documentInfo.type === 'none' || (documentInfo.type && documentInfo.number.trim());
      
      return (
        <div className="space-y-2">
          <button
            onClick={goNext}
            disabled={!documentInfo.type}
            className="w-full flex items-center justify-center gap-2 p-4 text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      );
    }

    return null;
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

          {/* Progress dots + Menu */}
          <div className="flex items-center gap-3">
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
            <HamburgerMenu />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-6 px-4 pb-24">
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
