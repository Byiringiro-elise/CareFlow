export function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-calm-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900';
  const variants = {
    primary: 'bg-calm-400 text-ink-950 shadow-lg shadow-calm-500/20 hover:bg-calm-300 active:scale-[0.99]',
    secondary: 'bg-white/10 text-white hover:bg-white/15 active:scale-[0.99]',
    ghost: 'text-slate-200 hover:bg-white/8',
    subtle: 'bg-mist-100 text-ink-900 hover:bg-mist-200',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Panel({ children, className = '' }) {
  return <section className={`rounded-[28px] border border-white/10 bg-white/8 shadow-glow backdrop-blur-xl ${className}`}>{children}</section>;
}

export function Badge({ children, tone = 'default', className = '' }) {
  const tones = {
    default: 'bg-white/10 text-slate-100',
    success: 'bg-calm-100 text-calm-600',
    calm: 'bg-mist-100 text-ink-800',
    warning: 'bg-sand-100 text-amber-900',
    dark: 'bg-ink-800 text-slate-100',
  };

  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}>{children}</span>;
}

export function StatCard({ label, value, helper }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/8 p-4">
      <div className="text-[11px] uppercase tracking-[0.22em] text-slate-300">{label}</div>
      <div className="mt-2 text-xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs text-slate-300">{helper}</div>
    </div>
  );
}

export function Chip({ children, selected = false, disabled = false, className = '', ...props }) {
  const state = selected
    ? 'border-calm-300/80 bg-calm-300 text-ink-950 shadow-lg shadow-calm-500/10'
    : 'border-white/10 bg-white/6 text-slate-100 hover:bg-white/10';
  return (
    <button
      className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${state} ${disabled ? 'cursor-not-allowed opacity-40' : 'active:scale-[0.98]'} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export function SectionLabel({ eyebrow, title, description }) {
  return (
    <div>
      <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-calm-200">{eyebrow}</div>
      <h2 className="mt-2 font-display text-2xl font-semibold text-white">{title}</h2>
      {description ? <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">{description}</p> : null}
    </div>
  );
}
