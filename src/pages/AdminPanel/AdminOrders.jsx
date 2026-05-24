import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const STATUSES = [
  "Pending",
  "Confirmed",
  "Processing",
  "Delivered",
  "Cancelled",
];

const statusColor = {
  Delivered: "bg-green-50 text-green-600",
  Pending: "bg-yellow-50 text-yellow-600",
  Processing: "bg-blue-50 text-blue-600",
  Confirmed: "bg-purple-50 text-purple-600",
  Cancelled: "bg-red-50 text-red-600",
};

const initialOrders = [
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

const AdminOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState(initialOrders); // 👈 local state
  const [filterStatus, setFilterStatus] = useState("All");

  const filtered =
    filterStatus === "All"
      ? orders
      : orders.filter((o) => o.status === filterStatus);

  // update status locally — replace with API call later
  const handleStatusChange = (id, status) => {
    setOrders(orders.map((o) => (o.id === id ? { ...o, status } : o)));
  };

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
          <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
        </div>

        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-6">
          {["All", ...STATUSES].map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`text-xs px-4 py-1.5 rounded-full border transition ${
                filterStatus === s
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "border-gray-200 text-gray-500 hover:bg-gray-50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Orders */}
        <div className="flex flex-col gap-3">
          {filtered.map((order) => (
            <div
              key={order.id}
              className="border border-gray-100 rounded-xl px-5 py-4"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-800">
                      {order.id}
                    </span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${statusColor[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {order.customer} — {order.phone}
                  </span>
                  <span className="text-xs text-gray-400">{order.date}</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {order.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-lg text-gray-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="text-sm font-semibold text-gray-800">
                    PKR {order.amount.toLocaleString()}
                  </span>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 outline-none text-gray-600 bg-white"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
