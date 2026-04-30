import { useNavigate } from 'react-router-dom';
import { Badge } from './UI';
import { journeySteps } from '../data';
import { useJourney } from '../context/JourneyContext';

export function Layout({ children, currentStep }) {
  const navigate = useNavigate();
  const { offlineMode, setOfflineMode } = useJourney();

  const step = journeySteps[currentStep];

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(82,215,166,0.18),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(191,211,255,0.14),_transparent_22%),linear-gradient(180deg,_#07101d_0%,_#0f172a_36%,_#050b15_100%)] text-white">
      {/* Desktop Header */}
      <div className="relative border-b border-white/10 bg-white/6 px-4 py-6 backdrop-blur-xl sm:block hidden">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="success">Living care flow</Badge>
                <Badge tone="dark">Offline-friendly</Badge>
                <Badge tone="calm">Low cognitive load</Badge>
              </div>
              <h1 className="mt-3 font-display text-2xl font-semibold text-white">CareFlow Patient Journey</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-semibold text-white">Step {currentStep + 1}/8</div>
                <div className="text-xs text-slate-400">{step?.title || 'Loading'}</div>
              </div>
              <button
                onClick={() => setOfflineMode(!offlineMode)}
                className="rounded-full px-3 py-2 text-xs font-semibold transition-colors"
                title={offlineMode ? 'Switch to online mode' : 'Switch to offline mode'}
              >
                <div className={`h-2 w-2 rounded-full ${offlineMode ? 'bg-calm-300' : 'bg-sky-300'} animate-breathe`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {children}
    </div>
  );
}
