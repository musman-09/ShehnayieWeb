import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const orders = [
  {
    id: "#001",
    customer: "Fatima Ali",
    phone: "0300-1234567",
    amount: 5500,
    items: ["Gold Necklace x1"],
    status: "Pending",
    date: "2025-01-15",
  },
  {
    id: "#002",
    customer: "Zara Khan",
    phone: "0301-2345678",
    amount: 8000,
    items: ["Bridal Hand Bag x1"],
    status: "Confirmed",
    date: "2025-01-16",
  },
  {
    id: "#003",
    customer: "Ayesha Raza",
    phone: "0302-3456789",
    amount: 3800,
    items: ["Diamond Earrings x1"],
    status: "Processing",
    date: "2025-01-17",
  },
  {
    id: "#004",
    customer: "Sara Ahmed",
    phone: "0303-4567890",
    amount: 12000,
    items: ["Diamond Necklace x1"],
    status: "Delivered",
    date: "2025-01-18",
  },
  {
    id: "#005",
    customer: "Hina Baig",
    phone: "0304-5678901",
    amount: 6500,
    items: ["Velvet Hand Bag x1", "Pearl Earrings x2"],
    status: "Pending",
    date: "2025-01-19",
  },
];

const products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: 5500,
    category: "Necklace",
    stock: 10,
  },
  {
    id: 2,
    name: "Silver Necklace",
    price: 4200,
    category: "Necklace",
    stock: 8,
  },
  {
    id: 3,
    name: "Pearl Necklace",
    price: 6000,
    category: "Necklace",
    stock: 5,
  },
  {
    id: 7,
    name: "Pearl Earrings",
    price: 2200,
    category: "Ear Rings",
    stock: 12,
  },
  {
    id: 8,
    name: "Diamond Earrings",
    price: 3800,
    category: "Ear Rings",
    stock: 7,
  },
  {
    id: 13,
    name: "Bridal Hand Bag",
    price: 8000,
    category: "Hand Bags",
    stock: 5,
  },
];

const statusColor = {
  Delivered: "bg-green-50 text-green-600",
  Pending: "bg-yellow-50 text-yellow-600",
  Processing: "bg-blue-50 text-blue-600",
  Confirmed: "bg-purple-50 text-purple-600",
  Cancelled: "bg-red-50 text-red-600",
};

const AdminPanel = () => {
  const navigate = useNavigate();

  const totalRevenue = orders
    .filter((o) => o.status === "Delivered")
    .reduce((sum, o) => sum + o.amount, 0);

  const stats = [
    {
      label: "Total Products",
      value: products.length,
      icon: "📦",
      path: "/admin/products",
    },
    {
      label: "Total Orders",
      value: orders.length,
      icon: "🛒",
      path: "/admin/orders",
    },
    {
      label: "Pending Orders",
      value: orders.filter((o) => o.status === "Pending").length,
      icon: "⏳",
      path: "/admin/orders",
    },
    {
      label: "Revenue",
      value: `PKR ${totalRevenue.toLocaleString()}`,
      icon: "💰",
      path: null,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              onClick={() => stat.path && navigate(stat.path)}
              className={`bg-gray-50 rounded-xl p-6 text-center ${stat.path ? "cursor-pointer hover:bg-gray-100 transition" : ""}`}
            >
              <p className="text-3xl mb-2">{stat.icon}</p>
              <p className="text-2xl font-semibold text-gray-800">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-base font-semibold text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => navigate("/admin/products")}
              className="bg-yellow-500 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-yellow-600 transition"
            >
              + Add Product
            </button>
            <button
              onClick={() => navigate("/admin/orders")}
              className="border border-gray-200 text-gray-600 text-sm px-5 py-2.5 rounded-lg hover:bg-gray-50 transition"
            >
              View All Orders
            </button>
            <button
              onClick={() => navigate("/admin/users")}
              className="border border-gray-200 text-gray-600 text-sm px-5 py-2.5 rounded-lg hover:bg-gray-50 transition"
            >
              Manage Users
            </button>
          </div>
        </div>

        {/* Recent Orders */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-800">
              Recent Orders
            </h2>
            <button
              onClick={() => navigate("/admin/orders")}
              className="text-xs text-yellow-500 hover:underline"
            >
              View all
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {orders.slice(0, 5).map((order) => (
              <div
                key={order.id}
                className="border border-gray-100 rounded-xl px-5 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-800">
                    {order.id}
                  </span>
                  <span className="text-sm text-gray-500">
                    {order.customer}
                  </span>
                  <span className="text-xs text-gray-400">{order.date}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-800">
                    PKR {order.amount.toLocaleString()}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${statusColor[order.status]}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
