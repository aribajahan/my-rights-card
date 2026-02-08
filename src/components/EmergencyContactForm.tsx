import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { EmergencyContact } from '@/types/card';
import { Plus, X } from 'lucide-react';

interface EmergencyContactFormProps {
  contacts: EmergencyContact[];
  onChange: (contacts: EmergencyContact[]) => void;
  pendingName: string;
  onPendingNameChange: (value: string) => void;
  pendingPhone: string;
  onPendingPhoneChange: (value: string) => void;
}

// Simple phone validation - allows common formats
const isValidPhone = (phone: string): boolean => {
  // Remove all non-digit characters except + at the start
  const cleaned = phone.replace(/[^\d+]/g, '');
  // Must have at least 10 digits (US numbers)
  const digitCount = cleaned.replace(/\D/g, '').length;
  return digitCount >= 10 && digitCount <= 15;
};

const formatPhoneDisplay = (phone: string): string => {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return phone;
};

export function EmergencyContactForm({ 
  contacts, 
  onChange,
  pendingName,
  onPendingNameChange,
  pendingPhone,
  onPendingPhoneChange,
}: EmergencyContactFormProps) {
  const { t } = useLanguage();
  const [phoneError, setPhoneError] = useState('');

  const addContact = () => {
    const trimmedPhone = pendingPhone.trim();
    
    if (!isValidPhone(trimmedPhone)) {
      setPhoneError('Please enter a valid phone number (at least 10 digits)');
      return;
    }
    
    if (pendingName.trim() && trimmedPhone && contacts.length < 3) {
      const newContact: EmergencyContact = {
        id: Date.now().toString(),
        name: pendingName.trim(),
        phone: formatPhoneDisplay(trimmedPhone),
      };
      onChange([...contacts, newContact]);
      onPendingNameChange('');
      onPendingPhoneChange('');
      setPhoneError('');
    }
  };

  const handlePhoneChange = (value: string) => {
    onPendingPhoneChange(value);
    if (phoneError && value.trim()) {
      setPhoneError('');
    }
  };

  const removeContact = (id: string) => {
    onChange(contacts.filter(c => c.id !== id));
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-center text-headline">
        {t('emergencyContacts')}
      </h2>
      <p className="text-muted-foreground text-center text-sm mb-2">
        {t('contactsOptional')}
      </p>
      <p className="text-muted-foreground/70 text-center text-xs mb-6">
        This will be added to your card for your reference.
      </p>

      {/* Existing contacts */}
      <div className="space-y-2 mb-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center justify-between p-4 bg-card shadow-card"
          >
            <div>
              <p className="font-medium text-foreground">{contact.name}</p>
              <p className="text-sm text-muted-foreground">{contact.phone}</p>
            </div>
            <button
              onClick={() => removeContact(contact.id)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted"
              aria-label={t('removeContact')}
            >
              <X size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Add new contact form */}
      {contacts.length < 3 && (
        <div className="space-y-3">
          <input
            type="text"
            placeholder={t('contactName')}
            value={pendingName}
            onChange={(e) => onPendingNameChange(e.target.value)}
            className="w-full p-4 text-base bg-card shadow-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-b-4 focus:border-foreground transition-all"
          />
          <div>
            <input
              type="tel"
              placeholder={t('contactPhone')}
              value={pendingPhone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className={`w-full p-4 text-base bg-card shadow-card text-foreground placeholder:text-muted-foreground focus:outline-none transition-all ${
                phoneError ? 'border-b-4 border-destructive' : 'focus:border-b-4 focus:border-foreground'
              }`}
            />
            {phoneError && (
              <p className="text-destructive text-xs mt-1 pl-1">{phoneError}</p>
            )}
          </div>
          <button
            onClick={addContact}
            disabled={!pendingName.trim() || !pendingPhone.trim()}
            className="w-full flex items-center justify-center gap-2 p-4 text-base font-medium bg-card text-foreground shadow-card hover:shadow-card-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <Plus size={18} className="opacity-50" />
            {t('addContact')}
          </button>
        </div>
      )}
    </div>
  );
}
