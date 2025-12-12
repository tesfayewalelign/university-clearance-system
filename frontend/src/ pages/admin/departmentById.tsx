"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditDepartment({ params }: any) {
  const router = useRouter();
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState({
    name: "",
    officerName: "",
    phone: "",
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

    fetchDepartment(token);
  }, []);

  const fetchDepartment = async (token: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/department/getDepartmentById/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setDepartment({
        name: data.name,
        officerName: data.officerName,
        phone: data.phone,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const updateDepartment = async () => {
    const token = localStorage.getItem("token");

    if (!department.name) return alert("Name cannot be empty");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/department/updateDepartment/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(department),
        }
      );

      if (!res.ok) return alert("Error updating department");

      alert("Department updated successfully");
      router.push("/admin/departments");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p className="p-10 text-lg">Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg p-5">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

        <ul className="space-y-3">
          <li
            onClick={() => router.push("/admin/dashboard")}
            className="p-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Dashboard
          </li>

          <li
            onClick={() => router.push("/admin/departments")}
            className="p-3 bg-blue-600 text-white rounded cursor-pointer"
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

      <main className="flex-1 p-10">
        <h2 className="text-2xl font-semibold mb-6">Edit Department</h2>

        <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl">
          <label className="block mb-5">
            <span className="font-medium">Department Name</span>
            <input
              type="text"
              className="w-full p-3 border rounded mt-2"
              value={department.name}
              onChange={(e) =>
                setDepartment({ ...department, name: e.target.value })
              }
            />
          </label>

          <label className="block mb-5">
            <span className="font-medium">Officer Name</span>
            <input
              type="text"
              className="w-full p-3 border rounded mt-2"
              value={department.officerName}
              onChange={(e) =>
                setDepartment({ ...department, officerName: e.target.value })
              }
            />
          </label>

          <label className="block mb-5">
            <span className="font-medium">Phone</span>
            <input
              type="text"
              className="w-full p-3 border rounded mt-2"
              value={department.phone}
              onChange={(e) =>
                setDepartment({ ...department, phone: e.target.value })
              }
            />
          </label>

          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={updateDepartment}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Save Changes
            </button>

            <button
              onClick={() => router.push("/admin/departments")}
              className="bg-gray-300 px-6 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
