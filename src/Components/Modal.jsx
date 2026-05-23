import React from "react";

const Modal = ({ isOpen, onClose, type = "success", title, message }) => {
  if (!isOpen) return null;

  const styles = {
    success: {
      icon: "✅",
      titleColor: "text-green-700",
      btnColor: "bg-green-500 hover:bg-green-600",
    },
    error: {
      icon: "❌",
      titleColor: "text-red-700",
      btnColor: "bg-red-500 hover:bg-red-600",
    },
    warning: {
      icon: "⚠️",
      titleColor: "text-yellow-700",
      btnColor: "bg-yellow-500 hover:bg-yellow-600",
    },
    info: {
      icon: "ℹ️",
      titleColor: "text-blue-700",
      btnColor: "bg-blue-500 hover:bg-blue-600",
    },
  };

  const current = styles[type];

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-transparent z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <p className="text-4xl mb-4">{current.icon}</p>
        <h2 className={`text-lg font-semibold mb-2 ${current.titleColor}`}>
          {title}
        </h2>
        <p className="text-sm text-gray-500 mb-6">{message}</p>
        <button
          onClick={onClose}
          className={`w-full text-white text-sm font-medium py-2.5 rounded-lg transition ${current.btnColor}`}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
