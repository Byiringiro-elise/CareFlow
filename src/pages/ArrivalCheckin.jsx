import { useNavigate } from 'react-router-dom';
import { Badge, Button, Panel, SectionLabel, StatCard } from '../components/UI';
import { useJourney } from '../context/JourneyContext';

export function ArrivalCheckin() {
  const navigate = useNavigate();
  const { offlineMode, setHasArrived } = useJourney();

  const handleCheckIn = () => {
    setHasArrived(true);
    navigate('/live-waiting');
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
              <span className="text-xs font-semibold text-slate-400">Step 5/8</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 mb-6 sm:mt-6">
          <Panel className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <SectionLabel
                  eyebrow="Hospital arrival"
                  title="Hospital arrival and check-in"
                  description="Make the physical arrival feel as simple as the booking. The patient sees one clear entry point and a soft status update."
                />
              </div>

              {/* Arrival card */}
              <div className="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
                <div className="rounded-[32px] border border-white/10 bg-white/6 p-5">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.22em] text-calm-200">Arrival card</div>
                      <div className="mt-2 text-2xl font-semibold text-white">North Wing, Level 2</div>
                    </div>
                    <Badge tone="calm">5 minutes away</Badge>
                  </div>
                  <div className="mt-4 rounded-[28px] border border-dashed border-white/15 bg-[radial-gradient(circle_at_top_left,rgba(82,215,166,0.2),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5">
                    <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                      <div className="rounded-2xl bg-ink-950/30 p-3">Reception desk</div>
                      <div className="rounded-2xl bg-ink-950/30 p-3">Wheelchair access</div>
                      <div className="rounded-2xl bg-ink-950/30 p-3">Quiet waiting zone</div>
                      <div className="rounded-2xl bg-ink-950/30 p-3">Bring ID only</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-[32px] border border-white/10 bg-ink-950/35 p-5">
                  <div className="text-sm font-semibold text-white">Simple check-in</div>
                  <p className="text-sm leading-6 text-slate-300">The first-time user only sees two actions: confirm arrival and show the booking.</p>
                  <div className="flex flex-col gap-3 pt-3">
                    <Button variant="primary" onClick={handleCheckIn} className="w-full">
                      Check in now
                    </Button>
                    <Button variant="ghost" onClick={() => navigate('/confirmation')} className="w-full">
                      Show booking details
                    </Button>
                  </div>
                  <div className="rounded-3xl border border-calm-300/20 bg-calm-50/10 p-4 text-sm leading-6 text-slate-200 mt-4">
                    The device will keep the arrival state even if the network is weak. Updates sync automatically when service returns.
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard label="Location" value="North Wing L2" helper="Check-in at the reception" />
                <StatCard label="Status" value="Ready" helper="Arrive 15 minutes early" />
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-300 hidden sm:block">
                  Check in when you arrive at the hospital.
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button variant="ghost" onClick={() => navigate('/confirmation')} className="w-full sm:w-auto">
                    Back
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
