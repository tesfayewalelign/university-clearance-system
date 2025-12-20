"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      const { token, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      if (role === "STUDENT") router.push("/student/dashboard");
      else if (role === "OFFICER") router.push("/officer/dashboard");
      else if (role === "ADMIN") router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className=" italic flex items-center  justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-xl w-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-center ">Log In</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <div className="flex items-center border rounded-md p-2 focus-within:border-black">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.94 6.94A2 2 0 014 6h12a2 2 0 011.06.94l-7.06 4.5-7.06-4.5z" />
              <path d="M18 8.12l-8 5.11-8-5.11V14a2 2 0 002 2h12a2 2 0 002-2V8.12z" />
            </svg>

            <span className="mx-2 text-gray-500">|</span>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>

            <div className="flex items-center border rounded-md p-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 8a5 5 0 1110 0v2h1a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h1V8zm2 0v2h6V8a3 3 0 10-6 0z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-2 text-gray-300">|</span>

              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
