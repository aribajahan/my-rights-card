import { DocumentInfo, DocumentType, ImmigrationStatus, documentOptionsByStatus } from '@/types/card';
import { NavListOption } from '@/components/NavListItem';

interface DocumentFormProps {
  value: DocumentInfo;
  onChange: (doc: DocumentInfo) => void;
  status: ImmigrationStatus;
}

export function DocumentForm({ value, onChange, status }: DocumentFormProps) {
  // Get document options based on status
  const documentOptions = status && status !== 'preferNot' 
    ? documentOptionsByStatus[status] 
    : [];

  const handleTypeSelect = (type: DocumentType) => {
    onChange({ ...value, type });
  };

  const handleNumberChange = (number: string) => {
    onChange({ ...value, number });
  };

  // Show number input if type is selected and not "none"
  const showNumberInput = value.type && value.type !== 'none';

  return (
    <div className="w-full max-w-sm mx-auto">
      <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-2 font-bold">
        Document Type
      </p>
      <div className="section-divider mb-6" />

      {/* Document type selection */}
      <div className="nav-list mb-6">
        {documentOptions.map((option) => (
          <NavListOption
            key={option.key}
            label={option.label}
            onClick={() => handleTypeSelect(option.key)}
            isSelected={value.type === option.key}
          />
        ))}
      </div>

      {/* Document number input - only show if type selected and not "none" */}
      {showNumberInput && (
        <div className="space-y-3 animate-fade-in">
          <div className="section-divider mb-4" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-2 font-bold">
            Your Document Number
          </p>
          <p className="text-sm text-muted-foreground text-center mb-4">
            Enter your document number so it's always on your lock screen.
          </p>
          <input
            type="text"
            placeholder="A-number, passport number, or document ID"
            value={value.number}
            onChange={(e) => handleNumberChange(e.target.value)}
            className="w-full p-4 text-base bg-card shadow-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-b-4 focus:border-foreground transition-all"
          />
          <p className="text-xs text-muted-foreground text-center">
            This stays on your phone only. We never see or store it.
          </p>
        </div>
      )}
    </div>
  );
}
