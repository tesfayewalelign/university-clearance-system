"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Login from "../../pages/auth/Login";

import StudentDashboard from "../../pages/student/dashboard";
import SubmitClearance from "../../pages/student/SubmitClearance";
import TrackStatus from "../../pages/student/TrackStatus";
import AdminDashboard from "../../pages/admin/dashboard";
import StudentsManagement from "../../pages/admin/studentManagment";
import EditDepartment from "../../pages/admin/departmentById";
import DepartmentsManagement from "../../pages/admin/ManageDepartments";

export default function AppRoutes() {
  const [role, setRole] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    setRole(savedRole);
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {role === "STUDENT" && (
          <>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route
              path="/student/submitclearance"
              element={<SubmitClearance />}
            />
            <Route path="/student/trackStatus" element={<TrackStatus />} />
          </>
        )}
        {(role === "ADMIN" || role === "SUPER_ADMIN") && (
          <>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/students" element={<StudentsManagement />} />
            <Route path="/admin/departments" element={<EditDepartment />} />
          </>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
