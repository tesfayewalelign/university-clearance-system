import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../ pages/auth/Login";
import StudentDashboard from "../ pages/ student/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/StudenDashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
