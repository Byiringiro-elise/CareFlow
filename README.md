# CareFlow Patient Journey – Complete Application

A responsive, mobile-first healthcare appointment application built with React, Tailwind CSS, and React Router. Guides patients through an 8-step journey from symptom intake to medication reminders with offline support and low-cognitive-load design.

## What's Included

### Customer-Facing Pages (8 stages)

1. **Home / Welcome** (`/`) – Introduction and onboarding
2. **Symptom Input** (`/symptoms`) – Guided symptom selection and notes
3. **Doctor Discovery** (`/doctor-discovery`) – Smart doctor ranking based on symptoms
4. **Appointment Booking** (`/appointment-booking`) – Time slot selection with tone indicators
5. **Confirmation & Reminders** (`/confirmation`) – Appointment review and reminder setup
6. **Hospital Arrival / Check-in** (`/arrival-checkin`) – Location details and check-in flow
7. **Live Waiting** (`/live-waiting`) – Real-time queue updates and calming guidance
8. **Post-Visit Summary** (`/post-visit-summary`) – Care plan and medication overview
9. **Follow-up Reminders** (`/followup-reminders`) – Medication tracking and care plan checkboxes

### Architecture

- **State Management**: React Context persists patient data across pages
- **Routing**: React Router v6 with clean page-based structure
- **Responsive Design**: Mobile-first Tailwind CSS with breakpoints for tablet and desktop
- **Offline Support**: All data saved locally; graceful fallback messaging for low-data scenarios
- **Design System**: Reusable UI components (buttons, cards, chips, badges, etc.)

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx                 # Welcome screen (entry point)
│   ├── SymptomInput.jsx         # Step 1: Guided symptom intake
│   ├── DoctorDiscovery.jsx      # Step 2: Smart doctor suggestions
│   ├── AppointmentBooking.jsx   # Step 3: Time slot selection
│   ├── ConfirmationReminders.jsx# Step 4: Confirm & set reminders
│   ├── ArrivalCheckin.jsx       # Step 5: Hospital arrival flow
│   ├── LiveWaiting.jsx          # Step 6: Queue updates & guidance
│   ├── PostVisitSummary.jsx     # Step 7: Care summary
│   └── FollowupReminders.jsx    # Step 8: Medication tracking
├── components/
│   ├── UI.jsx                   # Reusable components
│   ├── Layout.jsx               # Desktop header wrapper
│   └── ProgressRail.jsx         # Legacy progress indicator
├── context/
│   └── JourneyContext.jsx       # Global patient journey state
├── data.js                      # Mock data (symptoms, doctors, slots, etc.)
├── App.jsx                      # Router setup and page routing
├── main.jsx                     # React entry point
└── index.css                    # Tailwind imports and global styles
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v11+)

### Installation

```bash
cd d:\react_exam
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173` (or the next available port).

### Production Build

```bash
npm run build
npm run preview
```

## Design Features

### Mobile-First Responsive
- **Mobile**: Full-width panels, stacked layouts, 44px+ tap targets
- **Tablet** (640px+): 2-column grids, optimized spacing
- **Desktop** (1024px+): Multi-column layouts, side panels

### Accessibility
- Large, readable tap targets (minimum 44px)
- Strong color contrast on all text
- Clear visual hierarchy
- Minimal cognitive load with one action per screen

### Offline-Friendly
- Core functionality works with no internet
- Status indicator shows online/offline mode
- Data persists locally until sync
- Graceful fallback messaging

### Low-Stress UI
- Calm color palette (teal, slate, soft neutrals)
- Breathing animations and subtle motion
- Rounded corners and soft borders
- Clear progress and status indicators

## State Management

The `JourneyContext` holds the entire patient journey state:
- Selected symptoms and notes
- Doctor selection and ranking
- Appointment details and reminders
- Medication checklist status
- Queue/waiting information
- Offline mode flag

State persists across page navigation, allowing users to jump between pages and keep their selections.

## Routing Map

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | Home | Welcome and journey introduction |
| `/symptoms` | SymptomInput | Symptom selection step |
| `/doctor-discovery` | DoctorDiscovery | Doctor ranking and selection |
| `/appointment-booking` | AppointmentBooking | Time slot selection |
| `/confirmation` | ConfirmationReminders | Appointment review and reminders |
| `/arrival-checkin` | ArrivalCheckin | Hospital arrival preparation |
| `/live-waiting` | LiveWaiting | Queue status and calming guidance |
| `/post-visit-summary` | PostVisitSummary | Care summary and plan |
| `/followup-reminders` | FollowupReminders | Medication tracking and follow-up |

## Customization

### Updating Symptoms, Doctors, or Reminders

Edit `src/data.js` to customize:
- `symptomOptions` – Available symptoms
- `doctors` – Doctor profiles and specialties
- `bookingSlots` – Available appointment times
- `reminderOptions` – Reminder types
- `medicationPlan` – Post-visit medications
- `visitSummary` – Care plan text

### Styling

- Tailwind config: `tailwind.config.cjs`
- Color palette: `calm`, `mist`, `sand`, `ink` (custom colors)
- Fonts: Fraunces (display), Manrope (body)
- Animations: float, breathe, shimmer

## Constraints Met

✅ **Low internet connectivity** – Works offline with graceful fallbacks  
✅ **First-time smartphone users** – Large tap targets, simple navigation, clear labels  
✅ **Users in discomfort/stress** – Calm UI, low cognitive load, minimal text  
✅ **Offline functionality** – Core flow saved locally, sync on reconnect  

## Responsive Design

Every page is fully responsive:
- **Mobile (320px+)**: Single column, fixed header with status
- **Tablet (640px+)**: 2-column layouts, optimized grids
- **Desktop (1024px+)**: Multi-column layouts with side panels

## Figma Handoff

See [docs/figma-prototype-spec.md](docs/figma-prototype-spec.md) for the frame map, component system, and interaction notes.

## Future Enhancements

- Integration with real appointment APIs
- SMS/push notification reminders
- Real-time doctor availability sync
- Patient history and past appointments
- PDF care plan export
- Multi-language support
- WCAG 2.1 AA compliance audit

## License

MIT