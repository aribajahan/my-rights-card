import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';
import { PrivacyNotice } from '@/components/PrivacyNotice';

interface InfoPageLayoutProps {
  title: string;
  subtitle?: string;
  backTo?: string;
  backLabel?: string;
  children: ReactNode;
}

export function InfoPageLayout({ 
  title, 
  subtitle,
  backTo,
  backLabel = 'Back',
  children 
}: InfoPageLayoutProps) {
  const navigate = useNavigate();

  // Split title into lines for stacked display (e.g., "At Your Door" -> ["At Your", "Door"])
  const titleWords = title.split(' ');
  let titleLines: string[] = [];
  
  if (titleWords.length <= 2) {
    titleLines = titleWords;
  } else if (titleWords.length === 3) {
    titleLines = [titleWords.slice(0, 2).join(' '), titleWords[2]];
  } else {
    // Split roughly in half
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
          <Link
            to="/"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Home"
          >
            <Home size={18} />
          </Link>
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

          <div className="info-content space-y-4">
            {children}
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="px-4 pb-6 border-t border-foreground/10 pt-6">
        <div className="max-w-sm mx-auto text-center space-y-4">
          {/* Quick hotline access */}
          <div>
            <p className="text-xs text-muted-foreground mb-1">Need help right now?</p>
            <a href="tel:1-844-363-1423" className="text-hotline font-bold text-lg">
              1-844-363-1423
            </a>
            <p className="text-xs text-muted-foreground">United We Dream — 24/7</p>
          </div>
          
          <PrivacyNotice />
        </div>
      </footer>
    </div>
  );
}
