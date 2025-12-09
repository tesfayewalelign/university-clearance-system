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
  comment?: string | null;
  updated_at?: string | null;
}

interface StudentData {
  name?: string;
  studentId?: string;
  department?: string;
  clearance: Clearance[];
  avatarUrl?: string;
}

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const StudentDashboard: React.FC = () => {
  const [student, setStudent] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [recentUpdates, setRecentUpdates] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  function normalizeClearanceFromProfile(raw: any): Clearance[] {
    const candidates = [
      raw?.clearanceData?.departmentStatuses,
      raw?.data?.clearanceData?.departmentStatuses,
      raw?.data?.departmentStatuses,
      raw?.departmentStatuses,
      raw?.clearance,
      raw?.data?.clearance,
      raw?.data,
    ];

    const found = candidates.find((c) => Array.isArray(c)) || [];

    return (found as any[])
      .map((it) => {
        if (!it) return null;

        let status = it.status ?? "Pending";
        status =
          status.toString().trim().toLowerCase() === "approved"
            ? "Approved"
            : "Pending";

        let department =
          typeof it.department === "object"
            ? it.department.name ?? it.department.title ?? "Unknown"
            : it.department ?? it.name ?? "Unknown";

        return {
          department:
            it.department?.name ?? it.department ?? it.name ?? "Unknown",
          status:
            (it.status ?? "Pending").toString().trim().toLowerCase() ===
            "approved"
              ? "Approved"
              : "Pending",
          comment: it.comment ?? null,
          updated_at: it.updated_at ?? it.updatedAt ?? null,
        } as Clearance;
      })
      .filter(Boolean) as Clearance[];
  }

  const fetchStudentData = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Not authenticated");
        setLoading(false);
        return;
      }

      const res = await axios.get(`${API}/api/student/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.debug("GET /student/profile response:", res.data);

      const raw = res.data;
      const clearance = normalizeClearanceFromProfile(raw);

      setStudent({
        name: raw.name ?? raw.data?.name ?? raw.studentName,
        studentId: raw.studentId ?? raw.data?.studentId ?? raw.id,
        department: raw.department ?? raw.data?.department,
        avatarUrl: raw.avatarUrl ?? raw.data?.avatarUrl,
        clearance,
      });
    } catch (err: any) {
      console.error("fetchStudentData error:", err);
      setError(
        err?.response?.data?.message ??
          err?.message ??
          "Failed to fetch profile, check console"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  useEffect(() => {
    if (!student) return;
    const updates = student.clearance.map((c) =>
      c.status === "Approved"
        ? `✅ ${c.department} Clearance Approved`
        : `🕒 ${c.department} Clearance Pending`
    );
    setRecentUpdates([...updates].reverse());
  }, [student]);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-red-600">Error loading profile: {error}</div>
    );
  }

  const normalizedClearances: Clearance[] =
    student?.clearance?.map((c) => {
      let departmentName: string;

      if (typeof c.department === "object" && c.department !== null) {
        departmentName =
          (c.department as any).name ??
          (c.department as any).title ??
          "Unknown";
      } else {
        departmentName = c.department ?? "Unknown";
      }

      return {
        department: departmentName,
        status:
          c.status?.toString().trim().toLowerCase() === "approved"
            ? "Approved"
            : "Pending",
        comment: c.comment ?? null,
        updated_at: c.updated_at ?? null,
      };
    }) || [];

  const totalClearances = normalizedClearances.length;
  const approvedClearances = normalizedClearances.filter(
    (c) => c.status === "Approved"
  ).length;
  const pendingClearances = totalClearances - approvedClearances;
  const progress =
    totalClearances > 0 ? (approvedClearances / totalClearances) * 100 : 0;

  const handleApproval = async (departmentName: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Not authenticated");
        return;
      }

      const res = await axios.put(
        `${API}/api/student/clearance/update/${student?.studentId}`,
        { department: departmentName, status: "Approved" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("UPDATE RESPONSE:", res.data);

      const updatedData = res.data.data;

      if (!updatedData || !updatedData.departmentStatuses) {
        return fetchStudentData();
      }

      const normalized = normalizeClearanceFromProfile(updatedData);

      setStudent((prev) =>
        prev
          ? {
              ...prev,
              clearance: prev.clearance.map((c) => {
                const found = normalized.find(
                  (n) => n.department === c.department
                );
                return found ? { ...c, ...found } : c;
              }),
            }
          : prev
      );
    } catch (err: any) {
      console.error("handleApproval error:", err);
      setError(err?.response?.data?.message ?? "Failed to update clearance");
    }
  };

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
              />
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
                  {c.status === "Pending" && (
                    <button
                      onClick={() => handleApproval(c.department)}
                      className="mt-2 py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Approve
                    </button>
                  )}
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
              {recentUpdates.length
                ? recentUpdates.map((update, i) => <li key={i}>{update}</li>)
                : "No recent updates."}
            </ul>
          </motion.section>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default StudentDashboard;
