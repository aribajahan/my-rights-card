
# Clean Up Homepage Footer

## Current State

The footer currently has several empty/unused elements from the removed hotline content:
- Empty `<p>` tag (line 55-56)
- Empty `<h3>` tag (line 58-59)
- Empty `<a>` tag (line 61-62)
- Empty `<p>` tag (line 64-65)
- "Save to Contacts" button that no longer makes sense without the hotline (line 67-69)
- Unused `handleSaveContact` function
- Unused `downloadVCard` import

## Changes

**File: `src/pages/Index.tsx`**

1. Remove the unused `downloadVCard` import
2. Remove the `handleSaveContact` function
3. Simplify the footer to only contain the legal disclaimer section
4. Remove `mt-auto` since we want it to move up closer to the Tips section

## Before

```text
┌────────────────────────────────┐
│  Tips Section                  │
├────────────────────────────────┤
│  [empty p]                     │
│  [empty h3]                    │
│  [empty a]                     │
│  [empty p]                     │
│  Save to Contacts              │
│  ─────────────────────────     │
│  This is not legal advice.     │
│  Built with love...            │
│  Privacy Notice                │
└────────────────────────────────┘
                    ↑ pushed to bottom by mt-auto
```

## After

```text
┌────────────────────────────────┐
│  Tips Section                  │
├────────────────────────────────┤
│  This is not legal advice.     │
│  Built with love...            │
│  Privacy Notice                │
└────────────────────────────────┘
           ↑ flows naturally below Tips
```

## Code Changes

| Location | Change |
|----------|--------|
| Line 4 | Remove `downloadVCard` import |
| Lines 6-8 | Remove `handleSaveContact` function |
| Lines 52-81 | Simplify footer to just the disclaimer div |

The cleaned-up footer will be:

```tsx
{/* Footer */}
<footer className="px-6 border-t border-foreground/10 py-6">
  <div className="max-w-md mx-auto text-center space-y-2">
    <p className="text-xs text-muted-foreground">
      This is not legal advice.
    </p>
    <p className="text-xs text-muted-foreground">
      Built with love for our communities.
    </p>
    <PrivacyNotice />
  </div>
</footer>
```

This removes all the empty cruft and moves the footer up naturally below the Tips section.
