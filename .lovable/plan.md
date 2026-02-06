

# Increase Font Sizes for Better Readability

## Current vs Proposed Sizes

| Element | Current | Proposed | Notes |
|---------|---------|----------|-------|
| Document Type label | 18px | 24px | +33% |
| Document Type value | 28px | 36px | +29% |
| Status badge | 20px | 26px | +30% |
| **5 Rights list** | 36px (Anton bold) | 48px (Inter medium) | Larger + lighter weight |
| Calm bar | 28px | 36px | +29% |
| Statement box | 24px | 30px | +25% |
| Emergency contacts label | 18px | 24px | +33% |
| Emergency contacts values | 24px | 32px | +33% |
| Disclaimer | 16px | 20px | +25% |
| **MY RIGHTS title** | 96px | 96px | Unchanged per request |

## Key Change: Rights List Typography

Switching from Anton (condensed, heavy) to Inter (regular weight, more open):

```text
Current:                          Proposed:
━━━━━━━━━━━━━━━━━━━━━━━━         ━━━━━━━━━━━━━━━━━━━━━━━━
NO WARRANT, NO ENTRY              NO WARRANT, NO ENTRY
(Anton 36px, heavy)               (Inter 48px, weight 500)
━━━━━━━━━━━━━━━━━━━━━━━━         ━━━━━━━━━━━━━━━━━━━━━━━━
```

The Inter font at medium weight (500) will be:
- Easier to read at a glance
- Less dense and more breathable
- Better contrast between characters
- Still bold enough to stand out

## Files to Modify

**`src/components/RightsCard.tsx`** — Update font sizes throughout

### Specific Changes

1. **Status bar** (lines 80-98):
   - Label: 18px → 24px
   - Value: 28px → 36px
   - Badge: 20px → 26px, padding 12px 24px → 16px 28px

2. **Rights list** (lines 120-135):
   - Font: Anton → Inter
   - Size: 36px → 48px
   - Weight: default → 500 (medium)
   - Gap between items: 16px → 20px

3. **Calm bar** (lines 145-155):
   - Size: 28px → 36px
   - Padding: 24px 32px → 28px 36px

4. **Statement box** (lines 166-175):
   - Size: 24px → 30px
   - Padding: 32px → 40px

5. **Emergency contacts** (lines 181-206):
   - Label: 18px → 24px
   - Values: 24px → 32px
   - Gap: 8px → 12px

6. **Disclaimer** (lines 216-223):
   - Size: 16px → 20px

