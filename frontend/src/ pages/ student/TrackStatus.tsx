import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import axios from "../../utils/axios";
import DarkModeToggle from "../../components/DarkModeToggle";
interface DepartmentStatus {
  id: number;
  status: string;
  comment: string | null;
  updated_at: string;
  department: {
    id: number;
    name: string;
  };
}

interface Clearance {
  id: number;
  overallStatus: string;
  createdAt: string;
  departmentStatuses: DepartmentStatus[];
}

const TrackStatus: React.FC = () => {
  const [clearance, setClearance] = useState<Clearance | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClearance = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get(
          `http://localhost:5000/api/student/clearanceStatus`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.status === 204 || !res.data?.data) {
          setClearance(null);
        } else {
          setClearance(res.data.data);
        }
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch clearance");
      } finally {
        setLoading(false);
      }
    };

    fetchClearance();
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;
  if (error) return <div className="p-10 text-red-600">{error}</div>;

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
                href="/student/submitclearance"
                className="py-2 px-3 rounded-lg hover:bg-blue-100 font-medium text-gray-700"
              >
                📝 Submit Clearance
              </a>
              <a
                href="/student/trackStatus"
                className="py-2 px-3 rounded-lg bg-blue-100 font-medium text-gray-700"
              >
                🔍 Track Status
              </a>
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
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            🔍 Track Clearance Status
          </h1>

          {!clearance ? (
            <p className="text-gray-600">
              No clearance requests submitted yet.
            </p>
          ) : (
            <>
              <div className="bg-white p-6 rounded-2xl shadow-sm border mb-6">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                  Overall Status: {clearance.overallStatus}
                </h2>
                <p className="text-xs text-gray-400">
                  Submitted: {new Date(clearance.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clearance.departmentStatuses.map((d) => (
                  <div
                    key={d.id}
                    className="bg-white p-6 rounded-2xl shadow-sm border"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      {d.department.name} Clearance
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      Status:{" "}
                      <span
                        className={`font-medium ${
                          d.status === "Approved"
                            ? "text-green-600"
                            : d.status === "Pending"
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {d.status}
                      </span>
                    </p>
                    {d.comment && (
                      <p className="text-sm text-gray-600 mb-1">
                        Comment: {d.comment}
                      </p>
                    )}
                    <p className="text-xs text-gray-400">
                      Updated: {new Date(d.updated_at).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default TrackStatus;
