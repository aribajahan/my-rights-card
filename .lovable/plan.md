

# Fix: "Your Card Is Ready" Screen - Reduce Scroll Length

## Current Problems

| Element | Current | Issue |
|---------|---------|-------|
| Title | `headline-page` (2.5-5rem) | Too large for this context |
| Phone mockup | 400px tall | Takes most of viewport |
| Content gap | `gap-6` (24px) | Adds unnecessary spacing |
| Footer buttons | 6 stacked items | Creates ~300px fixed footer |
| Content padding | `pb-40` (160px) | Reserves space for footer |

Combined: User must scroll past ~600px+ of content to see all buttons.

---

## Fixes

### 1. Reduce Title Size
Change from `headline-page` to `headline-section` or custom smaller size for this step only.

**Current:** "Your Card / Is Ready" at 2.5-5rem
**Updated:** Single line "Your Card Is Ready" at smaller scale

### 2. Shrink Phone Mockup
Reduce phone frame dimensions:
- **Current:** 180px × 400px
- **Updated:** 140px × 310px (or similar)

This still shows the card preview but takes less vertical space.

### 3. Reduce Content Gaps
Change `gap-6` to `gap-4` in the card step container.

### 4. Consolidate Footer Actions
The footer has too many items. Restructure to prioritize the main action:

**Current footer (card step):**
1. Download Card Image (primary)
2. Download Audio Statement (primary)
3. Helper text
4. Audio shortcut link
5. Review My Rights (secondary)
6. Start Over
7. Privacy Notice

**Updated footer (card step):**
1. Download Card Image (primary) - keep
2. Download Audio Statement (secondary styling, smaller)
3. Collapsible or inline: "How to set up shortcuts" + "Review Rights" as links
4. Start Over (smaller)
5. Privacy Notice (smaller)

### 5. Reduce Footer Padding Reservation
Change `pb-40` to `pb-32` or even `pb-28` since footer will be smaller.

---

## Visual Comparison

### Before
```
┌─────────────────────┐
│ ← Back        ●●●●● │
│                     │
│    YOUR CARD        │ ← Large title
│    IS READY         │
│                     │
│  ┌─────────────┐    │
│  │             │    │
│  │   Phone     │    │ ← 400px tall
│  │   Mockup    │    │
│  │             │    │
│  │             │    │
│  └─────────────┘    │
│                     │
│  This fits your...  │
│                     │
├─────────────────────┤ ← User must scroll to see buttons
│ [Download Card]     │
│ [Download Audio]    │
│ Helper text...      │
│ How to set up →     │
│ [Review My Rights]  │
│ Start Over          │
│ Privacy notice      │
└─────────────────────┘
```

### After
```
┌─────────────────────┐
│ ← Back        ●●●●● │
│                     │
│  Your Card Is Ready │ ← Smaller, single line
│                     │
│    ┌─────────┐      │
│    │  Phone  │      │ ← 310px tall
│    │ Mockup  │      │
│    └─────────┘      │
│  This fits your...  │
├─────────────────────┤
│ [Download Card]     │ ← Primary action visible
│ Download Audio      │ ← Secondary, smaller
│ Set up shortcuts →  │
│ Review Rights →     │ ← Inline links
│ Start Over          │
└─────────────────────┘
```

All content visible with minimal or no scroll on most phones.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/PrepareCard.tsx` | Smaller title, smaller phone mockup, consolidated footer, reduced padding |

---

## Technical Details

### Phone Mockup Scaling
Current: 180×400 with `scale(0.152)` on 1080×2400 card
Updated: 140×310 with `scale(0.118)` (140/1080 ≈ 0.13)

The scale factor should be: `newWidth / 1080` to maintain aspect ratio.

### Footer Button Hierarchy
- **Primary:** Download Card Image (full button styling)
- **Secondary:** Download Audio (text link or smaller button)
- **Tertiary:** Setup tips, Review Rights (inline text links)
- **Minimal:** Start Over, Privacy (small text)

This keeps the essential action prominent while reducing vertical space.

