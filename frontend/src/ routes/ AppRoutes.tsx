import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "../pages/student/Dashboard";
import OfficerDashboard from "../pages/officer/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/officer" element={<OfficerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
