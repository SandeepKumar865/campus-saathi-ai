import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import StudentLayout from './layouts/StudentLayout';
import AdminLayout from './layouts/AdminLayout';

// Student Pages
import StudentDashboard from './pages/student/Dashboard';
import AIAssistant from './pages/student/AIAssistant';
import RaiseRequest from './pages/student/RaiseRequest';
import RequestsList from './pages/student/RequestsList';
import RequestDetail from './pages/student/RequestDetail';
import DocumentChecker from './pages/student/DocumentChecker';
import Navigator from './pages/student/Navigator';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import CampusPulse from './pages/admin/Pulse';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="assistant" element={<AIAssistant />} />
          <Route path="requests/new" element={<RaiseRequest />} />
          <Route path="requests" element={<RequestsList />} />
          <Route path="requests/:id" element={<RequestDetail />} />
          <Route path="document-checker" element={<DocumentChecker />} />
          <Route path="navigator" element={<Navigator />} />
          <Route path="profile" element={<div className="p-8 text-center text-gray-500">Profile Page (Placeholder)</div>} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="pulse" element={<CampusPulse />} />
          <Route path="requests" element={<div className="p-8 text-center text-gray-500">Admin Requests (Placeholder)</div>} />
          <Route path="students" element={<div className="p-8 text-center text-gray-500">Students Directory (Placeholder)</div>} />
          <Route path="locations" element={<div className="p-8 text-center text-gray-500">Location Management (Placeholder)</div>} />
          <Route path="knowledge" element={<div className="p-8 text-center text-gray-500">Knowledge Base (Placeholder)</div>} />
          <Route path="settings" element={<div className="p-8 text-center text-gray-500">Settings (Placeholder)</div>} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
