import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Panel, SectionLabel, StatCard } from '../components/UI';
import { bookingSlots, doctors } from '../data';
import { useJourney } from '../context/JourneyContext';

export function AppointmentBooking() {
  const navigate = useNavigate();
  const { selectedDoctorId, selectedSlotIndex, setSelectedSlotIndex, offlineMode } = useJourney();

  const selectedDoctor = useMemo(
    () => doctors.find((doctor) => doctor.id === selectedDoctorId),
    [selectedDoctorId],
  );

  const selectedSlot = bookingSlots[selectedSlotIndex];

  const handleContinue = () => {
    navigate('/confirmation');
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
              <span className="text-xs font-semibold text-slate-400">Step 3/8</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 mb-6 sm:mt-6">
          <Panel className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <SectionLabel
                  eyebrow="Scheduling"
                  title="Book the appointment"
                  description="Pick the time that feels least stressful. The interface keeps the choices large and the details readable at a glance."
                />
              </div>

              {/* Time slots */}
              <div>
                <label className="block text-sm font-semibold text-slate-100 mb-3">Available times</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {bookingSlots.map((slot, index) => {
                    const isSelected = selectedSlotIndex === index;

                    return (
                      <button
                        key={`${slot.day}-${slot.time}`}
                        onClick={() => setSelectedSlotIndex(index)}
                        className={`rounded-[28px] border p-4 text-left transition-all duration-200 ${
                          isSelected
                            ? 'border-calm-300 bg-calm-300 text-ink-950 shadow-lg shadow-calm-500/10'
                            : 'border-white/10 bg-white/6 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold">{slot.day}</div>
                            <div className="mt-1 font-display text-2xl font-semibold">{slot.time}</div>
                          </div>
                          <Badge tone={isSelected ? 'dark' : 'calm'}>{slot.tone}</Badge>
                        </div>
                        <p className={`mt-3 text-sm ${isSelected ? 'text-ink-900/80' : 'text-slate-300'}`}>
                          {selectedDoctor?.name || 'Selected doctor'} is available at this time.
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Booking summary */}
              <div className="rounded-[28px] border border-white/10 bg-ink-950/35 p-4 sm:p-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-calm-200">Chosen booking</div>
                <div className="mt-3 space-y-2">
                  <div>
                    <div className="text-xs text-slate-400">Doctor</div>
                    <div className="mt-1 text-lg font-semibold text-white">{selectedDoctor?.name}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Date and time</div>
                    <div className="mt-1 text-lg font-semibold text-white">{formatSlot(selectedSlot)}</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-300 hidden sm:block">
                  Choose a time that works best for you.
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button variant="ghost" onClick={() => navigate('/doctor-discovery')} className="w-full sm:w-auto">
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
