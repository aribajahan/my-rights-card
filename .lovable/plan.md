
# Fix: Emergency Contact Not Appearing on Card

## Problem

When users fill in emergency contact fields but click "Next" or "Skip" without clicking "Add Contact", the contact data is lost. The card generates with an empty contacts array.

## Solution

Auto-save any pending contact data when the user navigates away from the contacts step.

---

## Changes

### `src/pages/PrepareCard.tsx`

**1. Add a ref to access the EmergencyContactForm's pending data**

Create a mechanism to capture pending (unsaved) contact data when the user proceeds to the next step.

**2. Modify the `goNext` function to auto-add pending contacts**

Before navigating away from the contacts step, check if there's valid data in the input fields and add it automatically.

**Implementation approach:**

Option A - Lift the pending state up to PrepareCard:
- Move `newName` and `newPhone` state from EmergencyContactForm to PrepareCard
- Pass them as props to the form
- In `goNext()`, check if there's pending contact data and add it before proceeding

Option B - Use a callback prop (cleaner):
- Add an `onPendingContact` callback to EmergencyContactForm
- When fields change, call this callback with the current field values
- In `goNext()`, use the pending values to auto-add before proceeding

I recommend **Option A** for simplicity.

---

## File Changes

### `src/pages/PrepareCard.tsx`

```tsx
// Add state for pending contact fields
const [pendingContactName, setPendingContactName] = useState('');
const [pendingContactPhone, setPendingContactPhone] = useState('');

// Modify goNext to auto-save pending contact
const goNext = () => {
  // If on contacts step and there's pending data, auto-add it
  if (step === 'contacts' && pendingContactName.trim() && pendingContactPhone.trim()) {
    const newContact: EmergencyContact = {
      id: Date.now().toString(),
      name: pendingContactName.trim(),
      phone: formatPhoneDisplay(pendingContactPhone.trim()),
    };
    setContacts([...contacts, newContact]);
    setPendingContactName('');
    setPendingContactPhone('');
  }
  
  const nextIndex = currentStepIndex + 1;
  if (nextIndex < steps.length) {
    setStep(steps[nextIndex]);
  }
};

// Pass pending state to EmergencyContactForm
<EmergencyContactForm 
  contacts={contacts} 
  onChange={setContacts}
  pendingName={pendingContactName}
  onPendingNameChange={setPendingContactName}
  pendingPhone={pendingContactPhone}
  onPendingPhoneChange={setPendingContactPhone}
/>
```

### `src/components/EmergencyContactForm.tsx`

```tsx
interface EmergencyContactFormProps {
  contacts: EmergencyContact[];
  onChange: (contacts: EmergencyContact[]) => void;
  pendingName: string;
  onPendingNameChange: (value: string) => void;
  pendingPhone: string;
  onPendingPhoneChange: (value: string) => void;
}

// Remove local newName/newPhone state
// Use props instead:
// - pendingName instead of newName
// - onPendingNameChange instead of setNewName
// - pendingPhone instead of newPhone  
// - onPendingPhoneChange instead of setNewPhone
```

---

## Helper Function

Move `formatPhoneDisplay` to a shared location or duplicate in PrepareCard:

```tsx
const formatPhoneDisplay = (phone: string): string => {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return phone;
};

const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/[^\d+]/g, '');
  const digitCount = cleaned.replace(/\D/g, '').length;
  return digitCount >= 10 && digitCount <= 15;
};
```

---

## Files Modified

| File | Changes |
|------|---------|
| `src/pages/PrepareCard.tsx` | Add pending contact state, auto-save logic in goNext |
| `src/components/EmergencyContactForm.tsx` | Use controlled props instead of local state |

---

## Result

After this fix:
1. User types name "Mom" and phone "555-123-4567"
2. User clicks "Next" without clicking "Add Contact"
3. System auto-adds the contact before proceeding
4. Card generates with "Mom - (555) 123-4567" visible
