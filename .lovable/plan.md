
# Audio Practice Feature Implementation

## Overview
Create an interactive audio-guided practice flow where users listen to constitutional rights phrases and repeat them out loud. The feature transforms the existing static "Practice Your Rights" page into a guided 30-second exercise.

## Files to Create

| File | Purpose |
|------|---------|
| `public/audio/rights_practice_audio.mp3` | Audio file (copy from upload) |
| `src/pages/tips/PracticeRights.tsx` | Complete rewrite with landing page + practice flow |

## Files to Modify

| File | Change |
|------|--------|
| `src/pages/PrepareCard.tsx` | Update "Practice saying your rights" link text |

## User Flow

```text
Landing Page                Practice Flow
─────────────              ──────────────
                           
← Stay Ready Tips          [Intro Screen]
                           "We'll go through 4 phrases..."
PRACTICE                   [BEGIN]
YOUR RIGHTS                     │
                                ▼
Takes about 30 seconds.    [Phrase 1] ─► Audio plays
                           "Your turn" ─► 5s countdown
[START PRACTICE →]              │
                                ▼
                           [Phrase 2] ─► Audio plays
                           "Your turn" ─► 5s countdown
                                │
                                ▼
                           ... (phrases 3-4)
                                │
                                ▼
                           [Done Screen]
                           "Nice work."
                           [PRACTICE AGAIN]
                           [← Back to Tips]
```

## Component Architecture

### State Machine
```text
┌─────────┐    BEGIN    ┌──────────┐
│ landing │ ──────────► │  intro   │
└─────────┘             └────┬─────┘
                             │ BEGIN
                             ▼
                        ┌──────────┐
                        │ playing  │◄──┐
                        │ phrase N │   │ next phrase
                        └────┬─────┘   │
                             │ audio ends
                             ▼
                        ┌──────────┐   │
                        │ countdown│───┘
                        │ (5 sec)  │
                        └────┬─────┘
                             │ last phrase done
                             ▼
                        ┌──────────┐    AGAIN   ┌─────────┐
                        │  done    │ ─────────► │  intro  │
                        └──────────┘            └─────────┘
```

### Controls (During Practice)
- **Pause/Play**: Toggle button, pauses audio and countdown
- **Replay**: Restart current phrase from beginning
- **Back/Next**: Skip between phrases
- **Voice Off**: Text-only mode (skips audio, just shows text + countdown)

## Technical Implementation

### Audio Timestamp Data
```typescript
const PRACTICE_DATA = {
  audioFile: "/audio/rights_practice_audio.mp3",
  phrases: [
    { id: 1, text: "I am exercising my constitutional rights.", startTime: 0, endTime: 3.5, pauseSeconds: 5 },
    { id: 2, text: "I do not consent to a search of my person, my belongings, my vehicle, or my home.", startTime: 3.5, endTime: 10.2, pauseSeconds: 5 },
    { id: 3, text: "I am choosing to remain silent.", startTime: 10.2, endTime: 12.5, pauseSeconds: 5 },
    { id: 4, text: "I want to speak with a lawyer before answering any questions.", startTime: 12.5, endTime: 16.8, pauseSeconds: 5 }
  ]
};
```

### Audio Playback Logic
1. On phrase start: `audio.currentTime = startTime`, then `audio.play()`
2. Monitor `timeupdate` event - when `currentTime >= endTime`, pause audio and start countdown
3. After countdown completes, advance to next phrase and repeat
4. User must tap "Begin" to start (mobile autoplay restrictions require user interaction)

### Voice Off Mode
- Skip audio playback entirely
- Show text for 3 seconds (simulating listen time)
- Then show "Your turn" with 5-second countdown
- Useful for practicing in public/quiet environments

## Visual Design

### Landing Page (Cream background)
- Standard `InfoPageLayout` structure with back navigation
- Large stacked headline: "PRACTICE YOUR RIGHTS"
- Subtitle explaining the purpose
- Single prominent CTA button: "START PRACTICE →"

### Practice Screens (Inverted - Black background, cream text)
- Fullscreen takeover - no header, no footer
- Large centered phrase text (easy to read under stress)
- Calm, minimal - not gamified
- Subtle countdown (small numbers or progress indicator)
- Minimal controls fixed at bottom

### Color Tokens
- Practice background: `#1A1A1A` (foreground color)
- Practice text: `#FAF9F6` (background color)

## Accessibility Considerations
- All phrase text visible for hearing-impaired users
- Voice Off mode for those who can't use audio
- Clear visual countdown indicators
- Pause functionality for users who need more time

## Edge Cases
- User navigates away mid-practice: Audio stops, state resets on return
- Audio fails to load: Show error message with retry option
- User presses back during practice: Return to landing page
- Browser doesn't support audio: Fallback to Voice Off mode

## Testing Checklist
- [ ] Audio plays correctly on iOS Safari
- [ ] Audio plays correctly on Android Chrome
- [ ] Mobile autoplay restrictions handled (requires user tap)
- [ ] Countdown timing accurate
- [ ] Voice Off mode works without audio
- [ ] Controls (pause/play, replay, skip) function correctly
- [ ] Back navigation works from all states
- [ ] Link from PrepareCard works
