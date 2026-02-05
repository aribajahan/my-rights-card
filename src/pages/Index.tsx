import { Link } from 'react-router-dom';
import { useLanguage, languageNames, Language } from '@/contexts/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Index() {
  const { t, language, setLanguage } = useLanguage();
  const [showLanguages, setShowLanguages] = useState(false);
  const languages: Language[] = ['en', 'es', 'bn', 'zh', 'ko', 'hi'];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Language selector */}
      <header className="p-4">
        <div className="container flex justify-end">
          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-xl"
            >
              <Globe size={16} className="opacity-50" />
              {languageNames[language]}
              <ChevronDown size={14} className="opacity-50" />
            </button>
            {showLanguages && (
              <div className="absolute right-0 mt-1 bg-card rounded-2xl shadow-card-hover z-50 overflow-hidden min-w-[140px]">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowLanguages(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      language === lang 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-foreground hover:bg-muted'
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
        <div className="w-full max-w-sm text-center">
          {/* Title */}
          <h1 className="text-3xl font-semibold mb-3 text-headline leading-tight">
            Know Your Rights
          </h1>

          {/* Tagline */}
          <p className="text-base text-muted-foreground mb-10">
            {t('tagline')}
          </p>

          {/* Action cards */}
          <div className="space-y-3">
            <Link
              to="/prepare"
              className="block w-full p-5 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <h2 className="text-lg font-semibold text-headline mb-1">
                {t('prepareCard')}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t('prepareCardDesc')}
              </p>
            </Link>

            <Link
              to="/rights"
              className="block w-full p-5 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <h2 className="text-lg font-semibold text-headline mb-1">
                {t('reviewRights')}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t('reviewRightsDesc')}
              </p>
            </Link>
          </div>

          {/* Hotline */}
          <div className="mt-10 p-4 bg-card rounded-2xl shadow-card">
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">24/7 Hotline</p>
            <a 
              href="tel:18443631423" 
              className="text-base font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              1-844-363-1423
            </a>
            <p className="text-xs text-muted-foreground mt-1">United We Dream</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-muted-foreground">
        <p>This app asserts your constitutional rights. It is not legal advice.</p>
      </footer>
    </div>
  );
}
