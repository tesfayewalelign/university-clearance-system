import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../ pages/auth/Login";
import StudentDashboard from "../ pages/ student/Dashboard";
import SubmitClearance from "../ pages/ student/SubmitClearance";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />

        <Route path="/student/submit-clearance" element={<SubmitClearance />} />
      </Routes>
    </BrowserRouter>
  );
}
