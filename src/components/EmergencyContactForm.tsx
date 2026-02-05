import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { EmergencyContact } from '@/types/card';
import { Plus, X } from 'lucide-react';

interface EmergencyContactFormProps {
  contacts: EmergencyContact[];
  onChange: (contacts: EmergencyContact[]) => void;
}

export function EmergencyContactForm({ contacts, onChange }: EmergencyContactFormProps) {
  const { t } = useLanguage();
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addContact = () => {
    if (newName.trim() && newPhone.trim() && contacts.length < 3) {
      const newContact: EmergencyContact = {
        id: Date.now().toString(),
        name: newName.trim(),
        phone: newPhone.trim(),
      };
      onChange([...contacts, newContact]);
      setNewName('');
      setNewPhone('');
    }
  };

  const removeContact = (id: string) => {
    onChange(contacts.filter(c => c.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="font-display text-2xl font-bold mb-2 text-center text-foreground">
        {t('emergencyContacts')}
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        {t('contactsOptional')}
      </p>

      {/* Existing contacts */}
      <div className="space-y-3 mb-6">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center justify-between p-4 bg-card border-2 border-foreground/20 rounded-sm"
          >
            <div>
              <p className="font-semibold text-foreground">{contact.name}</p>
              <p className="text-muted-foreground">{contact.phone}</p>
            </div>
            <button
              onClick={() => removeContact(contact.id)}
              className="p-2 text-muted-foreground hover:text-destructive transition-colors"
              aria-label={t('removeContact')}
            >
              <X size={20} />
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
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full p-4 text-base border-2 border-foreground/20 rounded-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
          />
          <input
            type="tel"
            placeholder={t('contactPhone')}
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            className="w-full p-4 text-base border-2 border-foreground/20 rounded-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
          />
          <button
            onClick={addContact}
            disabled={!newName.trim() || !newPhone.trim()}
            className="w-full flex items-center justify-center gap-2 p-4 text-base font-semibold bg-secondary text-secondary-foreground rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-warm"
          >
            <Plus size={20} />
            {t('addContact')}
          </button>
        </div>
      )}
    </div>
  );
}
