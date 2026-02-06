import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { PrivacyNotice } from '@/components/PrivacyNotice';

interface InfoPageLayoutProps {
  title: string;
  children: ReactNode;
}

export function InfoPageLayout({ title, children }: InfoPageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            Back
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
          <h1 className="text-2xl tracking-wide mb-6 text-headline leading-tight">
            {title}
          </h1>
          <div className="info-content space-y-6">
            {children}
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="px-4 pb-6 space-y-2">
        <p className="text-xs text-muted-foreground text-center max-w-sm mx-auto">
          This tool provides general information about your constitutional rights. 
          It is not legal advice.
        </p>
        <PrivacyNotice />
      </footer>
    </div>
  );
}
