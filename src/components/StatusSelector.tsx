import { useLanguage } from '@/contexts/LanguageContext';
import { ImmigrationStatus } from '@/types/card';

interface StatusSelectorProps {
  value: ImmigrationStatus;
  onChange: (status: ImmigrationStatus) => void;
}

const statusOptions: { key: Exclude<ImmigrationStatus, null>; translationKey: string }[] = [
  { key: 'citizen', translationKey: 'usCitizen' },
  { key: 'greenCard', translationKey: 'greenCard' },
  { key: 'visa', translationKey: 'visaHolder' },
  { key: 'dacaTps', translationKey: 'dacaTps' },
  { key: 'asylum', translationKey: 'asylumSeeker' },
  { key: 'undocumented', translationKey: 'undocumented' },
  { key: 'preferNot', translationKey: 'preferNotToSay' },
];

export function StatusSelector({ value, onChange }: StatusSelectorProps) {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="font-display text-2xl font-bold mb-2 text-center text-foreground">
        {t('selectStatus')}
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        {t('statusOptional')}
      </p>
      <div className="space-y-2">
        {statusOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => onChange(option.key)}
            className={`
              w-full p-4 text-left text-base font-medium border-2 rounded-sm transition-all duration-200
              ${value === option.key 
                ? 'bg-secondary text-secondary-foreground border-secondary' 
                : 'bg-card text-foreground border-foreground/20 hover:border-foreground/40'
              }
            `}
          >
            {t(option.translationKey as any)}
          </button>
        ))}
      </div>
    </div>
  );
}
