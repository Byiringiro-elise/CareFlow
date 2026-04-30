import { useNavigate } from 'react-router-dom';
import { Badge, Button, Panel, StatCard } from '../components/UI';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(82,215,166,0.18),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(191,211,255,0.14),_transparent_22%),linear-gradient(180deg,_#07101d_0%,_#0f172a_36%,_#050b15_100%)] text-white flex items-center justify-center">
      <div className="mx-auto w-full max-w-2xl px-4 py-8">
        <Panel className="p-6 sm:p-8 md:p-12">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="flex justify-center gap-2">
                <Badge tone="success">Healthcare reimagined</Badge>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white leading-tight">
                CareFlow
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                A compassionate appointment experience designed for patients who need support—whether they're sick, stressed, or using smartphones for the first time.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-4">
                <div className="text-sm font-semibold text-calm-200 mb-2">Guided Journey</div>
                <p className="text-sm text-slate-300">From symptoms to recovery. Every step feels clear and supportive.</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-4">
                <div className="text-sm font-semibold text-calm-200 mb-2">Works Offline</div>
                <p className="text-sm text-slate-300">Core functionality works even with spotty connectivity.</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-4">
                <div className="text-sm font-semibold text-calm-200 mb-2">Low Cognitive Load</div>
                <p className="text-sm text-slate-300">Simple, large tap targets and calming design throughout.</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-4">
                <div className="text-sm font-semibold text-calm-200 mb-2">Live Status</div>
                <p className="text-sm text-slate-300">Know your queue position and next steps in real time.</p>
              </div>
            </div>

            {/* Journey Steps */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-100">The 8-step journey:</div>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  'Symptom intake',
                  'Doctor discovery',
                  'Appointment booking',
                  'Confirmation',
                  'Hospital arrival',
                  'Live waiting',
                  'Care summary',
                  'Follow-up care'
                ].map((step, index) => (
                  <div key={step} className="rounded-[22px] border border-white/10 bg-white/6 p-3 flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-calm-300 text-ink-950 text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm text-slate-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-3 sm:grid-cols-3">
              <StatCard label="Steps" value="8" helper="Complete patient journey" />
              <StatCard label="Load time" value="<1s" helper="Essential interactions only" />
              <StatCard label="Offline" value="Ready" helper="Works without internet" />
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <p className="text-sm text-slate-300 text-center">
                Ready to start? This journey takes about 10-15 minutes.
              </p>
              <Button variant="primary" onClick={() => navigate('/symptoms')} className="w-full">
                Begin appointment journey
              </Button>
              <Button variant="secondary" onClick={() => navigate('/confirmation')} className="w-full">
                View booked appointments
              </Button>
              <p className="text-xs text-slate-400 text-center">
                Your data stays on your device. All information is saved locally until you choose to sync.
              </p>
            </div>
          </div>
        </Panel>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-slate-400">
          <p>CareFlow Patient Journey • Built for mobile-first healthcare</p>
        </div>
      </div>
    </div>
  );
}
