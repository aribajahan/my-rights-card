
# Complete App Rebuild: Know Your Rights

Based on the detailed content spec document, this plan covers a complete visual and content overhaul of the application.

## Overview

This rebuild involves two distinct visual identities:
- **Site/App**: Warm, community-oriented, inviting (like newpublic.org)
- **Downloadable Card**: Bold, high-contrast, crisis-ready (unchanged from current zine style)

---

## 1. Visual Design Overhaul

### New Color Palette for Site/App

| Element | Color | Hex |
|---------|-------|-----|
| Background | Warm peach/cream | `#F5D6BA` or `#FDF6E3` |
| Headlines | Deep purple | `#5B21B6` |
| Body text | Dark gray | `#1F2937` |
| Buttons | Teal/green | `#059669` |
| Cards | White | `#FFFFFF` |
| Accent | Purple/coral | For highlights |

### Files to Update
- `src/index.css` - Update CSS variables for new palette
- `tailwind.config.ts` - Update shadow and color definitions

---

## 2. Home Screen Updates

**File:** `src/pages/Index.tsx`

Update to match spec exactly:
- Headline: "Know Your Rights"
- Subhead: "Be prepared. Stay calm. Know your rights."
- Two buttons with exact text from spec:
  - "Prepare My Card" + "Create a digital rights card to save on your phone"
  - "Review My Rights" + "Learn what to do in different situations"
- Hotline box (always visible): 24/7 HOTLINE, 1-844-363-1423, United We Dream
- Footer disclaimer: "This tool asserts your constitutional rights. It is not legal advice."

---

## 3. Prepare My Card Flow Updates

**File:** `src/pages/PrepareCard.tsx`

### Step 1: Select Your Status
- Headline: "Select Your Status"
- Subhead: "This is optional and helps personalize your card."
- Options (exact from spec):
  - U.S. Citizen
  - Green Card Holder
  - Visa Holder
  - DACA / TPS
  - Asylum Seeker
  - Undocumented
  - Prefer not to say
- Buttons: Next / Skip

### Step 2: Document Type
- Headline: "Document Type"
- Subhead: "Select your ID type to include on your card."
- Small text: "This will be added to your card for your reference."
- Options:
  - Green Card
  - Work Permit (EAD)
  - Visa / I-94
  - DACA Approval Notice
  - TPS Card
  - Passport (with visa)
  - None / Prefer not to say

### Step 3: Emergency Contacts
- Headline: "Emergency Contacts"
- Subhead: "Add up to 3 contacts who can help if needed."
- Small text: "This will be added to your card for your reference."

### Step 4: Review Your Rights (Education Screen)
- Headline: "Your Rights"
- 4 cards with exact text from spec:
  1. Right to remain silent
  2. Right to refuse entry without warrant
  3. Right to refuse search
  4. Right to a lawyer
- Button: "Generate My Card"

### Step 5: Card Preview & Download
- Show generated card
- Buttons: Download Image (primary), Review My Rights (secondary), Start Over (text link)

**Files to update:**
- `src/pages/PrepareCard.tsx`
- `src/components/StatusSelector.tsx`
- `src/components/DocumentForm.tsx`
- `src/components/EmergencyContactForm.tsx`
- `src/components/RightsPreview.tsx`
- `src/types/card.ts` (add "None / Prefer not to say" document option)

---

## 4. Rights Card (Downloadable Image) Updates

**File:** `src/components/RightsCard.tsx`

### Icon Improvements
Replace generic Lucide icons with bolder, stencil-style alternatives:
- NO WARRANT, NO ENTRY: Use `DoorClosed` with thicker stroke or custom SVG of door with X
- RIGHT TO SILENCE: Use `MessageCircleOff` or lips with finger gesture
- NO SEARCH WITHOUT CONSENT: Use `Hand` (stop gesture) or `SearchX`
- RIGHT TO A LAWYER: Use `Phone` or keep `Scale` but chunkier

### Technical Requirements
- Keep black `#1A1A1A` and cream `#F5F2E8` palette
- Thick icon strokes (3-4px)
- White icons on black background
- Emergency contacts must display on card
- Disclaimer: "This card asserts your constitutional rights. It is not legal advice."

---

## 5. Review My Rights Section Updates

### Main Menu
**File:** `src/pages/ReviewRights.tsx`
- Headline: "Review My Rights"
- 8 tappable rows with chevrons (per spec)

### Section Content Pages

Each page needs complete content replacement from the spec:

#### a) Your Universal Rights
**File:** `src/pages/rights/UniversalRights.tsx`

Add these sections (from spec):
- Intro box: "Everyone in the United States has constitutional rights..."
- The Right to Remain Silent (with "What to say" quote)
- The Right to Refuse Entry Without a Warrant
- The Right to Refuse a Search
- The Right to a Lawyer
- **NEW**: Do Not Sign Anything You Don't Understand
- **NEW**: Do Not Lie or Present False Documents
- **NEW**: Stay Calm. Do Not Run.
- Closing box: "These rights belong to everyone..."

#### b) ICE at Your Door
**File:** `src/pages/rights/IceAtDoor.tsx`

Update with 6 detailed steps from spec:
1. Stay Calm
2. Ask for Identification
3. Ask for a Warrant
4. Check the Warrant (with 4 bullet criteria)
5. If They Don't Have a Valid Warrant
6. **NEW**: Document Everything (with checklist)
- **NEW**: "Do Not" section
- **NEW**: "Prepare Your Household" section

#### c) Stopped in Your Car
**File:** `src/pages/rights/StoppedCar.tsx`

Add from spec:
- What You Must Do (3 items)
- What You Do Not Have to Do (3 items)
- If They Ask to Search Your Car
- If They Ask About Your Immigration Status
- **NEW**: What to Keep in Your Car (4 items)
- **NEW**: What NOT to Keep in Your Car (2 items)
- "Do Not" section

#### d) Stopped on the Street
**File:** `src/pages/rights/StoppedStreet.tsx`

Content matches spec - minor text updates only

#### e) ICE at Your Workplace
**File:** `src/pages/rights/IceWorkplace.tsx`

Major restructure per spec:
- Intro: "If ICE comes to your workplace, stay calm. Do not run."
- What to Do (5 numbered steps)
- What NOT to Do (4 items)
- Know Your Workplace Rights (4 bullet points)

#### f) Warrants: Know the Difference
**File:** `src/pages/rights/Warrants.tsx`

Complete rewrite per spec:
- Judicial Search Warrant (checkmark) - with 3 criteria
- Judicial Arrest Warrant (warning) - with note about home entry
- ICE Administrative Warrant (X) - Forms I-200/I-205
- How to Check a Warrant (5 steps)

#### g) What to Carry
**File:** `src/pages/rights/WhatToCarry.tsx`

Update per spec:
- Everyone Should Carry (3 items)
- If You Have Lawful Immigration Status (green card requirement note)
- Do NOT Carry (3 specific items)
- Remove: Phone security section, Family safety plan (these aren't in spec)

#### h) Hotlines & Resources
**File:** `src/pages/rights/Hotlines.tsx`

Complete rewrite with exact data from spec:
- **Emergency Hotlines:**
  - United We Dream: 1-844-363-1423, Text 877877, 24/7
  - Freedom for Immigrants: 1-209-757-3733, Weekdays 8am-8pm PT
  - ICE Detainee Locator: 1-866-347-2423, locator.ice.gov
  - Immigration Court Case Status: 1-800-898-7180
- **Find a Lawyer:**
  - Warning about notarios
  - CLINIC Legal Directory
  - Immigration Advocates Network
  - iAmerica Legal Help
- **Know Your Rights Resources:**
  - ILRC Red Cards
  - Immigrant Defense Project
  - ACLU Know Your Rights

---

## 6. Footer Updates

All screens should include:
- Disclaimer: "This tool provides general information about your constitutional rights. It is not legal advice. For advice about your specific situation, consult a qualified immigration attorney."
- Privacy note: "This tool does not collect or store any personal information."

---

## 7. Translation Context Updates

**File:** `src/contexts/LanguageContext.tsx`

Update all English translation keys to match exact spec wording before adding other languages. Key updates:
- Home screen text
- Status and document options
- Rights preview content
- All "What to say" quotes

---

## Files Modified Summary

| File | Type of Change |
|------|----------------|
| `src/index.css` | New warm color palette |
| `tailwind.config.ts` | Color/shadow updates |
| `src/pages/Index.tsx` | Content update |
| `src/pages/PrepareCard.tsx` | Flow and content updates |
| `src/components/StatusSelector.tsx` | Text updates |
| `src/components/DocumentForm.tsx` | Add "None / Prefer not to say" |
| `src/components/EmergencyContactForm.tsx` | Minor text updates |
| `src/components/RightsPreview.tsx` | Content updates |
| `src/components/RightsCard.tsx` | Icon improvements |
| `src/types/card.ts` | Add document type option |
| `src/pages/ReviewRights.tsx` | Minor updates |
| `src/pages/rights/UniversalRights.tsx` | Content rewrite |
| `src/pages/rights/IceAtDoor.tsx` | Content rewrite |
| `src/pages/rights/StoppedCar.tsx` | Content update |
| `src/pages/rights/StoppedStreet.tsx` | Minor updates |
| `src/pages/rights/IceWorkplace.tsx` | Content rewrite |
| `src/pages/rights/Warrants.tsx` | Complete rewrite |
| `src/pages/rights/WhatToCarry.tsx` | Content update |
| `src/pages/rights/Hotlines.tsx` | Complete rewrite |
| `src/contexts/LanguageContext.tsx` | English text updates |

---

## Implementation Order

1. Update color palette (CSS + Tailwind)
2. Update home screen
3. Update Prepare Card flow (all steps)
4. Update RightsCard icons
5. Update all 8 rights section pages
6. Update translations context
7. Test full flow end-to-end
