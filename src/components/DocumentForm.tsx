import { useLanguage } from '@/contexts/LanguageContext';
import { DocumentInfo, DocumentType } from '@/types/card';

interface DocumentFormProps {
  value: DocumentInfo;
  onChange: (doc: DocumentInfo) => void;
}

const documentOptions: { key: Exclude<DocumentType, null>; translationKey: string }[] = [
  { key: 'greenCard', translationKey: 'greenCardDoc' },
  { key: 'workPermit', translationKey: 'workPermit' },
  { key: 'visaI94', translationKey: 'visaI94' },
  { key: 'dacaApproval', translationKey: 'dacaApproval' },
  { key: 'tpsCard', translationKey: 'tpsCard' },
  { key: 'passportVisa', translationKey: 'passportVisa' },
  { key: 'other', translationKey: 'otherDoc' },
];

export function DocumentForm({ value, onChange }: DocumentFormProps) {
  const { t } = useLanguage();

  const handleTypeSelect = (type: DocumentType) => {
    onChange({ ...value, type });
  };

  const handleNumberChange = (number: string) => {
    onChange({ ...value, number });
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-center text-headline">
        {t('documentType')}
      </h2>
      <p className="text-muted-foreground text-center text-sm mb-2">
        {t('documentOptional')}
      </p>
      <p className="text-muted-foreground/70 text-center text-xs mb-6">
        This will be added to your card for your reference.
      </p>

      {/* Document type selection */}
      <div className="space-y-2 mb-6">
        {documentOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => handleTypeSelect(option.key)}
            className={`
              w-full p-4 text-left text-base font-medium rounded-2xl transition-all duration-200
              ${value.type === option.key 
                ? 'bg-primary text-primary-foreground shadow-button' 
                : 'bg-card text-foreground shadow-card hover:shadow-card-hover'
              }
            `}
          >
            {t(option.translationKey as any)}
          </button>
        ))}
      </div>

      {/* Document number input - only show if type selected */}
      {value.type && (
        <div className="space-y-3 animate-fade-in">
          <label className="text-sm font-medium text-muted-foreground">
            {t('documentNumber')}
          </label>
          <input
            type="text"
            placeholder={t('documentNumberPlaceholder')}
            value={value.number}
            onChange={(e) => handleNumberChange(e.target.value)}
            className="w-full p-4 text-base rounded-2xl bg-card shadow-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <p className="text-xs text-muted-foreground text-center">
            {t('documentNumberNote')}
          </p>
        </div>
      )}
    </div>
  );
}
