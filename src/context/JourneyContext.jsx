import React, { createContext, useContext, useState } from 'react';

const JourneyContext = createContext();

export function JourneyProvider({ children }) {
  const [offlineMode, setOfflineMode] = useState(true);
  const [selectedSymptoms, setSelectedSymptoms] = useState(['Fever', 'Cough']);
  const [symptomNote, setSymptomNote] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState('dr-lin');
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(0);
  const [reminders, setReminders] = useState({ push: true, sms: true, offline: true });
  const [queueMinutes, setQueueMinutes] = useState(18);
  const [checkedMedication, setCheckedMedication] = useState({});
  const [completedSteps, setCompletedSteps] = useState([]);
  const [hasArrived, setHasArrived] = useState(false);

  const value = {
    offlineMode,
    setOfflineMode,
    selectedSymptoms,
    setSelectedSymptoms,
    symptomNote,
    setSymptomNote,
    selectedDoctorId,
    setSelectedDoctorId,
    selectedSlotIndex,
    setSelectedSlotIndex,
    reminders,
    setReminders,
    queueMinutes,
    setQueueMinutes,
    checkedMedication,
    setCheckedMedication,
    completedSteps,
    setCompletedSteps,
    hasArrived,
    setHasArrived,
  };

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>;
}

export function useJourney() {
  const context = useContext(JourneyContext);
  if (!context) {
    throw new Error('useJourney must be used within JourneyProvider');
  }
  return context;
}
