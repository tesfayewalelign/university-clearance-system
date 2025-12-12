"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import axios from "../../utils/axios";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface Student {
  id: string;
  name: string;
  email: string;
  departmentId: string;
  departmentName?: string;
}

interface Department {
  id: string;
  name: string;
}

interface ClearanceRequest {
  id: string;
  studentName: string;
  departmentId: string;
  departmentName: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

interface Stats {
  totalStudents: number;
  totalDepartments: number;
  pendingRequests: number;
  approvedRequests: number;
}

interface DeptRequestData {
  name: string;
  requests: number;
}

interface StatusData extends Record<string, any> {
  name: string;
  value: number;
}

export default function AdminDashboard() {
  const router = useRouter();

  const [stats, setStats] = useState<Stats>({
    totalStudents: 0,
    totalDepartments: 0,
    pendingRequests: 0,
    approvedRequests: 0,
  });

  const [requestsPerDept, setRequestsPerDept] = useState<DeptRequestData[]>([]);
  const [requestStatusData, setRequestStatusData] = useState<StatusData[]>([]);
  const [recentRequests, setRecentRequests] = useState<ClearanceRequest[]>([]);

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

    fetchStats(token);
  }, []);

  const fetchStats = async (token: string) => {
    try {
      const [studentsRes, deptsRes, requestsRes] = await Promise.all([
        axios.get<{ data: Student[] }>("/users/getAllUsers"),
        axios.get<{ data: Department[] }>("/department/getAllDepartments"),
        axios.get<{ data: ClearanceRequest[] }>(
          "/clearanceRequest/getAllClearanceRequests"
        ),
      ]);

      const students = studentsRes.data.data;
      const departments = deptsRes.data.data;
      const requests = requestsRes.data.data;

      setStats({
        totalStudents: students.length,
        totalDepartments: departments.length,
        pendingRequests: requests.filter((r) => r.status === "pending").length,
        approvedRequests: requests.filter((r) => r.status === "approved")
          .length,
      });

      const deptData: DeptRequestData[] = departments.map((d) => ({
        name: d.name,
        requests: requests.filter((r) => r.departmentId === d.id).length,
      }));
      setRequestsPerDept(deptData);

      const statusData: StatusData[] = [
        {
          name: "Pending",
          value: requests.filter((r) => r.status === "pending").length,
        },
        {
          name: "Approved",
          value: requests.filter((r) => r.status === "approved").length,
        },
        {
          name: "Rejected",
          value: requests.filter((r) => r.status === "rejected").length,
        },
      ];
      setRequestStatusData(statusData);

      setRecentRequests(requests.slice(-5).reverse());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
          <h2 className="text-lg">Total Students</h2>
          <p className="text-2xl font-bold">{stats.totalStudents}</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-xl shadow">
          <h2 className="text-lg">Total Departments</h2>
          <p className="text-2xl font-bold">{stats.totalDepartments}</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow">
          <h2 className="text-lg">Pending Requests</h2>
          <p className="text-2xl font-bold">{stats.pendingRequests}</p>
        </div>
        <div className="bg-purple-600 text-white p-6 rounded-xl shadow">
          <h2 className="text-lg">Approved Requests</h2>
          <p className="text-2xl font-bold">{stats.approvedRequests}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Requests per Department
          </h2>
          <BarChart width={500} height={300} data={requestsPerDept}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="requests" fill="#8884d8" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Request Status Distribution
          </h2>
          <PieChart width={400} height={300}>
            <Pie
              data={requestStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {requestStatusData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Recent Clearance Requests
        </h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Student</th>
              <th className="p-3 border">Department</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentRequests.map((r) => (
              <tr key={r.id}>
                <td className="p-3 border">{r.studentName}</td>
                <td className="p-3 border">{r.departmentName}</td>
                <td className="p-3 border capitalize">{r.status}</td>
                <td className="p-3 border">
                  {new Date(r.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
