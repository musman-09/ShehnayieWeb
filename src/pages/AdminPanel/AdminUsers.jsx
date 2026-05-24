import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const initialUsers = [
  {
    id: 1,
    name: "Fatima Ali",
    email: "fatima@gmail.com",
    role: "user",
    orders: 3,
    joined: "2025-01-10",
  },
  {
    id: 2,
    name: "Zara Khan",
    email: "zara@gmail.com",
    role: "user",
    orders: 1,
    joined: "2025-01-12",
  },
  {
    id: 3,
    name: "Ayesha Raza",
    email: "ayesha@gmail.com",
    role: "user",
    orders: 2,
    joined: "2025-01-14",
  },
  {
    id: 4,
    name: "Sara Ahmed",
    email: "sara@gmail.com",
    role: "user",
    orders: 4,
    joined: "2025-01-15",
  },
  {
    id: 5,
    name: "Hina Baig",
    email: "hina@gmail.com",
    role: "user",
    orders: 1,
    joined: "2025-01-18",
  },
  {
    id: 6,
    name: "Admin User",
    email: "admin@shehnayie.com",
    role: "admin",
    orders: 0,
    joined: "2025-01-01",
  },
];

const AdminUsers = () => {
  const navigate = useNavigate();
  const [users] = useState(initialUsers); // replace with API call later
  const [search, setSearch] = useState("");

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/admin")}
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Users</h1>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 mb-6 max-w-sm">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="text-gray-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder-gray-400"
          />
        </div>

        {/* Stats */}
        <div className="flex gap-4 mb-8">
          <div className="bg-gray-50 rounded-xl px-6 py-4 text-center">
            <p className="text-xl font-semibold text-gray-800">
              {users.length}
            </p>
            <p className="text-xs text-gray-500 mt-1">Total Users</p>
          </div>
          <div className="bg-gray-50 rounded-xl px-6 py-4 text-center">
            <p className="text-xl font-semibold text-gray-800">
              {users.filter((u) => u.role === "admin").length}
            </p>
            <p className="text-xs text-gray-500 mt-1">Admins</p>
          </div>
          <div className="bg-gray-50 rounded-xl px-6 py-4 text-center">
            <p className="text-xl font-semibold text-gray-800">
              {users.filter((u) => u.role === "user").length}
            </p>
            <p className="text-xs text-gray-500 mt-1">Customers</p>
          </div>
        </div>

        {/* Users List */}
        <div className="flex flex-col gap-3">
          {filtered.map((user) => (
            <div
              key={user.id}
              className="border border-gray-100 rounded-xl px-5 py-4 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 font-semibold text-sm shrink-0">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-800">
                    {user.orders}
                  </p>
                  <p className="text-xs text-gray-400">Orders</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Joined</p>
                  <p className="text-xs text-gray-600">{user.joined}</p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    user.role === "admin"
                      ? "bg-purple-50 text-purple-600"
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  {user.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
