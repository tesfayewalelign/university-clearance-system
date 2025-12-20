"use client";
import React, { useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import axios from "axios";
import DarkModeToggle from "../../components/DarkModeToggle";

const SubmitClearance: React.FC = () => {
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!department || !description.trim()) {
      setMessage("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/createClearanceRequest",
        { department, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage("Clearance request submitted successfully!");
      setDepartment("");
      setDescription("");
    } catch (err: any) {
      console.error(err);
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
                className="py-2 px-3 rounded-lg bg-blue-100 font-medium text-gray-700"
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
            📝 Submit Clearance Request
          </h1>

          {message && (
            <div
              className={`mb-4 p-3 rounded ${
                message.startsWith("✅")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-sm max-w-md"
          >
            <label className="block mb-3 font-medium text-gray-700">
              Department
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Enter department"
                className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>

            <label className="block mb-3 font-medium text-gray-700">
              Description
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description or notes"
                className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              {loading ? "Submitting..." : "Submit Clearance"}
            </button>
          </form>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default SubmitClearance;
