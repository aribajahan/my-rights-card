import { Link } from 'react-router-dom';
import { useLanguage, Language, languageNames } from '@/contexts/LanguageContext';
import { ArrowLeft, ChevronRight, Globe } from 'lucide-react';
import { useState } from 'react';

const topics = [
  { key: 'universalRights', path: '/rights/universal' },
  { key: 'iceAtDoor', path: '/rights/door' },
  { key: 'stoppedCar', path: '/rights/car' },
  { key: 'stoppedStreet', path: '/rights/street' },
  { key: 'iceWorkplace', path: '/rights/workplace' },
  { key: 'warrantsDifference', path: '/rights/warrants' },
  { key: 'whatToCarry', path: '/rights/carry' },
  { key: 'hotlinesResources', path: '/rights/hotlines' },
];

const languages: Language[] = ['en', 'es', 'bn', 'zh', 'ko', 'hi'];

export default function ReviewRights() {
  const { language, setLanguage, t } = useLanguage();
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between p-4">
          <Link
            to="/"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            {t('home')}
          </Link>
          <button
            onClick={() => setShowLanguages(!showLanguages)}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted"
          >
            <Globe size={16} />
            {languageNames[language]}
          </button>
        </div>
        
        {/* Language dropdown */}
        {showLanguages && (
          <div className="container px-4 pb-3 animate-fade-in">
            <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setShowLanguages(false);
                  }}
                  className={`p-2 text-sm font-medium rounded-lg transition-all ${
                    language === lang
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  {languageNames[lang]}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="container py-6 px-4 pb-24">
        <h1 className="text-2xl font-semibold mb-6 text-center text-headline">
          {t('reviewRights')}
        </h1>

        <div className="max-w-sm mx-auto space-y-2">
          {topics.map((topic, index) => (
            <Link
              key={topic.key}
              to={topic.path}
              className="flex items-center justify-between p-4 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <span className="font-medium text-foreground">
                {t(topic.key as any)}
              </span>
              <ChevronRight size={18} className="text-muted-foreground" />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
