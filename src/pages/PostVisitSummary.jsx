import { useNavigate } from 'react-router-dom';
import { Badge, Button, Panel, SectionLabel, StatCard } from '../components/UI';
import { visitSummary } from '../data';
import { useJourney } from '../context/JourneyContext';

export function PostVisitSummary() {
  const navigate = useNavigate();
  const { offlineMode } = useJourney();

  const handleContinue = () => {
    navigate('/followup-reminders');
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
              <span className="text-xs font-semibold text-slate-400">Step 7/8</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 mb-6 sm:mt-6">
          <Panel className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <SectionLabel
                  eyebrow="After your visit"
                  title="Post-visit summary"
                  description="Turn the visit into a clear plan, not a wall of clinical text. The result should be readable in one glance and saveable offline."
                />
              </div>

              {/* Summary card */}
              <div className="space-y-4 rounded-[32px] border border-white/10 bg-white/6 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-calm-200">Care summary</div>
                    <div className="mt-2 text-2xl font-semibold text-white">Likely viral respiratory infection</div>
                  </div>
                  <Badge tone="success">Saved locally</Badge>
                </div>

                <div className="grid gap-3">
                  {visitSummary.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-3xl border border-white/10 bg-ink-950/30 px-4 py-4 text-sm leading-6 text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3 pt-3">
                  <StatCard label="Medication" value="2 items" helper="Clear and short list" />
                  <StatCard label="Follow-up" value="48 hours" helper="Recheck if symptoms change" />
                  <StatCard label="Escalation" value="If worse" helper="Return sooner if needed" />
                </div>
              </div>

              {/* Care plan tips */}
              <div className="rounded-[28px] border border-calm-300/20 bg-calm-50/10 p-5">
                <div className="text-sm font-semibold text-calm-100 mb-3">Your care plan</div>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex gap-3">
                    <span className="text-calm-200 font-semibold">•</span>
                    <span>Rest and stay hydrated throughout the recovery period</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-calm-200 font-semibold">•</span>
                    <span>Take the prescribed medications as directed</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-calm-200 font-semibold">•</span>
                    <span>Contact us if symptoms worsen before the follow-up date</span>
                  </li>
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-300 hidden sm:block">
                  Review your care plan and the next steps.
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button variant="ghost" onClick={() => navigate('/live-waiting')} className="w-full sm:w-auto">
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
