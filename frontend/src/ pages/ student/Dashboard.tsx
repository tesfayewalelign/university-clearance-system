import React, { useEffect, useState } from "react";
import axios from "axios";
import ProtectedRoute from "../../components/ProtectedRoute";
import { User } from "lucide-react";

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

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-50">
        <aside className="w-64 bg-white border-r shadow flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-center mt-6 mb-8 text-blue-700">
              Clearance Portal
            </h2>

            <nav className="flex flex-col gap-3 px-6">
              <a
                href="/student/Dashboard"
                className="py-2 px-3 rounded-lg hover:bg-blue-100 font-medium text-gray-700"
              >
                🏠 Dashboard
              </a>
              <a
                href="/student/SubmitClearance"
                className="py-2 px-3 rounded-lg hover:bg-blue-100 font-medium text-gray-700"
              >
                📝 Submit Clearance
              </a>
              <a
                href="/student/TrackStatus"
                className="py-2 px-3 rounded-lg hover:bg-blue-100 font-medium text-gray-700"
              >
                🔍 Track Status
              </a>
            </nav>
          </div>

          <div className="px-6 mb-6">
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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome, <span className="text-blue-600">{student?.name}</span> 👋
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <h3 className="text-gray-800 font-semibold">
                    {student?.name || "Loading..."}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {student?.department ? `${student.department} Student` : ""}
                  </p>
                </div>
                <div className="relative w-30 h-30 rounded-full border flex items-center justify-center bg-gray-100 overflow-hidden">
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
                    <User className="w-6 h-6 text-black" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {student?.clearance && student.clearance.length > 0 ? (
              student.clearance.map((c) => (
                <div
                  key={c.department}
                  className="bg-white p-6 rounded-2xl shadow-sm border"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {c.department} Clearance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Status:{" "}
                    <span
                      className={`font-medium ${
                        c.status === "Approved"
                          ? "text-green-600"
                          : c.status === "Pending"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {c.status}
                    </span>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 col-span-3">
                No clearance requests submitted yet.
              </p>
            )}
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default StudentDashboard;
