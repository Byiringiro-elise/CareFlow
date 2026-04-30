export const journeySteps = [
  {
    id: 'symptoms',
    title: 'Symptom input',
    subtitle: 'Guided and simple',
  },
  {
    id: 'doctor',
    title: 'Doctor discovery',
    subtitle: 'Smart suggestions',
  },
  {
    id: 'booking',
    title: 'Appointment booking',
    subtitle: 'Choose a calm time',
  },
  {
    id: 'confirm',
    title: 'Confirmation & reminders',
    subtitle: 'Clear next steps',
  },
  {
    id: 'arrival',
    title: 'Arrival / check-in',
    subtitle: 'Simple entry flow',
  },
  {
    id: 'waiting',
    title: 'Live waiting',
    subtitle: 'Live status and guidance',
  },
  {
    id: 'summary',
    title: 'Post-visit summary',
    subtitle: 'Clear care plan',
  },
  {
    id: 'followup',
    title: 'Follow-up reminder',
    subtitle: 'Medication support',
  },
];

export const symptomOptions = [
  'Fever',
  'Cough',
  'Fatigue',
  'Headache',
  'Stomach pain',
  'Rash',
  'Sore throat',
  'Dizziness',
];

export const doctors = [
  {
    id: 'dr-lin',
    name: 'Dr. Maya Lin',
    specialty: 'General medicine',
    availability: 'Today 3:20 PM',
    reason: 'Broad triage for fever, cough, and fatigue.',
    match: ['Fever', 'Cough', 'Fatigue', 'Sore throat'],
  },
  {
    id: 'dr-omar',
    name: 'Dr. Omar Hale',
    specialty: 'Internal medicine',
    availability: 'Today 4:10 PM',
    reason: 'Helpful for pain, dizziness, and longer-running symptoms.',
    match: ['Stomach pain', 'Dizziness', 'Headache'],
  },
  {
    id: 'dr-priya',
    name: 'Dr. Priya Nair',
    specialty: 'Dermatology',
    availability: 'Tomorrow 9:00 AM',
    reason: 'Best for rash, skin irritation, or itching.',
    match: ['Rash'],
  },
];

export const bookingSlots = [
  { day: 'Today', time: '3:20 PM', tone: 'Soonest' },
  { day: 'Today', time: '5:10 PM', tone: 'Lower crowd' },
  { day: 'Tomorrow', time: '9:00 AM', tone: 'Fresh start' },
  { day: 'Tomorrow', time: '11:40 AM', tone: 'Balanced' },
];

export const reminderOptions = [
  {
    id: 'push',
    title: 'App reminder',
    detail: '10 minutes before appointment and medication times.',
  },
  {
    id: 'sms',
    title: 'SMS fallback',
    detail: 'Low-data backup for important updates.',
  },
  {
    id: 'offline',
    title: 'Saved locally',
    detail: 'Works even when the connection drops.',
  },
];

export const medicationPlan = [
  {
    id: 'med-1',
    name: 'Paracetamol',
    time: 'After breakfast',
    note: 'Use for fever and pain relief as directed.',
  },
  {
    id: 'med-2',
    name: 'Saline rinse',
    time: 'Evening',
    note: 'Helps with congestion and throat comfort.',
  },
  {
    id: 'med-3',
    name: 'Review symptoms',
    time: 'Tomorrow morning',
    note: 'If things worsen, contact the clinic.',
  },
];

export const visitSummary = [
  'The doctor thinks the symptoms fit a short viral illness.',
  'Rest, hydration, and the medication plan should help over the next 48 hours.',
  'Book a follow-up if the fever stays high or breathing changes.',
];
