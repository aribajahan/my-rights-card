import { ImmigrationStatus } from '@/types/card';

interface StatusSelectorProps {
  value: ImmigrationStatus;
  onChange: (status: ImmigrationStatus) => void;
  onSelect?: () => void;
}

const statusOptions: { key: Exclude<ImmigrationStatus, null>; label: string }[] = [
  { key: 'citizen', label: 'U.S. Citizen' },
  { key: 'greenCard', label: 'Green Card Holder' },
  { key: 'visa', label: 'Visa Holder' },
  { key: 'dacaTps', label: 'DACA / TPS' },
  { key: 'asylum', label: 'Asylum Seeker' },
  { key: 'undocumented', label: 'Undocumented' },
  { key: 'preferNot', label: 'Prefer not to say' },
];

export function StatusSelector({ value, onChange, onSelect }: StatusSelectorProps) {
  const handleSelect = (status: ImmigrationStatus) => {
    onChange(status);
    // Auto-advance after a brief moment
    setTimeout(() => {
      onSelect?.();
    }, 150);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-2xl tracking-wide mb-2 text-center text-headline">
        Select Your Status
      </h2>
      <p className="text-muted-foreground text-center text-sm mb-6">
        This is optional and helps personalize your card.
      </p>
      <div className="space-y-2">
        {statusOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => handleSelect(option.key)}
            className={`
              w-full p-3 text-left text-base font-medium transition-all duration-200
              ${value === option.key 
                ? 'bg-primary text-primary-foreground shadow-button' 
                : 'bg-card text-foreground shadow-card hover:shadow-card-hover'
              }
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
