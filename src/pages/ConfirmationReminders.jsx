import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Panel, SectionLabel, StatCard } from '../components/UI';
import { bookingSlots, doctors, reminderOptions } from '../data';
import { useJourney } from '../context/JourneyContext';

export function ConfirmationReminders() {
  const navigate = useNavigate();
  const { selectedDoctorId, selectedSlotIndex, reminders, setReminders, offlineMode } = useJourney();

  const selectedDoctor = useMemo(
    () => doctors.find((doctor) => doctor.id === selectedDoctorId),
    [selectedDoctorId],
  );

  const selectedSlot = bookingSlots[selectedSlotIndex];

  const toggleReminder = (key) => {
    setReminders((current) => ({ ...current, [key]: !current[key] }));
  };

  const handleContinue = () => {
    navigate('/arrival-checkin');
  };

  function formatSlot(slot) {
    if (!slot) return 'Choose a slot';
    return `${slot.day} at ${slot.time}`;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(82,215,166,0.18),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(191,211,255,0.14),_transparent_22%),linear-gradient(180deg,_#07101d_0%,_#0f172a_36%,_#050b15_100%)] text-white">
      <div className="mx-auto w-full max-w-4xl flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-gradient-to-b from-ink-900/95 to-ink-900/80 backdrop-blur-sm sm:static sm:border-0 sm:bg-transparent sm:p-0">
          <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6 sm:py-0 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${offlineMode ? 'bg-calm-300' : 'bg-sky-300'} animate-breathe`} />
                <span className="text-xs font-semibold text-slate-300">{offlineMode ? 'Offline ready' : 'Live sync'}</span>
              </div>
              <span className="text-xs font-semibold text-slate-400">Step 4/8</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 mb-6 sm:mt-6">
          <Panel className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <SectionLabel
                  eyebrow="Confirmation"
                  title="Confirmation and reminders"
                  description="Give the patient one clear confirmation card, then reveal reminders as optional support rather than a long settings form."
                />
              </div>

              {/* Confirmation Card */}
              <div className="rounded-[32px] border border-calm-300/30 bg-[linear-gradient(180deg,rgba(82,215,166,0.16),rgba(8,17,31,0.25))] p-5 shadow-lg shadow-calm-500/10">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.24em] text-calm-200">Appointment confirmed</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{selectedDoctor?.name}</div>
                  </div>
                  <Badge tone="success">Saved</Badge>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <StatCard label="When" value={formatSlot(selectedSlot)} helper="Arrive 15 minutes early" />
                  <StatCard label="Where" value="North Wing" helper="Level 2, check-in desk" />
                </div>
              </div>

              {/* Reminder Options */}
              <div>
                <label className="block text-sm font-semibold text-slate-100 mb-3">Set up reminders</label>
                <div className="grid gap-3 md:grid-cols-3">
                  {reminderOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => toggleReminder(option.id)}
                      className={`rounded-[28px] border p-4 text-left transition-all duration-200 ${
                        reminders[option.id]
                          ? 'border-calm-300 bg-calm-50 text-ink-900'
                          : 'border-white/10 bg-white/6 text-slate-200 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold">{option.title}</div>
                        <div className={`h-8 w-14 rounded-full border p-1 transition-all ${reminders[option.id] ? 'border-calm-300 bg-calm-300' : 'border-white/15 bg-white/6'}`}>
                          <div className={`h-6 w-6 rounded-full bg-white transition-transform ${reminders[option.id] ? 'translate-x-5' : 'translate-x-0'}`} />
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-6 opacity-80">{option.detail}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard
                  label="Reminders enabled"
                  value={`${Object.values(reminders).filter(Boolean).length}/3`}
                  helper="You can change this anytime"
                />
                <StatCard label="Status" value="Ready" helper="Your appointment is booked" />
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-300 hidden sm:block">
                  Turn on the reminders that matter most to you.
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button variant="ghost" onClick={() => navigate('/appointment-booking')} className="w-full sm:w-auto">
                    Back
                  </Button>
                  <Button variant="primary" onClick={handleContinue} className="w-full sm:w-auto">
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
