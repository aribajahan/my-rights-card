import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Shield, 
  DoorOpen, 
  Car, 
  User, 
  Briefcase, 
  FileText, 
  Wallet, 
  Phone,
  ArrowLeft,
  ChevronRight 
} from 'lucide-react';

const topics = [
  { key: 'universalRights', icon: Shield, path: '/rights/universal' },
  { key: 'iceAtDoor', icon: DoorOpen, path: '/rights/door' },
  { key: 'stoppedCar', icon: Car, path: '/rights/car' },
  { key: 'stoppedStreet', icon: User, path: '/rights/street' },
  { key: 'iceWorkplace', icon: Briefcase, path: '/rights/workplace' },
  { key: 'warrantsDifference', icon: FileText, path: '/rights/warrants' },
  { key: 'whatToCarry', icon: Wallet, path: '/rights/carry' },
  { key: 'hotlinesResources', icon: Phone, path: '/rights/hotlines' },
];

export default function ReviewRights() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b border-foreground/10">
        <div className="container flex items-center justify-between p-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-medium text-foreground hover:text-secondary transition-colors"
          >
            <ArrowLeft size={20} />
            {t('home')}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container py-8 px-4 pb-24">
        <h1 className="font-display text-3xl font-bold mb-2 text-center text-foreground">
          {t('reviewRights')}
        </h1>
        <div className="h-1 w-12 bg-accent mx-auto mb-8" />

        <div className="max-w-md mx-auto space-y-3">
          {topics.map((topic, index) => (
            <Link
              key={topic.key}
              to={topic.path}
              className="flex items-center gap-4 p-4 bg-card border-2 border-foreground/15 rounded-sm transition-all duration-200 hover:border-foreground/30 hover:shadow-warm animate-slide-up"
              style={{ 
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="p-2 bg-accent/30 rounded-sm text-foreground">
                <topic.icon size={22} />
              </div>
              <span className="flex-1 font-semibold text-foreground">
                {t(topic.key as any)}
              </span>
              <ChevronRight size={20} className="text-muted-foreground" />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
