import { useLanguage, Language, languageNames } from '@/contexts/LanguageContext';

interface LanguageSelectorProps {
  onSelect?: (language: Language) => void;
}

export function LanguageSelector({ onSelect }: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage();
  const languages: Language[] = ['en', 'es', 'bn', 'zh', 'ko', 'hi'];

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    onSelect?.(lang);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-center text-foreground">
        {t('selectLanguage')}
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => handleSelect(lang)}
            className={`
              p-4 text-lg font-semibold border-2 rounded-sm transition-all duration-200
              ${language === lang 
                ? 'bg-secondary text-secondary-foreground border-secondary shadow-warm-md' 
                : 'bg-card text-foreground border-foreground/20 hover:border-foreground/40 hover:shadow-warm'
              }
            `}
          >
            {languageNames[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}
