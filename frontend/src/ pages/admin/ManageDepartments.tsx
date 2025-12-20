"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../components/Modal";

interface Department {
  id: string;
  name: string;
}

interface DepartmentForm {
  name: string;
}

export default function DepartmentsManagement() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);
  const [form, setForm] = useState<DepartmentForm>({ name: "" });

  const fetchDepartments = async () => {
    const res = await axios.get<{ data: Department[] }>(
      "/department/getAllDepartments"
    );
    setDepartments(res.data.data);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleAdd = async () => {
    await axios.post("/department/createDepartment", form);
    setAddModalOpen(false);
    setForm({ name: "" });
    fetchDepartments();
  };

  const openEditModal = (dept: Department) => {
    setSelectedDepartment(dept);
    setForm({ name: dept.name });
    setEditModalOpen(true);
  };

  const handleEdit = async () => {
    if (!selectedDepartment) return;
    await axios.put(
      `/department/updateDepartment/${selectedDepartment.id}`,
      form
    );
    setEditModalOpen(false);
    setForm({ name: "" });
    fetchDepartments();
  };

  const handleDelete = async () => {
    if (!selectedDepartment) return;
    await axios.delete(`/department/deleteDepartment/${selectedDepartment.id}`);
    setDeleteModalOpen(false);
    fetchDepartments();
  };

  return (
    <div className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Departments Management</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setAddModalOpen(true)}
        >
          + Add Department
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id}>
              <td className="p-3 border">{dept.name}</td>
              <td className="p-3 border flex gap-3">
                <button
                  className="text-blue-600"
                  onClick={() => openEditModal(dept)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600"
                  onClick={() => {
                    setSelectedDepartment(dept);
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
        <Modal title="Add Department" onClose={() => setAddModalOpen(false)}>
          <div className="flex flex-col gap-4">
            <input
              className="border px-4 py-2 rounded"
              placeholder="Department Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
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
        <Modal title="Edit Department" onClose={() => setEditModalOpen(false)}>
          <div className="flex flex-col gap-4">
            <input
              className="border px-4 py-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleEdit}
            >
              Update
            </button>
          </div>
        </Modal>
      )}

      {/* DELETE MODAL */}
      {deleteModalOpen && (
        <Modal
          title="Delete Department?"
          onClose={() => setDeleteModalOpen(false)}
        >
          <p className="mb-4">
            Are you sure you want to delete this department?
          </p>
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
