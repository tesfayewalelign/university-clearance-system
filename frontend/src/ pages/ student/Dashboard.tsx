"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProtectedRoute from "../../components/ProtectedRoute";
import { User, Bell, BookOpen, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import DarkModeToggle from "../../components/DarkModeToggle";

interface Clearance {
  department: string;
  status: string;
  name: string;
  avatarUrl?: string;
}
interface StudentData {
  name: string;
  studentId: string;
  department: string;
  clearance: Clearance[];
  avatarUrl?: string;
}

const StudentDashboard: React.FC = () => {
  const [student, setStudent] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get(
          "http://localhost:5000/api/student/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setStudent(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudentData();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  const totalClearances = student?.clearance?.length || 0;
  const approvedClearances =
    student?.clearance?.filter((c) => c.status === "Approved").length || 0;
  const progress =
    totalClearances > 0 ? (approvedClearances / totalClearances) * 100 : 0;

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <aside className="w-64 bg-white dark:bg-gray-800 border-r shadow flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-center mt-6 mb-8 text-blue-700 dark:text-blue-400">
              Clearance Portal
            </h2>

            <nav className="flex flex-col gap-3 px-6">
              {["Dashboard", "SubmitClearance", "TrackStatus"].map(
                (page, i) => (
                  <a
                    key={i}
                    href={`/student/${page}`}
                    className="py-2 px-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 font-medium text-gray-700 dark:text-gray-200 transition"
                  >
                    {i === 0 ? "🏠" : i === 1 ? "📝" : "🔍"} {page}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="px-6 mb-6 flex flex-col gap-2">
            <DarkModeToggle />
            <button
              className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/auth/login";
              }}
            >
              Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 p-8 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Welcome back,{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {student?.name}
                </span>{" "}
                👋
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative">
                <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-full border flex items-center justify-center bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  {student?.avatarUrl ? (
                    <img
                      src={student.avatarUrl}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      onError={(e) =>
                        (e.currentTarget.src = "/placeholder-avatar.png")
                      }
                    />
                  ) : (
                    <User className="w-6 h-6 text-black dark:text-white" />
                  )}
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  {student?.name}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          >
            {/* Student Info */}
            <div className="bg-blue-600 text-white p-6 rounded-2xl shadow flex items-center gap-4">
              <BookOpen className="w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold">Student Info</h3>
                <p>ID: {student?.studentId}</p>
                <p>Department: {student?.department}</p>
              </div>
            </div>

            <div className="bg-green-100 p-6 rounded-2xl shadow flex items-center gap-4">
              <ClipboardCheck className="w-8 h-8 text-green-700" />
              <div>
                <h3 className="text-lg font-semibold text-green-800">
                  Clearance Approved
                </h3>
                <p className="text-3xl font-bold text-green-700">
                  {approvedClearances}
                </p>
              </div>
            </div>

            <div className="bg-yellow-100 p-6 rounded-2xl shadow flex items-center gap-4">
              <span className="w-8 h-8 text-yellow-700">⏳</span>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800">
                  Pending Requests
                </h3>
                <p className="text-3xl font-bold text-yellow-700">
                  {totalClearances - approvedClearances}
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow mb-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Clearance Progress
            </h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {Math.round(progress)}% Completed
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          >
            {student?.clearance?.length ? (
              student.clearance.map((c) => (
                <motion.div
                  key={c.department}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-2xl shadow-sm border transition hover:shadow-md ${
                    c.status === "Approved"
                      ? "bg-green-50 border-green-300"
                      : c.status === "Pending"
                      ? "bg-yellow-50 border-yellow-300"
                      : "bg-red-50 border-red-300"
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    {c.department} Clearance
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Status:{" "}
                    <span
                      className={`font-medium ${
                        c.status === "Approved"
                          ? "text-green-600 dark:text-green-400"
                          : c.status === "Pending"
                          ? "text-yellow-600 dark:text-yellow-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {c.status}
                    </span>
                  </p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-300 col-span-3">
                No clearance requests submitted yet.
              </p>
            )}
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Recent Updates
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>✅ Library Clearance Approved</li>
              <li>🕒 Finance Office request still pending</li>
              <li>📢 Admin posted new notice for final year students</li>
            </ul>
          </motion.section>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default StudentDashboard;
