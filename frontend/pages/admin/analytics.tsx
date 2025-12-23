"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import axios from "axios";

const BarChart = dynamic(() => import("recharts").then((mod) => mod.BarChart), {
  ssr: false,
});
const Bar = dynamic(() => import("recharts").then((mod) => mod.Bar), {
  ssr: false,
});
const XAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), {
  ssr: false,
});
const YAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), {
  ssr: false,
});
const Tooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), {
  ssr: false,
});
const PieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), {
  ssr: false,
});
const Pie = dynamic(() => import("recharts").then((mod) => mod.Pie), {
  ssr: false,
});
const Cell = dynamic(() => import("recharts").then((mod) => mod.Cell), {
  ssr: false,
});
const Legend = dynamic(() => import("recharts").then((mod) => mod.Legend), {
  ssr: false,
});
const ResponsiveContainer = dynamic(
  () => import("recharts").then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);

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
interface StatusData {
  name: string;
  value: number;
  [key: string]: string | number | undefined;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
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
    setIsClient(true);
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
    if (typeof window === "undefined") return;
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

      setRequestsPerDept(
        departments.map((d) => ({
          name: d.name,
          requests: requests.filter((r) => r.departmentId === d.id).length,
        }))
      );

      setRequestStatusData([
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
      ]);

      setRecentRequests(requests.slice(-5).reverse());
    } catch (err) {
      console.log(err);
    }
  };

  if (!isClient) return <div className="p-10">Loading Dashboard...</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <div className="bg-white p-6 rounded-xl shadow min-h-[400px]">
          <h2 className="text-xl font-semibold mb-4">
            Requests per Department
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={requestsPerDept}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="requests" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow min-h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Status Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={requestStatusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {requestStatusData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Recent Requests</h2>
        <table className="w-full border"></table>
      </div>
    </div>
  );
}
