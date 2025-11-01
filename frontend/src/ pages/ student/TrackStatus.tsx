import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import axios from "axios";

interface Clearance {
  id: string;
  department: string;
  description: string;
  status: string;
  createdAt: string;
}

const TrackStatus: React.FC = () => {
  const [clearances, setClearances] = useState<Clearance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClearances = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get(
          `http://localhost:5000/api/clearances/student?ts=${Date.now()}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setClearances(Array.isArray(res.data) ? res.data : []);
      } catch (err: any) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to fetch clearances");
      } finally {
        setLoading(false);
      }
    };

    fetchClearances();
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
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            🔍 Track Clearance Status
          </h1>

          {clearances.length === 0 ? (
            <p className="text-gray-600">
              No clearance requests submitted yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clearances.map((c) => (
                <div
                  key={c.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {c.department} Clearance
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Description: {c.description}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
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
                  <p className="text-xs text-gray-400">
                    Submitted: {new Date(c.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default TrackStatus;
