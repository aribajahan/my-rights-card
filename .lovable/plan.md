
# Multiple Updates: Homepage, Prepare Card, Share Safely, About Page, and Consistency Fixes

## Summary of Changes

This plan addresses all the requested updates across multiple files.

---

## 1. Homepage Updates (`src/pages/Index.tsx`)

### Add "KNOW YOUR RIGHTS" Eyebrow
Add back the small uppercase eyebrow label above the main headline.

### Tighten Footer Line Height
Reduce spacing in the footer section by:
- Changing `space-y-2` to `space-y-1`
- Reducing vertical padding

**Before:**
```text
This is not legal advice.

[large gap]

Privacy Notice
```

**After:**
```text
This is not legal advice.
Privacy Notice
```

### Add About Link
Add a link to the new About page in the footer.

---

## 2. Prepare Card Flow (`src/pages/PrepareCard.tsx`)

### Fix Double Line at Top
The issue is that both `StatusSelector` and the parent component have dividers. The StatusSelector has a `section-divider` at line 37. Need to review if the parent also adds a line.

Looking at the code, the StatusSelector adds its own divider. The page headline doesn't add one. I'll verify the exact issue and remove any duplicate.

### Add Home Button on Final "Card Is Ready" Step
Add a Home button below "Start Over" to navigate back to homepage.

### Fix Excessive Scroll on Final Step
The `pb-32` (8rem padding-bottom) in the main content area plus the fixed footer causes excess scroll. Reduce to `pb-24` or add margin management.

---

## 3. Simplify Document Options (`src/types/card.ts`)

Remove options without useful numbers:
- U.S. Passport Card (redundant)
- Birth Certificate (no system number)
- Passport (with visa) (confusing)

**Updated options by status:**

| Status | Options |
|--------|---------|
| U.S. Citizen | U.S. Passport, Naturalization Certificate, None |
| Green Card | Green Card, None |
| Visa | Visa / I-94, None |
| DACA | DACA Approval Notice, Work Permit (EAD), None |
| TPS | TPS Card, Work Permit (EAD), None |
| Asylum | Asylum Receipt Notice, Work Permit (EAD), None |

Also remove unused types from `DocumentType`:
- `usPassportCard`
- `birthCertificate`
- `passportVisa`

---

## 4. Prepare Family: Consistent List Markers (`src/pages/community/PrepareFamily.tsx`)

Currently uses mixed markers:
- Em dashes (`—`) for "Make Cards for Everyone"
- Checkboxes (`☐`) for "Create a Family Plan"
- Em dashes for "Talk to Your Kids"
- Em dashes for "Keep Documents Safe"

**Fix:** Keep checkboxes for the actionable checklist items, use em dashes consistently elsewhere.

---

## 5. Share Safely Updates (`src/pages/community/ShareSafely.tsx`)

### Update Share Link
Change from `stayready.lovable.app` to `stayready.org`

### Add Printable Resource Links
Convert text to clickable links:
- ACLU Know Your Rights → https://www.aclu.org/know-your-rights/page/2
- ILRC Red Cards → https://www.ilrc.org/redcards  
- Add NILC Know Your Rights → https://www.nilc.org/resources/everyone-has-certain-basic-rights/

---

## 6. Fix Links Site-wide

Change from showing name + URL to just linked text. Example:

**Before:**
```
ACLU Know Your Rights
https://www.aclu.org/know-your-rights/page/2
```

**After:**
```
ACLU Know Your Rights ← (this is a clickable link)
```

Update in:
- `src/pages/community/ShareSafely.tsx`
- `src/pages/Hotlines.tsx` (Printable Rights Cards section)

---

## 7. Create About Page (`src/pages/About.tsx`)

New page with:
- Standard InfoPageLayout
- Stacked headline "ABOUT / STAY READY"
- Sections with dividers:
  1. Who built this (team of immigrant women)
  2. What this is (community tool, not government)
  3. Sources (ILRC, IDP, ACLU, NILC)
  4. Legal disclaimer
  5. Contact/feedback email

### Add Route
Add `/about` route in `src/App.tsx`

### Link from Homepage
Add "About" link in footer of `src/pages/Index.tsx`

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Add "KNOW YOUR RIGHTS" eyebrow, tighten footer, add About link |
| `src/pages/PrepareCard.tsx` | Fix double line, add Home button, reduce bottom padding |
| `src/types/card.ts` | Remove unused document types, simplify options |
| `src/pages/community/PrepareFamily.tsx` | Consistent list markers |
| `src/pages/community/ShareSafely.tsx` | Update URL, add printable links |
| `src/pages/Hotlines.tsx` | Add links to printable resources |
| `src/pages/About.tsx` | **NEW FILE** - About page |
| `src/App.tsx` | Add /about route |

---

## Code Examples

### Homepage Footer (tightened)
```tsx
<div className="border-t border-foreground/10 pt-4 space-y-1">
  <p className="text-xs text-muted-foreground">
    This is not legal advice.
  </p>
  <PrivacyNotice />
  <Link to="/about" className="text-xs text-muted-foreground underline hover:text-foreground transition-colors">
    About
  </Link>
</div>
```

### Share Safely Printables (linked)
```tsx
<section>
  <h2>Printable Resources</h2>
  <ul className="list-none space-y-1 text-sm">
    <li>— <a href="https://www.aclu.org/know-your-rights/page/2" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">ACLU Know Your Rights</a></li>
    <li>— <a href="https://www.ilrc.org/redcards" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">ILRC Red Cards</a></li>
    <li>— <a href="https://www.nilc.org/resources/everyone-has-certain-basic-rights/" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">NILC Know Your Rights</a></li>
  </ul>
</section>
```

### About Page Structure
```tsx
<InfoPageLayout 
  title="About" 
  subtitle="Stay Ready"
  backTo="/"
  backLabel="Home"
>
  <section>
    <p>This tool was built by a team of immigrant women in the United States.</p>
    <p>We made this for our families, our neighbors, and our communities.</p>
  </section>
  
  <section>
    <p>Stay Ready is a community tool — not a government website.</p>
    <p>We are not affiliated with ICE, the Department of Homeland Security, or any government agency.</p>
  </section>
  
  <section>
    <h2>Sources</h2>
    <ul>
      <li>— Immigrant Legal Resource Center (ILRC)</li>
      <li>— Immigrant Defense Project (IDP)</li>
      <li>— American Civil Liberties Union (ACLU)</li>
      <li>— National Immigration Law Center (NILC)</li>
    </ul>
  </section>
  
  <section>
    <p>This is not legal advice. For advice about your situation, talk to an immigration attorney.</p>
  </section>
  
  <section>
    <h2>Questions or Feedback?</h2>
    <a href="mailto:hello@stayready.org">hello@stayready.org</a>
  </section>
</InfoPageLayout>
```

---

## Technical Notes

### Double Line Investigation
The StatusSelector component has:
- Line 34: subtitle text with `mb-8`
- Line 37: `<div className="section-divider mb-6" />`

The parent PrepareCard on the status step only has:
- Line 112-115: headline
- Line 116: StatusSelector component

No parent divider, so the double line may be from the StatusSelector's internal divider + the mb-8 appearing as extra space. Will remove or adjust the StatusSelector divider since the parent handles visual hierarchy.

### Email Placeholder
The About page uses `hello@stayready.org` as a placeholder. Update this to the actual email address.
