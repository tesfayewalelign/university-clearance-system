"use client";

import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Modal from "../../components/Modal";

interface Department {
  id: string;
  name: string;
}

interface Student {
  id: string;
  name: string;
  email: string;
  department?: Department;
  departmentId?: string;
  password?: string;
}

export default function StudentsManagement() {
  const [students, setStudents] = useState<Student[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [search, setSearch] = useState("");

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const [form, setForm] = useState<{
    name: string;
    email: string;
    password: string;
    departmentId: string;
  }>({
    name: "",
    email: "",
    password: "",
    departmentId: "",
  });

  const fetchStudents = async () => {
    try {
      const res = await axios.get("/users/getAllUsers");
      setStudents(res.data.data);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  const fetchDepartments = async () => {
    try {
      const res = await axios.get("/department/getAllDepartments");
      setDepartments(res.data.data);
    } catch (error) {
      console.error("Failed to fetch departments:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchDepartments();
  }, []);

  const handleAdd = async () => {
    try {
      await axios.post("/auth/createUserByAdmin", form);
      setAddModalOpen(false);
      resetForm();
      fetchStudents();
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  const openEditModal = (student: Student) => {
    setSelectedStudent(student);
    setForm({
      name: student.name,
      email: student.email,
      password: "",
      departmentId: student.department?.id || "",
    });
    setEditModalOpen(true);
  };

  const handleEdit = async () => {
    if (!selectedStudent) return;
    try {
      await axios.put(`/users/${selectedStudent.id}`, form);
      setEditModalOpen(false);
      resetForm();
      fetchStudents();
    } catch (error) {
      console.error("Failed to edit student:", error);
    }
  };

  const handleDelete = async () => {
    if (!selectedStudent) return;
    try {
      await axios.delete(`/users/${selectedStudent.id}`);
      setDeleteModalOpen(false);
      fetchStudents();
    } catch (error) {
      console.error("Failed to delete student:", error);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      password: "",
      departmentId: "",
    });
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Students Management</h1>
        <button
          onClick={() => {
            resetForm();
            setAddModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Student
        </button>
      </div>

      <input
        type="text"
        placeholder="Search student..."
        className="border px-4 py-2 rounded w-1/3 mb-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Department</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((s) => (
            <tr key={s.id}>
              <td className="p-3 border">{s.name}</td>
              <td className="p-3 border">{s.email}</td>
              <td className="p-3 border">{s.department?.name || "-"}</td>
              <td className="p-3 border flex gap-3">
                <button
                  className="text-blue-600"
                  onClick={() => openEditModal(s)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600"
                  onClick={() => {
                    setSelectedStudent(s);
                    setDeleteModalOpen(true);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {addModalOpen && (
        <Modal onClose={() => setAddModalOpen(false)} title="Add Student">
          <div className="flex flex-col gap-4">
            <input
              className="border px-4 py-2 rounded"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="border px-4 py-2 rounded"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="border px-4 py-2 rounded"
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <select
              className="border px-4 py-2 rounded"
              value={form.departmentId}
              onChange={(e) =>
                setForm({ ...form, departmentId: e.target.value })
              }
            >
              <option value="">Select Department</option>
              {departments.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>

            <button
              className="bg-green-600 text-white px-4 py-2 rounded"
              onClick={handleAdd}
            >
              Save
            </button>
          </div>
        </Modal>
      )}

      {editModalOpen && (
        <Modal onClose={() => setEditModalOpen(false)} title="Edit Student">
          <div className="flex flex-col gap-4">
            <input
              className="border px-4 py-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="border px-4 py-2 rounded"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <select
              className="border px-4 py-2 rounded"
              value={form.departmentId}
              onChange={(e) =>
                setForm({ ...form, departmentId: e.target.value })
              }
            >
              <option value="">Select Department</option>
              {departments.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleEdit}
            >
              Update
            </button>
          </div>
        </Modal>
      )}

      {deleteModalOpen && (
        <Modal
          onClose={() => setDeleteModalOpen(false)}
          title="Delete Student?"
        >
          <p className="mb-4">Are you sure you want to delete this student?</p>
          <div className="flex gap-4">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="border px-4 py-2 rounded"
              onClick={() => setDeleteModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
