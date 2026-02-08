
# Fix: Card Not Showing Document Number and Emergency Contacts

## Problem Summary

The user reports that document number and emergency contact information are not appearing on the generated card, despite the data being entered during the card preparation flow.

## Diagnosis

After analyzing the code flow, I've identified several potential issues:

### Issue 1: State Update Timing in goNext()

The current `goNext()` function updates contacts and immediately changes the step:

```tsx
const goNext = () => {
  if (step === 'contacts' && pendingContactName.trim() && pendingContactPhone.trim()) {
    setContacts(prev => [...prev, newContact]);  // State update queued
    // ...
  }
  setStep(steps[nextIndex]);  // Immediately navigates
};
```

While React 18 batches these updates, there's a subtle timing issue: the step change triggers a new render, but the contacts state update may not be fully processed before the RightsCard component reads the props.

### Issue 2: Missing Debug Visibility

Without console logs, we cannot verify:
- Whether `documentInfo.number` is actually populated
- Whether `contacts` array contains data when RightsCard renders
- Whether the auto-save logic in `goNext()` is actually executing

## Solution

### Part 1: Add Debug Logging (Temporary)

Add console logs to trace exactly where data is being lost:

```tsx
// In goNext() - trace the auto-save
console.log('[goNext] Step:', step);
console.log('[goNext] Pending contact:', { pendingContactName, pendingContactPhone });
console.log('[goNext] Current contacts:', contacts);

// In RightsCard - trace what props are received
console.log('[RightsCard] documentInfo:', documentInfo);
console.log('[RightsCard] contacts:', contacts);
```

### Part 2: Ensure State Updates Complete Before Navigation

Use React's `flushSync` to force synchronous state updates before navigation:

```tsx
import { flushSync } from 'react-dom';

const goNext = () => {
  if (step === 'contacts' && pendingContactName.trim() && pendingContactPhone.trim()) {
    if (isValidPhone(pendingContactPhone.trim()) && contacts.length < 3) {
      const newContact: EmergencyContact = {
        id: Date.now().toString(),
        name: pendingContactName.trim(),
        phone: formatPhoneDisplay(pendingContactPhone.trim()),
      };
      
      // Force synchronous update to ensure contacts are set before step change
      flushSync(() => {
        setContacts(prev => [...prev, newContact]);
      });
      
      setPendingContactName('');
      setPendingContactPhone('');
    }
  }
  
  const nextIndex = currentStepIndex + 1;
  if (nextIndex < steps.length) {
    setStep(steps[nextIndex]);
  }
};
```

### Part 3: Alternative Approach - Use useEffect for Step Transition

If flushSync doesn't resolve it, we can separate the data collection from the navigation using a flag:

```tsx
const [shouldAdvance, setShouldAdvance] = useState(false);

const goNext = () => {
  if (step === 'contacts' && pendingContactName.trim() && pendingContactPhone.trim()) {
    // Add contact first
    const newContact = { ... };
    setContacts(prev => [...prev, newContact]);
    setPendingContactName('');
    setPendingContactPhone('');
    setShouldAdvance(true);  // Flag to advance after state settles
    return;  // Don't advance yet
  }
  
  // Normal navigation
  advanceStep();
};

useEffect(() => {
  if (shouldAdvance) {
    setShouldAdvance(false);
    advanceStep();
  }
}, [contacts, shouldAdvance]);  // Advance after contacts state updates
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/PrepareCard.tsx` | Add debug logs, use flushSync or useEffect pattern |
| `src/components/RightsCard.tsx` | Add debug log for received props |

---

## Implementation Steps

1. **Add debug console.logs** to trace the exact data flow and identify where data is lost
2. **Implement flushSync** to ensure state updates complete synchronously before navigation
3. **Test the flow** end-to-end: enter document type + number, add emergency contact, verify they appear on the final card
4. **Remove debug logs** once the issue is confirmed fixed

---

## Expected Result

After this fix:
1. User enters document type "Green Card" and number "A12345678"
2. User enters emergency contact "Mom" with phone "555-123-4567"
3. User clicks "Next" (without clicking Add Contact)
4. Generated card displays:
   - "DOCUMENT TYPE: Green Card" with "A12345678"
   - "EMERGENCY CONTACTS: Mom - (555) 123-4567"
