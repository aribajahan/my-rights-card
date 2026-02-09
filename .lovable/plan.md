

# Favicon Update — Match Anton Font Style

## What's Changing
Regenerate `public/favicon.png` with an "SR" monogram that closely matches the bold, ultra-condensed, squared-off style of the **Anton** font used in the homepage "STAY READY" lockup.

## Design Spec
- Letters "S" over "R" stacked vertically, tightly packed (line-height ~0.85)
- Ultra-condensed, squared-off letterforms matching Anton's characteristic style
- Cream white text (#FAF9F6) on solid black (#1A1A1A) square background
- 512x512px canvas, letters fill nearly the entire frame
- No padding, borders, or decorative elements

## Technical Plan
- Use AI image generation to create a new favicon matching the Anton font aesthetic
- Overwrite `public/favicon.png` with the result
- No HTML changes needed (already references `/favicon.png`)

