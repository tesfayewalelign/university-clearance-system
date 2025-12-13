"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<any[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      router.push("/login");
      return;
    }

    if (role !== "admin") {
      router.push("/");
      return;
    }

    fetchData(token);
  }, []);

  const fetchData = async (token: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/clearanceRequests`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();

      setRequests(data);

      const statsCalc = {
        total: data.length,
        pending: data.filter((r: any) => r.status === "pending").length,
        approved: data.filter((r: any) => r.status === "approved").length,
        rejected: data.filter((r: any) => r.status === "rejected").length,
      };

      setStats(statsCalc);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) return <p className="p-10">Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg p-5">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

        <ul className="space-y-3">
          <li
            onClick={() => router.push("/admin/dashboard")}
            className="p-3 bg-blue-600 text-white rounded cursor-pointer"
          >
            Dashboard
          </li>

          <li
            onClick={() => router.push("/admin/departments")}
            className="p-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Departments
          </li>

          <li
            onClick={() => router.push("/admin/students")}
            className="p-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Students
          </li>

          <li
            onClick={() => router.push("/admin/requests")}
            className="p-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Clearance Requests
          </li>

          <li
            onClick={() => router.push("/admin/settings")}
            className="p-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Settings
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-6">Welcome, Admin</h2>

        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-600">Total Requests</h3>
            <p className="text-3xl font-bold">{stats.total}</p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl shadow">
            <h3 className="text-gray-700">Pending</h3>
            <p className="text-3xl font-bold">{stats.pending}</p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl shadow">
            <h3 className="text-gray-700">Approved</h3>
            <p className="text-3xl font-bold">{stats.approved}</p>
          </div>

          <div className="bg-red-100 p-6 rounded-xl shadow">
            <h3 className="text-gray-700">Rejected</h3>
            <p className="text-3xl font-bold">{stats.rejected}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Recent Clearance Requests
        </h3>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Student</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {requests.slice(0, 8).map((req: any, index: number) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{req.studentName}</td>
                  <td className="p-3">{req.department}</td>
                  <td className="p-3 capitalize">{req.status}</td>
                  <td className="p-3">
                    <button
                      onClick={() => router.push(`/admin/requests/${req._id}`)}
                      className="text-blue-600 underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}

              {requests.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-5 text-center text-gray-500">
                    No Requests Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
