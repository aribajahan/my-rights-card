

# Stay Ready — Navigation, Contextual Tips, and Homepage Cleanup

Three interconnected updates to improve discoverability, add contextual guidance to every rights page, and streamline the homepage.

---

## What's Changing

### 1. Hamburger Navigation Menu (Every Page)
A minimal hamburger icon (three lines) in the top-right corner of every page. Tapping it opens a full-screen overlay with the main navigation links, styled to match the app's editorial aesthetic.

**Menu items:**
- Prepare My Card
- Review My Rights
- Help Your Community
- Tips
- Hotlines and Resources
- About

**Design details:**
- Cream background, bold uppercase black text, left-aligned, stacked vertically
- Large tap targets (48px+)
- X close button in same position as hamburger
- No icons or decorations

### 2. Contextual Tips + Hotline Footer on Every Rights Page
After the main content on each rights page (Universal, Door, Car, Street, etc.), a quiet "Stay Ready" sign-off section replaces the existing footer. It includes two contextually relevant tip links and the hotline.

**Layout:**
- Thin gray line separator
- "STAY READY" small gray uppercase label
- Two tip links (dark gray text, arrow right-aligned, no boxes or borders)
- Hotline number in brick red with "United We Dream" tagline
- "Not legal advice." disclaimer at the bottom

**Tip assignments per page (as specified in the document):**
- Universal Rights: Practice rights + Lock screen
- At Your Door: Practice rights + One-tap audio
- In Your Car: One-tap audio + Emergency text
- On the Street: Practice rights + Location sharing
- At Work: Emergency text + Emergency contacts
- At a Checkpoint: One-tap audio + Lock screen
- If You're Detained: Memorize a number + Emergency contacts
- Warrants: Lock screen + Practice rights
- Recording and Reporting: Privacy settings + Location sharing
- Practice Your Rights: One-tap audio + Lock screen

### 3. Homepage Cleanup
- **Add** subtitle under "Stay Ready": *"Know what to say if ICE comes to your door, your car, or your work."*
- **Remove** the "Stay Ready Tips" section and "All tips" link (now accessible via nav)
- **Remove** "Hotlines and Resources" and "About" footer links (now in nav)
- **Keep** the hotline number, United We Dream tagline, and "Not legal advice / No data stored" disclaimer

---

## Technical Plan

### New Components

**`src/components/HamburgerMenu.tsx`**
- Full-screen overlay component using React state for open/close
- Hamburger icon (three horizontal lines) rendered as simple spans or SVG
- Uses `NavListItem` or plain `Link` components for menu items
- X close button
- Cream background matching `--background` CSS variable

**`src/components/RightsPageFooter.tsx`**
- Accepts an array of tip objects (`{ label, to }`) as props
- Renders the "STAY READY" label, tip links, hotline, and disclaimer
- Styled to be visually quiet: small gray label, dark gray (#444) tip text, no boxes
- Hotline in brick red (`text-hotline`)

### Modified Files

**`src/components/InfoPageLayout.tsx`**
- Add `HamburgerMenu` to the header (top-right)
- Replace existing footer with `RightsPageFooter` when contextual tips are provided
- Add optional `tips` prop to pass contextual tip data
- Keep existing `showFullHotline` behavior as fallback for non-rights pages

**`src/pages/Index.tsx`**
- Add `HamburgerMenu` to the top-right
- Add subtitle line under "Stay Ready" heading
- Remove the "Stay Ready Tips" section entirely
- Remove "Hotlines and Resources" and "About" links from footer
- Keep hotline block and simplify disclaimer to one line

**`src/pages/ReviewRights.tsx`**
- Add `HamburgerMenu` to the header

**`src/pages/PrepareCard.tsx`, `src/pages/HelpCommunity.tsx`, `src/pages/StayReadyTips.tsx`, `src/pages/Hotlines.tsx`, `src/pages/About.tsx`**
- Add `HamburgerMenu` to the header of each top-level page

**All 10 rights pages** (UniversalRights, IceAtDoor, StoppedCar, StoppedStreet, IceWorkplace, AtCheckpoint, IfDetained, Warrants, RecordingReporting, PracticeRights):
- Pass contextual `tips` prop to `InfoPageLayout` with the assigned tip links

### Tip Route Mapping
The tips will link to existing routes:
- Practice saying your rights: `/rights/practice`
- Set up your lock screen: `/tips/lock-screen`
- Set up one-tap audio: `/tips/audio`
- Set up emergency text shortcut: `/tips/emergency-text`
- Set up location sharing: `/tips/location-sharing`
- Set up emergency contacts: `/tips/emergency-contacts`
- Memorize a number: `/tips/memorize-number`
- Review privacy settings: `/tips/privacy`

