import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Modal from "../../Components/Modal";

const CATEGORIES = ["Necklace", "Ear Rings", "Hand Bags"];
const emptyForm = {
  name: "",
  price: "",
  category: "Necklace",
  stock: "",
  image: "",
};

const initialProducts = [
  {
    id: 1,
    name: "Gold Necklace",
    price: 5500,
    category: "Necklace",
    image: "",
    stock: 10,
  },
  {
    id: 2,
    name: "Silver Necklace",
    price: 4200,
    category: "Necklace",
    image: "",
    stock: 8,
  },
  {
    id: 3,
    name: "Pearl Necklace",
    price: 6000,
    category: "Necklace",
    image: "",
    stock: 5,
  },
  {
    id: 7,
    name: "Pearl Earrings",
    price: 2200,
    category: "Ear Rings",
    image: "",
    stock: 12,
  },
  {
    id: 8,
    name: "Diamond Earrings",
    price: 3800,
    category: "Ear Rings",
    image: "",
    stock: 7,
  },
  {
    id: 13,
    name: "Bridal Hand Bag",
    price: 8000,
    category: "Hand Bags",
    image: "",
    stock: 5,
  },
];

const AdminProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(initialProducts); // 👈 local state
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [modal, setModal] = useState({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.price || !form.stock) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Missing Fields",
        message: "Please fill in all required fields.",
      });
      return;
    }

    if (editingId) {
      // replace with API call later: await updateProduct({...form, id: editingId})
      setProducts(
        products.map((p) =>
          p.id === editingId
            ? {
                ...form,
                id: editingId,
                price: parseInt(form.price),
                stock: parseInt(form.stock),
              }
            : p,
        ),
      );
      setModal({
        isOpen: true,
        type: "success",
        title: "Product Updated!",
        message: `${form.name} has been updated successfully.`,
      });
    } else {
      // replace with API call later: await addProduct({...form})
      setProducts([
        ...products,
        {
          ...form,
          id: Date.now(),
          price: parseInt(form.price),
          stock: parseInt(form.stock),
        },
      ]);
      setModal({
        isOpen: true,
        type: "success",
        title: "Product Added!",
        message: `${form.name} has been added successfully.`,
      });
    }

    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
      stock: product.stock,
      image: product.image,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = (product) => {
    // replace with API call later: await deleteProduct(product.id)
    setProducts(products.filter((p) => p.id !== product.id));
    setModal({
      isOpen: true,
      type: "error",
      title: "Product Deleted",
      message: `${product.name} has been removed.`,
    });
  };

  return (
    <>
      <Navbar />

      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        type={modal.type}
        title={modal.title}
        message={modal.message}
      />

      <div className={modal.isOpen ? "blur-sm pointer-events-none" : ""}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/admin")}
                className="text-sm text-gray-500 hover:text-gray-800"
              >
                ← Back
              </button>
              <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
            </div>
            <button
              onClick={() => {
                setShowForm(!showForm);
                setForm(emptyForm);
                setEditingId(null);
              }}
              className="bg-yellow-500 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-yellow-600 transition"
            >
              {showForm ? "Cancel" : "+ Add Product"}
            </button>
          </div>

          {/* Form */}
          {showForm && (
            <div className="border border-gray-100 rounded-xl p-6 mb-8 bg-gray-50">
              <h2 className="text-base font-semibold text-gray-800 mb-4">
                {editingId ? "Edit Product" : "Add New Product"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">
                    Product Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Gold Necklace"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">
                    Price (PKR) *
                  </label>
                  <input
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="5500"
                    type="number"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-yellow-400 bg-white"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">
                    Stock *
                  </label>
                  <input
                    name="stock"
                    value={form.stock}
                    onChange={handleChange}
                    placeholder="10"
                    type="number"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-yellow-400"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Image URL (optional)
                  </label>
                  <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-yellow-400"
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="mt-4 bg-yellow-500 text-white text-sm px-6 py-2.5 rounded-lg hover:bg-yellow-600 transition"
              >
                {editingId ? "Update Product" : "Add Product"}
              </button>
            </div>
          )}

          {/* Products List */}
          <div className="flex flex-col gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-100 rounded-xl px-5 py-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-gray-400 text-xs">No img</span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {product.category} · Stock: {product.stock}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-800">
                    PKR {product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-xs text-blue-400 hover:text-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product)}
                    className="text-xs text-red-400 hover:text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
