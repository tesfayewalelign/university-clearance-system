import React from "react";

const StudentDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="font-semibold">Selam Girma</span>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            Sign Out
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Pending Tasks</h2>
          <p>No tasks yet.</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
          <p>No completed tasks yet.</p>
        </div>

        <div className="bg-white p-4 rounded shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Submit Clearance</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Add New Clearance
          </button>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
