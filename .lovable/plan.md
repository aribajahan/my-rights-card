

# Overlapping Typography & Remove Hero Image

## Overview

Two changes to create a more dramatic, poster-style headline treatment:
1. Remove the hero image entirely
2. Create overlapping typography where "know your rights" sits partially behind/over "STAY READY"

---

## Visual Goal

Based on the reference image style, the handwritten text should overlap with the bold headline:

```text
      know your rights     <-- Caveat font, positioned to overlap
   STAY READY              <-- Anton font, large, partially covered
```

The handwritten script will use negative margin or absolute positioning to sit above and slightly overlap the main headline, creating depth.

---

## Technical Implementation

### File: `src/pages/Index.tsx`

**Remove hero image section (lines 11-16)**
- Delete the `<img>` tag and its container
- Remove the unused `heroFist` import at the top

**Restructure headline section for overlap**
- Use `relative` positioning on the container
- Position "know your rights" with negative bottom margin (`-mb-4` or similar) so it overlaps into "STAY READY"
- Increase sizes:
  - Handwritten text: `text-3xl` or `text-4xl` (up from `text-2xl`)
  - Main headline: `text-6xl` or `text-7xl` (up from `text-5xl`)
- Add `relative z-0` to main headline so handwritten text appears "behind" it

**Updated structure**:
```tsx
<div className="mb-10 relative">
  {/* Handwritten accent - overlaps into headline */}
  <p 
    className="text-muted-foreground/40 text-3xl uppercase -mb-3 relative z-0"
    style={{ fontFamily: 'Caveat, cursive' }}
  >
    know your rights
  </p>
  
  {/* Main headline - sits on top */}
  <h1 className="text-6xl tracking-wide text-headline mb-4 relative z-10">
    Stay Ready
  </h1>
  
  <p className="text-foreground text-lg font-medium">
    Know what to say if ICE comes to your door, car, or workplace.
  </p>
</div>
```

---

## Changes Summary

| Element | Before | After |
|---------|--------|-------|
| Hero image | 144px tall fist image | Removed |
| Handwritten text | `text-2xl`, `mb-1` | `text-3xl`, `-mb-3` (overlaps) |
| Main headline | `text-5xl` | `text-6xl` |
| Z-index layering | None | Handwritten `z-0`, headline `z-10` |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Remove hero image, create overlapping typography with increased sizes |

