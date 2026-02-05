import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InfoPageLayoutProps {
  title: string;
  children: ReactNode;
}

export function InfoPageLayout({ title, children }: InfoPageLayoutProps) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b border-foreground/10">
        <div className="container flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-medium text-foreground hover:text-secondary transition-colors"
          >
            <ArrowLeft size={20} />
            {t('back')}
          </button>
          <Link
            to="/"
            className="p-2 text-foreground hover:text-secondary transition-colors"
            aria-label={t('home')}
          >
            <Home size={20} />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container py-8 px-4 pb-24">
        <article className="max-w-2xl mx-auto">
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight text-foreground">
            {title}
          </h1>
          <div className="h-1 w-12 bg-accent mb-8" />
          <div className="info-content space-y-6">
            {children}
          </div>
        </article>
      </main>
    </div>
  );
}
