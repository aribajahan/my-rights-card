import { ImmigrationStatus } from '@/types/card';
import { NavListOption } from '@/components/NavListItem';

interface StatusSelectorProps {
  value: ImmigrationStatus;
  onChange: (status: ImmigrationStatus) => void;
  onSelect?: () => void;
}

const statusOptions: { key: Exclude<ImmigrationStatus, null>; label: string }[] = [
  { key: 'citizen', label: 'U.S. Citizen' },
  { key: 'greenCard', label: 'Green Card Holder' },
  { key: 'visa', label: 'Visa Holder' },
  { key: 'daca', label: 'DACA Recipient' },
  { key: 'tps', label: 'TPS Holder' },
  { key: 'asylum', label: 'Asylum Seeker' },
  { key: 'preferNot', label: 'Prefer Not to Say' },
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
      <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-2 font-bold">
        Select Your Status
      </p>
      <p className="text-muted-foreground text-center text-sm mb-6">
        We'll customize your card based on your status.
      </p>
      <div className="nav-list">
        {statusOptions.map((option) => (
          <NavListOption
            key={option.key}
            label={option.label}
            onClick={() => handleSelect(option.key)}
            isSelected={value === option.key}
          />
        ))}
      </div>
    </div>
  );
}
