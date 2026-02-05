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
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-center text-headline">
        {t('emergencyContacts')}
      </h2>
      <p className="text-muted-foreground text-center text-sm mb-6">
        {t('contactsOptional')}
      </p>

      {/* Existing contacts */}
      <div className="space-y-2 mb-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center justify-between p-4 bg-card rounded-2xl shadow-card"
          >
            <div>
              <p className="font-medium text-foreground">{contact.name}</p>
              <p className="text-sm text-muted-foreground">{contact.phone}</p>
            </div>
            <button
              onClick={() => removeContact(contact.id)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-muted"
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
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full p-4 text-base rounded-2xl bg-card shadow-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <input
            type="tel"
            placeholder={t('contactPhone')}
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            className="w-full p-4 text-base rounded-2xl bg-card shadow-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            onClick={addContact}
            disabled={!newName.trim() || !newPhone.trim()}
            className="w-full flex items-center justify-center gap-2 p-4 text-base font-medium bg-card text-foreground rounded-2xl shadow-card hover:shadow-card-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <Plus size={18} className="opacity-50" />
            {t('addContact')}
          </button>
        </div>
      )}
    </div>
  );
}
