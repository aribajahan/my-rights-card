

# Bold Typography Overhaul

Make the app typography bolder and more impactful to match the reference images.

---

## Current vs. Target

| Element | Current | Target |
|---------|---------|--------|
| Main headline | `text-4xl font-bold` (DM Sans) | `font-display text-5xl uppercase` (Anton) |
| Section headlines | `text-xl font-semibold` | `font-display text-2xl uppercase tracking-wide` |
| Button text | `font-medium` | `font-bold uppercase tracking-wider` |
| Body text | DM Sans regular | DM Sans (stays the same) |

---

## Technical Changes

### File: `src/index.css`

Update base heading styles to use Anton display font:

```css
h1, h2, h3 {
  font-family: 'Anton', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: hsl(var(--headline));
}
```

### File: `src/pages/Index.tsx`

- Main headline: Use `font-display text-5xl uppercase tracking-wide`
- Subhead: Keep DM Sans but make it bolder
- Button text: Add `uppercase tracking-wider font-bold`

### File: `src/components/StatusSelector.tsx`

- Section headline: Use `font-display text-2xl uppercase tracking-wide`
- Keep button labels in sentence case for readability

### File: `src/pages/ReviewRights.tsx`

- Page title: Use `font-display text-3xl uppercase tracking-wide`

### File: `src/components/RightsPreview.tsx`

- Rights titles: Use `font-display text-lg uppercase`

### File: `src/components/InfoPageLayout.tsx`

- Page titles: Use `font-display text-2xl uppercase tracking-wide`

---

## Visual Result

**Before**: Calm, professional, subdued  
**After**: Bold, commanding, activist-energy

The warm brick red color combined with Anton uppercase headlines will create that confident, "we've got your back" feeling from the reference images.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Update heading base styles to use Anton + uppercase |
| `tailwind.config.ts` | Already has `font-display: ['Anton']` - no changes needed |
| `src/pages/Index.tsx` | Update headline and button typography classes |
| `src/components/StatusSelector.tsx` | Update section headline typography |
| `src/pages/ReviewRights.tsx` | Update page title typography |
| `src/components/RightsPreview.tsx` | Update rights card titles |
| `src/components/InfoPageLayout.tsx` | Update page title typography |
| `src/pages/PrepareCard.tsx` | Update button typography |

