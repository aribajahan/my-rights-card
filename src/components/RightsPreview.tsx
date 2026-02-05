import { useLanguage } from '@/contexts/LanguageContext';

export function RightsPreview() {
  const { t } = useLanguage();

  const rights = [
    {
      title: t('rightSilent'),
      explanation: t('rightSilentExplain'),
    },
    {
      title: t('rightDoor'),
      explanation: t('rightDoorExplain'),
    },
    {
      title: t('rightSearch'),
      explanation: t('rightSearchExplain'),
    },
    {
      title: t('rightLawyer'),
      explanation: t('rightLawyerExplain'),
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-center text-headline">
        {t('previewRights')}
      </h2>
      <div className="space-y-3">
        {rights.map((right, index) => (
          <div
            key={index}
            className="p-4 bg-card rounded-2xl shadow-card animate-slide-up"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <h3 className="font-medium text-base mb-2 text-headline">{right.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {right.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
