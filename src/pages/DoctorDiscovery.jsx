import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Panel, SectionLabel, StatCard } from '../components/UI';
import { doctors } from '../data';
import { useJourney } from '../context/JourneyContext';

function scoreDoctor(doctor, symptoms) {
  return symptoms.reduce((score, symptom) => score + (doctor.match.includes(symptom) ? 2 : 0), 0) + (doctor.id === 'dr-lin' ? 1 : 0);
}

export function DoctorDiscovery() {
  const navigate = useNavigate();
  const { selectedSymptoms, selectedDoctorId, setSelectedDoctorId, offlineMode } = useJourney();

  const sortedDoctors = useMemo(() => {
    return [...doctors].sort((a, b) => scoreDoctor(b, selectedSymptoms) - scoreDoctor(a, selectedSymptoms));
  }, [selectedSymptoms]);

  const handleContinue = () => {
    navigate('/appointment-booking');
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
              <span className="text-xs font-semibold text-slate-400">Step 2/8</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-16 mb-6 sm:mt-6">
          <Panel className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <SectionLabel
                  eyebrow="Finding care"
                  title="Suggested doctors"
                  description="The system sorts the list based on what you entered first, then explains why each match is useful."
                />
              </div>

              {/* Doctor list */}
              <div className="space-y-3">
                {sortedDoctors.map((doctor) => {
                  const isSelected = selectedDoctorId === doctor.id;
                  const score = scoreDoctor(doctor, selectedSymptoms);

                  return (
                    <button
                      key={doctor.id}
                      onClick={() => setSelectedDoctorId(doctor.id)}
                      className={`w-full rounded-[28px] border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? 'border-calm-300 bg-calm-300 text-ink-950 shadow-lg shadow-calm-500/10'
                          : 'border-white/10 bg-white/6 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="text-lg font-bold">{doctor.name}</div>
                          <div className={`mt-1 text-sm ${isSelected ? 'text-ink-900/80' : 'text-slate-300'}`}>
                            {doctor.specialty}
                          </div>
                        </div>
                        <Badge tone={isSelected ? 'dark' : 'success'}>Match {score}</Badge>
                      </div>
                      <p className={`mt-3 text-sm leading-6 ${isSelected ? 'text-ink-900/80' : 'text-slate-300'}`}>
                        {doctor.reason}
                      </p>
                      <div className={`mt-3 text-xs font-semibold uppercase tracking-[0.2em] ${isSelected ? 'text-ink-900/70' : 'text-calm-200'}`}>
                        {doctor.availability}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid gap-3 sm:grid-cols-2">
                <StatCard
                  label="Best match"
                  value={sortedDoctors[0]?.name || 'Triage'}
                  helper={sortedDoctors[0]?.specialty || 'General medicine'}
                />
                <StatCard
                  label="Your symptoms"
                  value={`${selectedSymptoms.length}`}
                  helper="Matched against doctor expertise"
                />
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-300 hidden sm:block">
                  Choose a doctor from the ranked list.
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button variant="ghost" onClick={() => navigate('/')} className="w-full sm:w-auto">
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
