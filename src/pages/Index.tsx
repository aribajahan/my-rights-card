import { Link } from 'react-router-dom';
import { useLanguage, languageNames, Language } from '@/contexts/LanguageContext';
import { CreditCard, BookOpen, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Index() {
  const { t, language, setLanguage } = useLanguage();
  const [showLanguages, setShowLanguages] = useState(false);
  const languages: Language[] = ['en', 'es', 'bn', 'zh', 'ko', 'hi'];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Language selector button */}
      <header className="p-4">
        <div className="container flex justify-end">
          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="flex items-center gap-2 px-4 py-2 border-2 border-foreground/30 rounded-sm font-medium text-foreground hover:bg-card transition-colors"
            >
              <Globe size={18} />
              {languageNames[language]}
            </button>
            {showLanguages && (
              <div className="absolute right-0 mt-2 bg-card border-2 border-foreground/20 rounded-sm z-50 shadow-warm-md overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowLanguages(false);
                    }}
                    className={`block w-full text-left px-4 py-3 font-medium hover:bg-muted transition-colors ${
                      language === lang ? 'bg-secondary text-secondary-foreground' : 'text-foreground'
                    }`}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-12">
        <div className="w-full max-w-md text-center">
          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 leading-tight text-foreground">
            Know Your Rights
          </h1>

          {/* Golden accent line */}
          <div className="h-1 w-16 bg-accent mx-auto mb-6" />

          {/* Tagline */}
          <p className="text-lg text-muted-foreground mb-10 font-medium">
            {t('tagline')}
          </p>

          {/* Action buttons */}
          <div className="space-y-4">
            <Link
              to="/prepare"
              className="block w-full p-5 bg-primary text-primary-foreground rounded-sm transition-all duration-200 hover:shadow-warm-md group"
              style={{ boxShadow: '4px 4px 0px hsl(207 61% 15% / 0.15)' }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-foreground/10 rounded-sm">
                  <CreditCard size={28} className="text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold font-display">
                    {t('prepareCard')}
                  </h2>
                  <p className="text-sm text-primary-foreground/70">
                    {t('prepareCardDesc')}
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to="/rights"
              className="block w-full p-5 bg-secondary text-secondary-foreground rounded-sm transition-all duration-200 hover:shadow-warm-md group"
              style={{ boxShadow: '4px 4px 0px hsl(207 61% 15% / 0.15)' }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary-foreground/10 rounded-sm">
                  <BookOpen size={28} className="text-secondary-foreground" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold font-display">
                    {t('reviewRights')}
                  </h2>
                  <p className="text-sm text-secondary-foreground/80">
                    {t('reviewRightsDesc')}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Hotline */}
          <div className="mt-10 p-4 bg-card border-2 border-foreground/15 rounded-sm">
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium">24/7 Hotline</p>
            <a 
              href="tel:18443631423" 
              className="text-lg font-bold text-foreground hover:text-secondary transition-colors font-display"
            >
              United We Dream: 1-844-363-1423
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-muted-foreground border-t border-foreground/10">
        <p>This app asserts your constitutional rights. It is not legal advice.</p>
      </footer>
    </div>
  );
}
