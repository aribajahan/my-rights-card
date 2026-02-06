

# Fix "Review My Rights" Button

## The Problem

The button on the card download screen links to `/review`, but the actual route is `/rights`.

| Current | Should Be |
|---------|-----------|
| `to="/review"` | `to="/rights"` |

## File to Modify

**`src/pages/PrepareCard.tsx`** — Line 196

Change the Link destination from `/review` to `/rights`.

---

## Next Steps After This Fix

Once the button is fixed, the workflow you mentioned is perfect:

1. **Confirm all English content** - Review each rights page to make sure the text is accurate
2. **Provide translations** - Share the translated content for Spanish, Bengali, Chinese, Korean, and Hindi
3. **Integrate translations** - I'll update the LanguageContext and all content files to support the new languages

The app is already architected for multi-language support via the LanguageContext, so adding translations will be straightforward once you have the content ready.

