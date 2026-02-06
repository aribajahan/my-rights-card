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
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-center text-headline">
        {t('selectLanguage')}
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => handleSelect(lang)}
            className={`
              p-4 text-base font-medium transition-all duration-200
              ${language === lang 
                ? 'bg-primary text-primary-foreground shadow-button' 
                : 'bg-card text-foreground shadow-card hover:shadow-card-hover'
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
