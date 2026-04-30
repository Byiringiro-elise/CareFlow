import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Chip, Panel, SectionLabel, StatCard } from '../components/UI';
import { symptomOptions } from '../data';
import { useJourney } from '../context/JourneyContext';

export function SymptomInput() {
  const navigate = useNavigate();
  const { selectedSymptoms, setSelectedSymptoms, symptomNote, setSymptomNote, offlineMode } = useJourney();
  const [localSymptoms, setLocalSymptoms] = useState(selectedSymptoms);
  const [localNote, setLocalNote] = useState(symptomNote);

  const toggleSymptom = (symptom) => {
    setLocalSymptoms((current) =>
      current.includes(symptom) ? current.filter((item) => item !== symptom) : [...current, symptom],
    );
  };

  const canContinue = localSymptoms.length > 0 || localNote.trim().length > 0;

  const handleContinue = () => {
    setSelectedSymptoms(localSymptoms);
    setSymptomNote(localNote);
    navigate('/doctor-discovery');
  };

  const urgencyCopy =
    localSymptoms.includes('Fever') && localSymptoms.includes('Cough')
      ? 'Likely needs a same-day review and hydration support.'
      : localSymptoms.includes('Rash')
        ? 'A skin specialist is a strong match for this symptom set.'
        : localSymptoms.includes('Stomach pain')
          ? 'Internal medicine is the safest starting point.'
          : 'A general physician can triage this quickly.';

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
              <span className="text-xs font-semibold text-slate-400">Step 1/8</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 mb-6 sm:mt-6">
          <Panel className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <SectionLabel
                  eyebrow="Getting started"
                  title="What is bothering you right now?"
                  description="Use simple taps instead of long forms. The app keeps the first interaction gentle and fast."
                />
              </div>

              {/* Symptom Chips */}
              <div>
                <label className="block text-sm font-semibold text-slate-100 mb-3">Select your symptoms</label>
                <div className="flex flex-wrap gap-2">
                  {symptomOptions.map((symptom) => (
                    <Chip
                      key={symptom}
                      selected={localSymptoms.includes(symptom)}
                      onClick={() => toggleSymptom(symptom)}
                    >
                      {symptom}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-slate-100">Anything else to note?</span>
                  <textarea
                    value={localNote}
                    onChange={(event) => setLocalNote(event.target.value)}
                    rows={4}
                    placeholder="Example: started last night, feels worse when walking, child has similar symptoms"
                    className="w-full rounded-3xl border border-white/10 bg-white/6 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-calm-300/80 focus:bg-white/8 resize-none"
                  />
                </label>
              </div>

              {/* Stats */}
              <div className="grid gap-3 sm:grid-cols-3">
                <StatCard label="Selected symptoms" value={`${localSymptoms.length}`} helper="Quick, low-effort input" />
                <StatCard label="Triage guidance" value="Fast" helper={urgencyCopy} />
                <StatCard label="Offline ready" value="Yes" helper="Works without heavy data usage" />
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-300 hidden sm:block">
                  Tell us about your symptoms so we can find the right doctor for you.
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    onClick={handleContinue}
                    disabled={!canContinue}
                    className={!canContinue ? 'cursor-not-allowed opacity-50' : 'w-full sm:w-auto'}
                  >
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
