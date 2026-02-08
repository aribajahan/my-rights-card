

# Stay Ready — Design Overhaul Implementation Plan

## The Vision

Transform from a "nice nonprofit template" into something that feels like **Bloomberg Businessweek meets emergency broadcast**. Editorial brutalism with purpose. Every design choice communicates: "This matters. Someone gave a shit."

---

## Summary of Changes

| Element | Current | Updated |
|---------|---------|---------|
| Homepage hero | "know your rights" overlay + tagline | Giant stacked "STAY / READY" fills viewport |
| Navigation | Button hierarchy (primary/secondary) | Three equal Focus Frame cards |
| Background | Flat cream | Subtle paper grain texture |
| Typography | Standard headings | Stacked words, massive scale, tight tracking |
| Phrase callouts | Small italic with left border | Giant pull-quote boxes with full borders |
| Section headers | Standard h2 | Stacked words with thin rules |
| Tap interaction | Simple color change | Brackets complete + invert + scale + slide transition |
| Page transitions | Fade in | Slide left/right (250ms) |
| Status options | Includes "Undocumented" | Removed; use "Prefer not to say" |

---

## Part 1: Core Design System Updates

### 1.1 Typography Scale

**File:** `src/index.css`

Add new typography utilities for the brutalist editorial style:

```css
/* Stacked headline - words stack vertically */
.headline-stacked {
  font-family: 'Anton', sans-serif;
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: -0.02em;
}

/* Hero scale - fills viewport */
.headline-hero {
  font-size: clamp(4rem, 20vw, 12rem);
}

/* Section scale - large but not hero */
.headline-section {
  font-size: clamp(2rem, 10vw, 4rem);
}

/* Page title scale */
.headline-page {
  font-size: clamp(2.5rem, 12vw, 5rem);
}
```

### 1.2 Paper Texture Background

**File:** `src/index.css`

Add subtle grain texture to body:

```css
body {
  @apply bg-background text-foreground font-semibold;
  font-family: 'DM Sans', system-ui, sans-serif;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
  z-index: -1;
}
```

### 1.3 Color Refinement

Update hotline color to the specified red:

```css
--hotline: 350 70% 45%; /* #C41E3A */
```

---

## Part 2: Focus Frame Card Component

**New file:** `src/components/FocusFrameCard.tsx`

### Visual States

**Resting state:**
```text
┌                                           ┐

  PREPARE MY CARD                        →
  Lock screen ready

└                                           ┘
```

**Pressed state (150ms):**
```text
┌─────────────────────────────────────────┐
│                                         │
│  PREPARE MY CARD                     → │
│  Lock screen ready                      │
│                                         │
└─────────────────────────────────────────┘
```
- Background: fills black
- Text: inverts to cream
- Corners: slide inward and connect
- Scale: 98%

### Corner Bracket Styling
- Line weight: 2px
- Arm length: 32px
- Pure black (#1A1A1A)
- Positioned using `absolute` with borders

### Component Interface
```typescript
interface FocusFrameCardProps {
  to: string;
  headline: string;
  subhead: string;
  className?: string;
}
```

### Animation Details
- Transition: `all 150ms ease-out`
- On press: corners animate from 32px arms to full width/height
- Transform: `scale(0.98)` on active
- Background: `bg-foreground` (black)
- Text: `text-background` (cream)

---

## Part 3: Homepage Redesign

**File:** `src/pages/Index.tsx`

### Layout Structure

```text
┌─────────────────────────────────────────┐
│                                         │
│              STAY                       │
│              READY                      │
│                                         │
│         [subtle ↓ indicator]            │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ┌                              ┐       │
│    PREPARE MY CARD           →          │
│    Lock screen ready                    │
│  └                              ┘       │
│                                         │
│  ┌                              ┐       │
│    REVIEW MY RIGHTS          →          │
│    Door / Car / Street / Work           │
│  └                              ┘       │
│                                         │
│  ┌                              ┐       │
│    HELP YOUR COMMUNITY       →          │
│    Witness / Support / Prepare          │
│  └                              ┘       │
│                                         │
├─────────────────────────────────────────┤
│  STAY READY TIPS                        │
│  Memorize a number · Record your        │
│  statement · Talk to your family        │
│                                         │
│  All tips →                             │
├─────────────────────────────────────────┤
│  If you need help now:                  │
│                                         │
│  UNITED WE DREAM HOTLINE                │
│  1-844-363-1423 (red)                   │
│  24/7 — Free — Confidential             │
│                                         │
│  [Save to Contacts]                     │
├─────────────────────────────────────────┤
│  This is not legal advice.              │
│  Built with love for our communities.   │
└─────────────────────────────────────────┘
```

### Hero Section
- Full viewport height (`min-h-screen`)
- Centered "STAY" and "READY" stacked vertically
- Giant scale (`headline-hero` class)
- Line-height ~0.85 for tight stacking
- Subtle scroll indicator (optional small "↓" or just natural scroll)

### Three Paths Section
- Three `FocusFrameCard` components stacked
- Equal visual weight
- 16-24px gap between cards
- Subheads are contextual hints:
  - "Lock screen ready"
  - "Door / Car / Street / Work"
  - "Witness / Support / Prepare"

### Tips Section (Secondary)
- Thin horizontal rule above
- "STAY READY TIPS" in small caps (text-xs uppercase tracking-widest)
- Tip previews as inline text with middle dots (·)
- "All tips →" as simple underlined link

### Hotline Footer
- Thin horizontal rules above and below
- "If you need help now:" label
- "UNITED WE DREAM HOTLINE" heading
- Phone number in RED (the ONLY red in app)
- "24/7 — Free — Confidential"
- Keep vCard download button

---

## Part 4: Section Index Pages (Menu Pages)

**Files to update:**
- `src/pages/ReviewRights.tsx`
- `src/pages/HelpCommunity.tsx`
- `src/pages/StayReadyTips.tsx`

### New Layout Structure

```text
← Back

REVIEW
MY RIGHTS
─────────────────────────────────

┌                              ┐
  AT YOUR DOOR              →
└                              ┘

┌                              ┐
  IN YOUR CAR               →
└                              ┘

┌                              ┐
  ON THE STREET             →
└                              ┘

... etc
```

### Key Changes
- Page title is STACKED and HUGE (split multi-word titles)
- Thin horizontal rule below title
- Replace `.menu-item` links with `FocusFrameCard` components
- Update section labels to be shorter/punchier:
  - "ICE at Your Door" → "AT YOUR DOOR"
  - "Stopped in Your Car" → "IN YOUR CAR"
  - etc.

---

## Part 5: Content Page Layout Redesign

**File:** `src/components/InfoPageLayout.tsx`

### Header Updates
```text
← Review My Rights

AT YOUR
DOOR

When ICE or police knock on your home.
```

- Parent section as back link text
- Title stacked and huge
- Subtitle in regular weight, smaller, provides context

### Section Structure
```text
─────────────────────────────────
YOUR RIGHTS
─────────────────────────────────

Content here...

─────────────────────────────────
WHAT TO SAY
─────────────────────────────────

Content here...
```

- Thin rules above and below section headers
- Section headers in uppercase, tracking-widest

---

## Part 6: Phrase Callout Boxes (Critical Change)

**File:** `src/index.css` + content pages

### Current Style (Minimal)
```text
│ What to say:
│ "I am exercising my right to remain silent."
```

### New Style (Prominent Pull Quote)
```text
┌──────────────────────────────────────────┐
│                                          │
│  "I do not consent to your              │
│   entry. Please slide any               │
│   warrant under the door."              │
│                                          │
└──────────────────────────────────────────┘
```

### CSS Implementation
```css
.phrase-box {
  @apply border-2 border-foreground p-6 my-6;
}

.phrase-box p {
  @apply text-lg leading-relaxed font-medium;
  font-size: clamp(1.125rem, 4vw, 1.5rem);
}

.phrase-box-label {
  @apply text-xs font-bold uppercase tracking-widest mb-4 text-muted-foreground;
}
```

### Warning Box Style
```css
.warning-box {
  @apply border border-foreground p-4 my-6 relative;
}

.warning-box::before {
  content: '⚠';
  @apply absolute -top-3 left-4 bg-background px-2 text-sm;
}
```

---

## Part 7: Card Builder Flow Updates

**Files to update:**
- `src/pages/PrepareCard.tsx`
- `src/components/StatusSelector.tsx`
- `src/types/card.ts`

### Status Screen Layout
```text
PREPARE
MY CARD

● ○ ○

We'll customize your card based on
your immigration status.

┌                              ┐
  U.S. CITIZEN
└                              ┘

┌                              ┐
  GREEN CARD HOLDER
└                              ┘

... etc (as FocusFrameCards)
```

### Remove "Undocumented" Option
From `src/types/card.ts`:
- Remove `'undocumented'` from `ImmigrationStatus` type
- Remove from `statusLabels` object
- Remove from `statusGuidance` object

From `src/components/StatusSelector.tsx`:
- Remove the undocumented option from array
- Update component to use FocusFrameCard style

### Final Card Screen Layout
```text
YOUR CARD
IS READY

[Card preview - phone mockup]

This fits your lock screen.
─────────────────────────────────

┌                              ┐
  SAVE TO PHOTOS            ↓
└                              ┘

┌                              ┐
  DOWNLOAD AUDIO            ↓
└                              ┘

─────────────────────────────────

HOW TO SET AS LOCK SCREEN

iPhone
Settings → Wallpaper → Add New →
Choose from Photos → Select your card

Android
Long press home screen → Wallpaper →
My photos → Select your card

─────────────────────────────────

Want hands-free playback?
Set up audio shortcuts →
```

---

## Part 8: Page Transitions

**File:** `src/App.tsx` or new transition wrapper component

### Implementation Options

**Option A: Framer Motion (if added)**
```tsx
<motion.div
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  exit={{ x: '-100%' }}
  transition={{ duration: 0.25, ease: 'easeOut' }}
>
```

**Option B: CSS-only with route change detection**
Add slide animation keyframes:
```css
@keyframes slide-in-right {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slide-out-left {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-20%); opacity: 0; }
}

.page-enter {
  animation: slide-in-right 250ms ease-out;
}
```

Apply to main content wrapper on route change.

---

## File Summary

### Files to Create
| File | Purpose |
|------|---------|
| `src/components/FocusFrameCard.tsx` | Reusable corner-bracket card with tap animation |
| `src/components/PageTransition.tsx` | Optional: Wrapper for slide transitions |

### Files to Modify
| File | Changes |
|------|---------|
| `src/index.css` | Paper texture, typography utilities, phrase boxes, animations |
| `tailwind.config.ts` | Add new animation keyframes |
| `src/pages/Index.tsx` | Complete homepage redesign with hero + three paths |
| `src/pages/ReviewRights.tsx` | Stacked title, FocusFrameCard navigation |
| `src/pages/HelpCommunity.tsx` | Stacked title, FocusFrameCard navigation |
| `src/pages/StayReadyTips.tsx` | Stacked title, FocusFrameCard navigation |
| `src/components/InfoPageLayout.tsx` | Stacked title, section dividers |
| `src/components/StatusSelector.tsx` | FocusFrameCard style, remove "Undocumented" |
| `src/types/card.ts` | Remove "undocumented" from types |
| `src/pages/PrepareCard.tsx` | Updated layout with stacked title, FocusFrameCards |
| `src/pages/rights/IceAtDoor.tsx` | New phrase-box styling for "What to say" |
| `src/pages/rights/UniversalRights.tsx` | New phrase-box styling |
| (All other content pages) | Update callout styling |

---

## Implementation Order

**Phase 1: Core Design System**
1. Update `src/index.css` with new typography, texture, and component styles
2. Update `tailwind.config.ts` with animations
3. Create `FocusFrameCard.tsx` component

**Phase 2: Homepage**
4. Redesign `src/pages/Index.tsx` with hero and three paths

**Phase 3: Section Index Pages**
5. Update `ReviewRights.tsx`
6. Update `HelpCommunity.tsx`
7. Update `StayReadyTips.tsx`

**Phase 4: Content Page Layout**
8. Update `InfoPageLayout.tsx`
9. Update phrase callout styling across all content pages

**Phase 5: Card Builder Flow**
10. Update types to remove "undocumented"
11. Update `StatusSelector.tsx`
12. Update `PrepareCard.tsx`

**Phase 6: Polish**
13. Add page transitions
14. Test all tap interactions on mobile
15. Verify typography scales across devices

---

## Technical Notes

- **Focus Frame tap animation**: Uses `:active` pseudo-class for mobile touch feedback. The corner brackets are `<span>` elements with borders that animate from fixed size to full container size.

- **Typography scaling**: Uses `clamp()` for fluid typography that works across all viewport sizes without breakpoints.

- **Paper texture**: SVG filter-based noise at very low opacity (0.03) for subtle texture without performance impact.

- **Page transitions**: Can be implemented with CSS animations triggered by route changes, or with Framer Motion if we want more control. CSS-only is lighter weight.

- **"Undocumented" removal**: This is intentional — the prompt specifies using "Prefer not to say" which generates a universal rights card without requiring disclosure of sensitive status.

- **Red accent (#C41E3A)**: Used ONLY for the hotline phone number. This creates maximum visual contrast for the emergency element.

