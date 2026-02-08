

# Stay Ready App Update - Implementation Plan

## Overview

This update adds significant new functionality to the existing Stay Ready application: audio statement downloads, "Help Your Community" section (6 pages), "Stay Ready Tips" section (7 pages), a new rights section, and homepage redesign with 3 paths.

---

## Summary of Changes

| Area | Current | Updated |
|------|---------|---------|
| Homepage paths | 2 (Prepare, Review) | 3 (Prepare, Review, Community) |
| Review My Rights sections | 9 | 10 (add "State Rights") |
| New sections | - | Help Your Community (6 pages) |
| New sections | - | Stay Ready Tips (7 pages) |
| Download screen | Card image only | Card + Audio download |
| Hotline section | Simple text link | Box with vCard download |

---

## Part 1: Homepage Redesign

### Current Layout
```text
PREPARE MY CARD (primary button)
REVIEW MY RIGHTS (underlined link)
```

### New Layout
```text
PREPARE MY CARD (primary button)
Save a rights card to your phone

REVIEW MY RIGHTS          HELP YOUR COMMUNITY
Learn what to do          Support your neighbors
(side-by-side underlined links)
```

### Hotline Box Addition
New bordered box replacing current simple text:
```text
┌─────────────────────────────────────┐
│  REPORT ICE ACTIVITY                │
│  United We Dream                    │
│  1-844-363-1423 (brick red) 24/7   │
│  [Save to Contacts]                 │
└─────────────────────────────────────┘
```

**Files to modify:**
- `src/pages/Index.tsx` — Redesign layout with side-by-side links and hotline box

---

## Part 2: Audio Download Feature

### Audio File Setup
- Create `public/audio/` directory
- Add placeholder path: `/audio/rights-statement-en.mp3`

### PrepareCard Download Screen Update
Add audio download button below card download:
```text
[Download Card Image]
[Download Audio Statement]
Play this statement out loud when you need it.
Set up a shortcut for one-tap access.

How to set up one-tap audio →
Review My Rights →
Start Over
```

**Files to modify:**
- `src/pages/PrepareCard.tsx` — Add audio download button and helper text

---

## Part 3: Help Your Community Section

### New Menu Page
Route: `/community`

```text
← Home

Help Your Community

You don't have to be directly affected to help.
Here's how to support your neighbors.

How to Be a Good Witness        →
Your Rights as a Bystander      →
What to Do If You See an Arrest →
Prepare Your Family             →
Rapid Response Networks         →
Mutual Aid & Support            →
```

### New Content Pages (6 total)
| Route | Page |
|-------|------|
| `/community` | Menu page |
| `/community/witness` | How to Be a Good Witness |
| `/community/bystander` | Your Rights as a Bystander |
| `/community/arrest` | What to Do If You See an Arrest |
| `/community/family` | Prepare Your Family |
| `/community/rapid-response` | Rapid Response Networks |
| `/community/mutual-aid` | Mutual Aid & Support |

**Files to create:**
- `src/pages/HelpCommunity.tsx` — Menu page
- `src/pages/community/GoodWitness.tsx`
- `src/pages/community/BystanderRights.tsx`
- `src/pages/community/SeeArrest.tsx`
- `src/pages/community/PrepareFamily.tsx`
- `src/pages/community/RapidResponse.tsx`
- `src/pages/community/MutualAid.tsx`

---

## Part 4: Stay Ready Tips Section

### New Menu Page
Route: `/tips`

```text
← Home

Stay Ready Tips

Practical ways to prepare yourself and your family.
These small steps can make a big difference.

Set Up Your Lock Screen      →
Set Up One-Tap Audio         →
Emergency Text Shortcuts     →
One-Tap Recording            →
Location Sharing Setup       →
Tracker Tips (AirTags)       →
What to Tell Your Kids       →
```

### New Content Pages (7 total)
| Route | Page |
|-------|------|
| `/tips` | Menu page |
| `/tips/lock-screen` | Set Up Your Lock Screen |
| `/tips/audio-shortcut` | Set Up One-Tap Audio |
| `/tips/emergency-text` | Emergency Text Shortcuts |
| `/tips/recording` | One-Tap Recording |
| `/tips/location-sharing` | Location Sharing Setup |
| `/tips/trackers` | Tracker Tips (AirTags) |
| `/tips/kids` | What to Tell Your Kids |

**Files to create:**
- `src/pages/StayReadyTips.tsx` — Menu page
- `src/pages/tips/LockScreen.tsx`
- `src/pages/tips/AudioShortcut.tsx`
- `src/pages/tips/EmergencyText.tsx`
- `src/pages/tips/Recording.tsx`
- `src/pages/tips/LocationSharing.tsx`
- `src/pages/tips/Trackers.tsx`
- `src/pages/tips/Kids.tsx`

---

## Part 5: Review My Rights Update

### Add New Section
Add "Do Rights Change by State?" as 9th section (before Hotlines)

| # | Section |
|---|---------|
| 1 | Your Universal Rights |
| 2 | ICE at Your Door |
| 3 | Stopped in Your Car |
| 4 | Stopped on the Street |
| 5 | ICE at Your Workplace |
| 6 | Warrants: Know the Difference |
| 7 | What to Carry |
| 8 | Report and Record |
| 9 | Do Rights Change by State? ← NEW |
| 10 | Hotlines & Resources |

**Files to modify:**
- `src/pages/ReviewRights.tsx` — Add new section to menu
- **File to create:** `src/pages/rights/StateRights.tsx`

---

## Part 6: vCard Download Utility

Create utility for downloading United We Dream contact as .vcf file.

```typescript
// src/lib/vcard.ts
export function downloadVCard(name: string, phone: string, org: string) {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
ORG:${org}
END:VCARD`;
  
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${name.replace(/\s+/g, '-')}.vcf`;
  link.click();
  URL.revokeObjectURL(url);
}
```

**Files to create:**
- `src/lib/vcard.ts`

---

## Part 7: Routing Updates

### New Routes to Add
```text
/community               → HelpCommunity menu
/community/witness       → GoodWitness
/community/bystander     → BystanderRights
/community/arrest        → SeeArrest
/community/family        → PrepareFamily
/community/rapid-response → RapidResponse
/community/mutual-aid    → MutualAid

/tips                    → StayReadyTips menu
/tips/lock-screen        → LockScreen
/tips/audio-shortcut     → AudioShortcut
/tips/emergency-text     → EmergencyText
/tips/recording          → Recording
/tips/location-sharing   → LocationSharing
/tips/trackers           → Trackers
/tips/kids               → Kids

/rights/state            → StateRights
```

**Files to modify:**
- `src/App.tsx` — Add all new routes and imports

---

## Part 8: Update Hotlines Page

Add vCard download button and additional resources.

**Files to modify:**
- `src/pages/rights/Hotlines.tsx` — Add "Save to Contacts" button, add ICE Detainee Locator, CLINIC directory

---

## File Summary

### Files to Create (17 new files)
```text
public/audio/.gitkeep                    (placeholder for audio)
src/lib/vcard.ts                         (vCard utility)
src/pages/HelpCommunity.tsx              (menu)
src/pages/community/GoodWitness.tsx
src/pages/community/BystanderRights.tsx
src/pages/community/SeeArrest.tsx
src/pages/community/PrepareFamily.tsx
src/pages/community/RapidResponse.tsx
src/pages/community/MutualAid.tsx
src/pages/StayReadyTips.tsx              (menu)
src/pages/tips/LockScreen.tsx
src/pages/tips/AudioShortcut.tsx
src/pages/tips/EmergencyText.tsx
src/pages/tips/Recording.tsx
src/pages/tips/LocationSharing.tsx
src/pages/tips/Trackers.tsx
src/pages/tips/Kids.tsx
src/pages/rights/StateRights.tsx
```

### Files to Modify (5 files)
```text
src/App.tsx                  (add routes)
src/pages/Index.tsx          (homepage redesign)
src/pages/PrepareCard.tsx    (audio download)
src/pages/ReviewRights.tsx   (add state section)
src/pages/rights/Hotlines.tsx (vCard, resources)
```

---

## Implementation Order

Given the scope, I recommend implementing in phases:

**Phase 1: Core Updates**
1. Homepage redesign with 3 paths
2. vCard utility
3. Audio download on PrepareCard

**Phase 2: Help Your Community**
4. Menu page + 6 content pages
5. Route updates

**Phase 3: Stay Ready Tips**
6. Menu page + 7 content pages
7. Route updates

**Phase 4: Rights Updates**
8. StateRights page
9. Hotlines page updates
10. Final routing

---

## Technical Notes

- All new pages use existing `InfoPageLayout` component
- All content follows existing callout styling (`.callout-minimal`)
- vCard download uses native Blob API (no dependencies)
- Audio download uses standard anchor download attribute
- No backend required — everything client-side
- Mobile-first styling using existing Tailwind classes

