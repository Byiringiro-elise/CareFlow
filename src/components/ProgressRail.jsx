import { journeySteps } from '../data';

export function ProgressRail({ activeStep, onStepChange }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
      {journeySteps.map((step, index) => {
        const isActive = index === activeStep;
        const isComplete = index < activeStep;

        return (
          <button
            key={step.id}
            onClick={() => onStepChange(index)}
            className={`rounded-2xl border px-3 py-3 text-left transition-all duration-200 ${
              isActive
                ? 'border-calm-300 bg-calm-300 text-ink-950 shadow-lg shadow-calm-500/10'
                : isComplete
                ? 'border-calm-500/30 bg-calm-50 text-ink-900'
                : 'border-white/10 bg-white/6 text-slate-300 hover:bg-white/10'
            }`}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">{index + 1}</div>
            <div className="mt-1 text-sm font-semibold leading-tight">{step.title}</div>
            <div className="mt-1 text-[11px] leading-4 opacity-80">{step.subtitle}</div>
          </button>
        );
      })}
    </div>
  );
}
