"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import DepartmentsManagement from "./ManageDepartments";

interface ClearanceRequest {
  id: number;
  overallStatus: "Pending" | "Approved" | "Rejected";
  student: {
    full_name: string;
  };
  departmentStatuses: {
    department: {
      name: string;
    };
  }[];
}

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

    if (role !== "ADMIN" && role !== "SUPER_ADMIN") {
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
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();

      const requestsArray = result.data;

      setRequests(requestsArray);

      const statsCalc = {
        total: requestsArray.length,
        pending: requestsArray.filter((r: any) => r.overallStatus === "Pending")
          .length,
        approved: requestsArray.filter(
          (r: any) => r.overallStatus === "Approved"
        ).length,
        rejected: requestsArray.filter(
          (r: any) => r.overallStatus === "Rejected"
        ).length,
      };

      setStats(statsCalc);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-10 text-gray-500">Loading admin dashboard...</div>;
  }

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
            onClick={() => router.push("/admin/ManageDepartments")}
            className="p-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Departments
          </li>

          <li
            onClick={() => router.push("/admin/studentManagment")}
            className="p-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Students
          </li>

          <li
            onClick={() => router.push("/admin/analytics")}
            className="p-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Clearance Requests
          </li>
          <li
            onClick={() => router.push("/admin/analytics")}
            className="p-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Analaytics
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
              {requests.slice(0, 8).map((req: any) => (
                <tr key={req.id} className="border-b">
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
      ${
        req.overallStatus === "Approved"
          ? "bg-green-100 text-green-700"
          : req.overallStatus === "Pending"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-red-100 text-red-700"
      }`}
                    >
                      {req.overallStatus}
                    </span>
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
