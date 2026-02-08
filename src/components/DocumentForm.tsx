import { DocumentInfo, DocumentType } from '@/types/card';

interface DocumentFormProps {
  value: DocumentInfo;
  onChange: (doc: DocumentInfo) => void;
}

const documentOptions: { key: Exclude<DocumentType, null>; label: string }[] = [
  { key: 'greenCard', label: 'Green Card' },
  { key: 'workPermit', label: 'Work Permit (EAD)' },
  { key: 'visaI94', label: 'Visa / I-94' },
  { key: 'dacaApproval', label: 'DACA Approval Notice' },
  { key: 'tpsCard', label: 'TPS Card' },
  { key: 'passportVisa', label: 'Passport (with visa)' },
  { key: 'other', label: 'None / Prefer not to say' },
];

export function DocumentForm({ value, onChange }: DocumentFormProps) {
  const handleTypeSelect = (type: DocumentType) => {
    onChange({ ...value, type });
  };

  const handleNumberChange = (number: string) => {
    onChange({ ...value, number });
  };

  return (
    <div className="w-full max-w-sm mx-auto">

      {/* Document type selection */}
      <div className="space-y-2 mb-6">
        {documentOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => handleTypeSelect(option.key)}
            className={`
              w-full p-4 text-left text-base font-medium transition-all duration-200
              ${value.type === option.key 
                ? 'bg-primary text-primary-foreground shadow-button' 
                : 'bg-card text-foreground shadow-card hover:shadow-card-hover'
              }
            `}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Document number input - only show if type selected and not "other" */}
      {value.type && value.type !== 'other' && (
        <div className="space-y-3 animate-fade-in">
          <label className="text-sm font-medium text-muted-foreground">
            Document Number (optional)
          </label>
          <input
            type="text"
            placeholder="A-number or document ID"
            value={value.number}
            onChange={(e) => handleNumberChange(e.target.value)}
            className="w-full p-4 text-base bg-card shadow-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-b-4 focus:border-foreground transition-all"
          />
          <p className="text-xs text-muted-foreground text-center">
            This is only stored on your phone, never shared.
          </p>
        </div>
      )}
    </div>
  );
}
