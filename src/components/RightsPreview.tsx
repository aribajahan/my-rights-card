import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Home, Search, Scale } from 'lucide-react';

export function RightsPreview() {
  const { t } = useLanguage();

  const rights = [
    {
      icon: Shield,
      title: t('rightSilent'),
      explanation: t('rightSilentExplain'),
    },
    {
      icon: Home,
      title: t('rightDoor'),
      explanation: t('rightDoorExplain'),
    },
    {
      icon: Search,
      title: t('rightSearch'),
      explanation: t('rightSearchExplain'),
    },
    {
      icon: Scale,
      title: t('rightLawyer'),
      explanation: t('rightLawyerExplain'),
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="font-display text-2xl font-bold mb-6 text-center text-foreground">
        {t('previewRights')}
      </h2>
      <div className="space-y-4">
        {rights.map((right, index) => (
          <div
            key={index}
            className="p-4 bg-card border-2 border-foreground/15 rounded-sm animate-slide-up"
            style={{ 
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/30 rounded-sm text-foreground">
                <right.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-2 text-foreground">{right.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {right.explanation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
