import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { HamburgerMenu } from '@/components/HamburgerMenu';
import { RightsPageFooter, TipLink } from '@/components/RightsPageFooter';

interface InfoPageLayoutProps {
  title: string;
  subtitle?: string;
  backTo?: string;
  backLabel?: string;
  children: ReactNode;
  showFullHotline?: boolean;
  tips?: TipLink[];
}

export function InfoPageLayout({ 
  title, 
  subtitle,
  backTo,
  backLabel = 'Back',
  children,
  showFullHotline = false,
  tips,
}: InfoPageLayoutProps) {
  const navigate = useNavigate();

  // Split title into lines for stacked display
  const titleWords = title.split(' ');
  let titleLines: string[] = [];
  
  if (titleWords.length <= 2) {
    titleLines = titleWords;
  } else if (titleWords.length === 3) {
    titleLines = [titleWords.slice(0, 2).join(' '), titleWords[2]];
  } else {
    const mid = Math.ceil(titleWords.length / 2);
    titleLines = [titleWords.slice(0, mid).join(' '), titleWords.slice(mid).join(' ')];
  }

  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-background animate-page-enter">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between p-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft size={18} />
            {backLabel}
          </button>
          <HamburgerMenu />
        </div>
      </header>

      {/* Content */}
      <main className="container py-6 px-4 pb-24">
        <article className="max-w-lg mx-auto">
          {/* Stacked title */}
          <h1 className="headline-stacked headline-page mb-4">
            {titleLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          {/* Optional subtitle */}
          {subtitle && (
            <p className="text-muted-foreground text-lg mb-6">{subtitle}</p>
          )}

          {/* Divider */}
          <div className="section-divider mb-4" />

          <div className="info-content">
            {children}
          </div>
        </article>
      </main>

      {/* Footer */}
      {tips ? (
        <RightsPageFooter tips={tips} />
      ) : (
        <footer className="px-4 pb-6 border-t border-foreground/10 pt-6">
          <div className="max-w-sm mx-auto text-center space-y-3">
            {showFullHotline ? (
              <>
                <p className="text-xs text-muted-foreground mb-1">Need help right now?</p>
                <a href="tel:1-844-363-1423" className="text-hotline font-bold text-lg block">
                  1-844-363-1423
                </a>
                <p className="text-xs text-muted-foreground">United We Dream — 24/7</p>
              </>
            ) : (
              <Link 
                to="/hotlines" 
                className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                Hotlines & Resources →
              </Link>
            )}
            <p className="text-xs text-muted-foreground">
              This is not legal advice.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
