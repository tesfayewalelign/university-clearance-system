import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Login from "../ pages/auth/Login";
import StudentDashboard from "../ pages/ student/Dashboard";
import SubmitClearance from "../ pages/ student/SubmitClearance";
import TrackStatus from "../ pages/ student/TrackStatus";
import AdminDashboard from "../ pages/admin/Dashboard";
import StudentsManagement from "../ pages/admin/studentManagment";
import EditDepartment from "../ pages/admin/departmentById";

export default function AppRoutes() {
  const role = localStorage.getItem("role");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {role === "student" && (
          <>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route
              path="/student/submitclearance"
              element={<SubmitClearance />}
            />
            <Route path="/student/trackStatus" element={<TrackStatus />} />
          </>
        )}

        {role === "admin" && (
          <>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/students" element={<StudentsManagement />} />
            <Route path="/admin/departments" element={<StudentsManagement />} />

            <Route path="/admin/departments" element={<EditDepartment />} />
          </>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
