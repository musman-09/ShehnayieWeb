import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../redux/cartSlice";
import Navbar from "../../Components/Navbar";
import Modal from "../../Components/Modal";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const [showModal, setShowModal] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    setShowModal(true);
  };

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32 text-center px-8">
          <p className="text-5xl mb-4">🛒</p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your cart is empty
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Add some products to get started.
          </p>
          <button
            onClick={() => navigate("/home")}
            className="bg-yellow-500 text-white text-sm px-6 py-2.5 rounded-lg hover:bg-yellow-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          dispatch(clearCart());
          navigate("/home");
        }}
        type="success"
        title="Order Placed!"
        message="Your order has been placed successfully. We'll contact you soon."
      />

      {/* 👇 blur page content when modal is open */}
      <div className={showModal ? "blur-sm pointer-events-none" : ""}>
        <div className="max-w-5xl mx-auto px-8 py-12">
          <h1 className="text-2xl font-semibold text-gray-800 mb-8">
            Your Cart
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-100 rounded-xl p-4 flex gap-4 items-center"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-lg shrink-0 flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-gray-400 text-xs">No Image</span>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      PKR {item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="w-7 h-7 border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-gray-50"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium text-gray-800 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="w-7 h-7 border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-sm font-semibold text-gray-800">
                      PKR {(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-xs text-red-400 hover:text-red-600 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={() => dispatch(clearCart())}
                className="text-xs text-gray-400 hover:text-gray-600 text-left mt-2"
              >
                Clear cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="border border-gray-100 rounded-xl p-6 h-fit">
              <h2 className="text-base font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>

              <div className="flex flex-col gap-3 text-sm">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-gray-500"
                  >
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>
                      PKR {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-semibold text-gray-800">
                <span>Total</span>
                <span>PKR {total.toLocaleString()}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-yellow-500 text-white text-sm font-medium py-3 rounded-lg hover:bg-yellow-600 transition"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate("/home")}
                className="mt-2 w-full border border-gray-200 text-gray-600 text-sm py-2.5 rounded-lg hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
