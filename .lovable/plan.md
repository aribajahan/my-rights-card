

## Remove Language Selection from "Prepare My Card" Flow

Since the rights card is always generated in English, the language selection step should be removed from the card preparation flow. Language selection only affects the UI text and educational content in the "Review My Rights" section.

### Changes

**1. Update `src/pages/PrepareCard.tsx`**
- Remove `'language'` from the `Step` type and `steps` array
- Remove the `LanguageSelector` import (no longer needed)
- Change the initial step from `'language'` to `'status'`
- Update `startOver()` function to reset to `'status'` instead of `'language'`
- Remove the `case 'language'` from the switch statement

The new flow will be:
```text
Status (auto-advance) -> Documents -> Contacts -> Preview -> Card
```

This reduces the steps from 6 to 5, making the card creation faster and more focused.

### Technical Details

```text
Current flow:  Language -> Status -> Documents -> Contacts -> Preview -> Card
New flow:                  Status -> Documents -> Contacts -> Preview -> Card
```

The `LanguageSelector` component will remain in the codebase for use in the "Review My Rights" flow where it's still needed.

