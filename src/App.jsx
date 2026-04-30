import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { JourneyProvider } from './context/JourneyContext';
import { Home } from './pages/Home';
import { SymptomInput } from './pages/SymptomInput';
import { DoctorDiscovery } from './pages/DoctorDiscovery';
import { AppointmentBooking } from './pages/AppointmentBooking';
import { ConfirmationReminders } from './pages/ConfirmationReminders';
import { ArrivalCheckin } from './pages/ArrivalCheckin';
import { LiveWaiting } from './pages/LiveWaiting';
import { PostVisitSummary } from './pages/PostVisitSummary';
import { FollowupReminders } from './pages/FollowupReminders';

export default function App() {
  return (
    <JourneyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symptoms" element={<SymptomInput />} />
          <Route path="/doctor-discovery" element={<DoctorDiscovery />} />
          <Route path="/appointment-booking" element={<AppointmentBooking />} />
          <Route path="/confirmation" element={<ConfirmationReminders />} />
          <Route path="/arrival-checkin" element={<ArrivalCheckin />} />
          <Route path="/live-waiting" element={<LiveWaiting />} />
          <Route path="/post-visit-summary" element={<PostVisitSummary />} />
          <Route path="/followup-reminders" element={<FollowupReminders />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </JourneyProvider>
  );
}