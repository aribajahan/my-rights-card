

# Fix Excessive Scroll on "Your Card Is Ready" Page

## Problem

The "Your Card is Ready" step scrolls way beyond the visible content because of the **hidden RightsCard** used for image generation.

The hidden card has these styles:
```tsx
style={{
  position: 'absolute',
  left: '-9999px',
  top: 0,
}}
```

The RightsCard itself is **1080px wide × 2400px tall** (phone lock screen dimensions). While `left: -9999px` moves it off-screen horizontally, it still contributes to the document's vertical scroll height because:

1. `position: absolute` is relative to the nearest positioned ancestor (the content container)
2. The 2400px height extends the scrollable area

## Solution

Add styles to properly contain the hidden card so it doesn't affect document flow:

```text
Current:                          Fixed:
┌─────────────────────────┐       ┌─────────────────────────┐
│ Your Card Is Ready      │       │ Your Card Is Ready      │
│ [phone mockup]          │       │ [phone mockup]          │
│ Lock screen instructions│       │ Lock screen instructions│
│ Next Steps nav          │       │ Next Steps nav          │
├─────────────────────────┤       └─────────────────────────┘
│                         │         ↑ Page ends here
│ (2400px of empty scroll)│
│                         │
└─────────────────────────┘
```

## Code Change

**File: `src/pages/PrepareCard.tsx`**

Update the hidden card container (lines 148-153) from:

```tsx
<div 
  style={{
    position: 'absolute',
    left: '-9999px',
    top: 0,
  }}
>
```

To:

```tsx
<div 
  style={{
    position: 'fixed',
    left: '-9999px',
    top: 0,
    pointerEvents: 'none',
  }}
>
```

Using `position: fixed` removes the element entirely from the document flow, so its 2400px height won't create scroll. The `pointerEvents: none` ensures it never interferes with interactions.

## Why This Works

| Property | `absolute` | `fixed` |
|----------|-----------|---------|
| Positioned relative to | Nearest positioned ancestor | Viewport |
| Affects document scroll | Yes (extends parent) | No |
| Stays in place on scroll | No | Yes |

Since we only use this element for generating an image with `html-to-image`, `position: fixed` works perfectly - the library captures the element regardless of its positioning.

