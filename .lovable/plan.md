
# UI Improvements: Hero Image, Card Icons, and Home Page Simplification

## Overview

This plan addresses four changes:
1. Center the hero image on the home page
2. Add a 5th rights row: "Right to Refuse to Sign" with document-slash icon
3. Simplify home page action cards by removing icons
4. Incorporate a hand-drawn brush script style font

---

## 1. Center Hero Image

**Current Issue**: The hero image uses `w-auto` which doesn't center it properly within the container.

**Fix**: Add `mx-auto` to center the image horizontally.

```text
Before:  className="h-36 w-auto object-contain mb-6"
After:   className="h-36 w-auto object-contain mb-6 mx-auto"
```

---

## 2. Add 5th Rights Row to Card

**New Right**: "RIGHT TO REFUSE TO SIGN"

**Icon Design**: A document with a diagonal slash through it (linocut style, matching existing icons).

```text
+----------------------------------+
|  [Doc Icon]  | RIGHT TO          |
|   with X     | REFUSE TO SIGN    |
+----------------------------------+
```

**Technical Details**:
- Add new `NoSignIcon` component (56x56 SVG)
- Document shape with bold slash-through
- White on red background matching existing style
- Add to `rights` array as 5th entry

**Space Consideration**: With 5 rows at 88px each = 440px. Current card has space for this.

---

## 3. Simplify Home Page Cards (Remove Icons)

**Current Design**:
```text
+----------------------------------+
| [Icon]  Prepare My Card          |
|         Description text         |
+----------------------------------+
```

**New Design** (cleaner, text-focused):
```text
+----------------------------------+
| Prepare My Card            [->]  |
| Description text                 |
+----------------------------------+
```

**Changes**:
- Remove the `w-12 h-12` icon boxes from both action cards
- Remove the icon from hotline box
- Add a subtle arrow (ChevronRight) on the right side for the action cards
- Simplify the layout to left-aligned text with arrow accent
- Creates a cleaner, more modern look

---

## 4. Hand-Drawn Brush Script Font

**Inspiration**: The reference image shows an italic brush script ("STAY INFORMED") layered behind bold condensed text.

**Font Options**:
- **Caveat** - Popular Google font, casual handwritten style
- **Permanent Marker** - Bold marker pen style
- **Rock Salt** - Rough, hand-painted feel

**Where to Use**:
The hand-drawn style works best as an accent/decoration, not primary UI text:

| Location | Usage |
|----------|-------|
| Home page headline | Behind "Know Your Rights" as subtle background text (like reference) |
| Section dividers | Small accent phrases |
| Card decorative element | Subtle "stay safe" or similar |

**Recommended Approach**: 
Add a brush script subtitle or decorative element behind the main headline, similar to the "STAY INFORMED" treatment in the reference image.

```text
        stay prepared         <-- brush script, light gray, behind
     KNOW YOUR RIGHTS         <-- Anton, bold, primary
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Center hero image, remove icons from cards, add arrow accents, add brush script accent |
| `src/components/RightsCard.tsx` | Add NoSignIcon and 5th rights row |
| `index.html` | Add Caveat or similar brush font from Google Fonts |

---

## Technical Implementation

### New Icon (RightsCard.tsx)

```tsx
const NoSignIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    {/* Document shape */}
    <rect x="12" y="6" width="24" height="32" rx="2" fill="white"/>
    <path d="M16 14H32" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round"/>
    <path d="M16 22H28" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round"/>
    <path d="M16 30H24" stroke="#B91C1C" strokeWidth="3" strokeLinecap="round"/>
    {/* Bold X through document */}
    <path d="M8 48L48 8" stroke="white" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);
```

### Updated Rights Array

```tsx
const rights = [
  { icon: DoorIcon, text: 'NO WARRANT,\nNO ENTRY' },
  { icon: SilenceIcon, text: 'RIGHT TO\nSILENCE' },
  { icon: HandIcon, text: 'NO SEARCH\nWITHOUT CONSENT' },
  { icon: PhoneIcon, text: 'RIGHT TO\nA LAWYER' },
  { icon: NoSignIcon, text: 'RIGHT TO\nREFUSE TO SIGN' },
];
```

### Home Page Action Cards (simplified)

```tsx
<Link to="/prepare" className="block bg-primary text-primary-foreground rounded-2xl p-5">
  <div className="flex items-center justify-between">
    <div className="text-left">
      <h2 className="text-lg font-bold">Prepare My Card</h2>
      <p className="text-sm opacity-90">Create a digital rights card...</p>
    </div>
    <ChevronRight size={24} className="opacity-70" />
  </div>
</Link>
```

---

## Visual Summary

**Home Page Changes**:
```text
Before:                          After:
+------------------------+       +------------------------+
|     [Hero Image]       |       |     [Hero Image]       |
|                        |       |     (centered)         |
| KNOW YOUR RIGHTS       |       |    stay prepared       |
|                        |       | KNOW YOUR RIGHTS       |
+------------------------+       +------------------------+
| [Icon] Prepare Card    |       | Prepare My Card    [>] |
+------------------------+       +------------------------+
| [Icon] Review Rights   |       | Review My Rights   [>] |
+------------------------+       +------------------------+
```

**Rights Card Changes**:
```text
+------------------------+
| MY RIGHTS              |
+------------------------+
| [Door]  No Warrant...  |
| [Lips]  Right to...    |
| [Hand]  No Search...   |
| [Phone] Right to...    |
| [Doc X] Right to...    |  <-- NEW
+------------------------+
```
