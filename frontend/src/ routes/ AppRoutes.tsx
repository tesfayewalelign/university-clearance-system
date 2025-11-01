import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../ pages/auth/Login";
import StudentDashboard from "../ pages/ student/Dashboard";
import SubmitClearance from "../ pages/ student/SubmitClearance";
import TrackStatus from "../ pages/ student/TrackStatus";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/submitclearance" element={<SubmitClearance />} />
        <Route path="/student/trackStatus" element={<TrackStatus />} />
      </Routes>
    </BrowserRouter>
  );
}
