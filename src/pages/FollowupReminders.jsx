import { useNavigate } from 'react-router-dom';
import { Badge, Button, Panel, SectionLabel, StatCard } from '../components/UI';
import { medicationPlan } from '../data';
import { useJourney } from '../context/JourneyContext';

export function FollowupReminders() {
  const navigate = useNavigate();
  const { offlineMode, checkedMedication, setCheckedMedication } = useJourney();

  const toggleMedication = (id) => {
    setCheckedMedication((current) => ({ ...current, [id]: !current[id] }));
  };

  const handleRestart = () => {
    navigate('/');
  };

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
              <span className="text-xs font-semibold text-slate-400">Step 8/8</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 mb-6 sm:mt-6">
          <Panel className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <SectionLabel
                  eyebrow="Staying healthy"
                  title="Follow-up and medication reminders"
                  description="The final screen keeps the care plan alive. It is designed to be easy to revisit, mark complete, and sync later."
                />
              </div>

              {/* Medication checklist */}
              <div>
                <label className="block text-sm font-semibold text-slate-100 mb-3">Your medication plan</label>
                <div className="space-y-3">
                  {medicationPlan.map((medication) => {
                    const isChecked = Boolean(checkedMedication[medication.id]);

                    return (
                      <button
                        key={medication.id}
                        onClick={() => toggleMedication(medication.id)}
                        className={`w-full rounded-[28px] border p-4 text-left transition-all duration-200 ${
                          isChecked
                            ? 'border-calm-300 bg-calm-50 text-ink-900'
                            : 'border-white/10 bg-white/6 text-slate-100 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-lg font-semibold">{medication.name}</div>
                            <div className="mt-1 text-sm opacity-80">{medication.time}</div>
                          </div>
                          <Badge tone={isChecked ? 'success' : 'default'}>
                            {isChecked ? 'Planned' : 'Tap to plan'}
                          </Badge>
                        </div>
                        <p className="mt-3 text-sm leading-6 opacity-80">{medication.note}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Offline notice */}
              <div className="rounded-[32px] border border-white/10 bg-ink-950/35 p-5 text-sm leading-6 text-slate-200">
                The system keeps reminders available even if the user leaves the clinic with weak connectivity. Once the signal
                returns, the plan syncs automatically.
              </div>

              {/* Stats */}
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard
                  label="Medicine items"
                  value={`${medicationPlan.length}`}
                  helper="Track your recovery plan"
                />
                <StatCard
                  label="Follow-up date"
                  value="In 48 hours"
                  helper="Recheck if symptoms persist"
                />
              </div>

              {/* Success message */}
              <div className="rounded-[28px] border border-calm-300/30 bg-[linear-gradient(180deg,rgba(82,215,166,0.16),rgba(8,17,31,0.25))] p-5 shadow-lg shadow-calm-500/10">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-calm-300">
                    <span className="text-lg font-bold text-ink-950">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">You've completed your appointment</div>
                    <p className="mt-1 text-sm leading-6 text-slate-200">
                      Your care plan is saved and ready to help you recover. Check in tomorrow morning to track your
                      progress.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-300 hidden sm:block">
                  You're all set. Stay healthy and follow the care plan.
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button variant="ghost" onClick={() => navigate('/post-visit-summary')} className="w-full sm:w-auto">
                    Back
                  </Button>
                  <Button variant="primary" onClick={handleRestart} className="w-full sm:w-auto">
                    Start a new journey
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
