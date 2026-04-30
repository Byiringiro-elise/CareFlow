import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Panel, SectionLabel, StatCard } from '../components/UI';
import { useJourney } from '../context/JourneyContext';

export function LiveWaiting() {
  const navigate = useNavigate();
  const { offlineMode, queueMinutes, setQueueMinutes } = useJourney();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setQueueMinutes((current) => (current > 5 ? current - 1 : current));
    }, 3500);

    return () => window.clearInterval(timer);
  }, [setQueueMinutes]);

  const handleContinue = () => {
    navigate('/post-visit-summary');
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
              <span className="text-xs font-semibold text-slate-400">Step 6/8</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 mb-6 sm:mt-6">
          <Panel className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <SectionLabel
                  eyebrow="In the clinic"
                  title="Live waiting experience"
                  description="Waiting should feel informed, not abandoned. The interface shows a gentle queue update, a calming focus hint, and one clear time estimate."
                />
              </div>

              {/* Queue status */}
              <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[32px] border border-white/10 bg-white/6 p-5">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.22em] text-calm-200">Queue status</div>
                      <div className="mt-2 text-4xl font-bold text-white">{queueMinutes} min</div>
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-calm-300/30 bg-[radial-gradient(circle,rgba(82,215,166,0.35),rgba(8,17,31,0.1))]">
                      <div className="h-10 w-10 rounded-full bg-calm-300/90 animate-breathe" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Your doctor is finishing the previous appointment. The system updates the waiting estimate as the room changes.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <StatCard label="Last update" value="1 min ago" helper="Status refreshed automatically" />
                    <StatCard label="Next action" value="Stay seated" helper="The nurse will call your name" />
                  </div>
                </div>

                <div className="space-y-3 rounded-[32px] border border-white/10 bg-ink-950/35 p-5">
                  <div className="text-sm font-semibold text-white">Calming guidance</div>
                  <div className="rounded-[28px] border border-calm-300/20 bg-calm-50/10 p-4">
                    <div className="text-sm font-semibold text-calm-100">Try a slow breathing cycle</div>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Inhale for 4, hold for 4, exhale for 6. The app keeps the tone soft and simple.
                    </p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-white/6 p-4 text-sm leading-6 text-slate-200">
                    Live signals use light interactions only. No map tiles, no heavy media, and no cluttered status panels.
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-300 hidden sm:block">
                  Keep calm and wait for the doctor to call you.
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button variant="ghost" onClick={() => navigate('/arrival-checkin')} className="w-full sm:w-auto">
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
