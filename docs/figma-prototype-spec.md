# Figma Prototype Spec

This spec mirrors the React implementation so the Figma prototype can be built as a responsive, interactive mobile journey.

## Product Direction

- Mobile-first patient care flow for sick or stressed users.
- Calm, low-cognitive-load interface with large tap targets and short labels.
- Low-data behavior with lightweight visuals and graceful fallback messaging.
- Journey feels alive through progression, status changes, and subtle motion.

## Core Frames

1. `Symptom Input`
2. `Doctor Discovery`
3. `Appointment Booking`
4. `Confirmation & Reminders`
5. `Hospital Arrival / Check-in`
6. `Live Waiting Experience`
7. `Post-Visit Summary`
8. `Follow-up / Medication Reminder`

## Design System

### Typography

- Headings: serif display style for a reassuring clinical tone.
- Body: rounded sans-serif style for readability.
- Use strong hierarchy and short line lengths.

### Color

- Primary calm teal for actions and success.
- Slate/ink neutrals for structure.
- Soft mist and sand accents for warmth.
- Avoid harsh red unless indicating urgent escalation.

### Components and Variants

- Primary button: default, pressed, disabled, loading.
- Secondary button: default, pressed, disabled.
- Symptom chip: default, selected, muted.
- Doctor card: default, selected, best-match.
- Time slot chip: available, selected, unavailable.
- Reminder toggle: on, off.
- Status badge: online, low-data, offline-saved.
- Progress rail: current, complete, upcoming.

## Auto Layout Rules

- Use vertical Auto Layout for every screen container.
- Use horizontal Auto Layout for chip rows, stat rows, and action bars.
- Keep 16 px outer padding and 12 px internal gaps as the baseline rhythm.
- Cards should expand to fill width and stack cleanly on small screens.
- Buttons should remain full-width on mobile.

## Prototype Flow

1. Start on `Symptom Input`.
2. Tap symptom chips or use the quick description field.
3. Continue to `Doctor Discovery` with smart suggestions.
4. Pick a doctor and proceed to `Appointment Booking`.
5. Select a date and time slot.
6. Confirm and enable reminders.
7. Move through arrival, check-in, waiting, summary, and follow-up.

## Micro-interactions

- Chip selection should use a subtle color fill and scale change.
- The queue/wait card should pulse or softly update to suggest live status.
- Confirmation card should animate in from below.
- Medication reminders should feel like a simple checklist, not a task manager.

## Accessibility Notes

- Minimum tap target: 44 px.
- Keep contrast strong on all badge text.
- Keep copy short and direct.
- Avoid information overload by revealing only the current stage first.
