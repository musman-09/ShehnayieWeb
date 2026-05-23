import React, { useState } from "react"; // 👈 add useState
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import productsData from "../../data/productsData";
import Navbar from "../../Components/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 👇 track which image is selected
  const [selectedImage, setSelectedImage] = useState(0);
  const product = productsData.find((p) => p.id === parseInt(id));
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((i) => i.id === product?.id);

  if (!product)
    return <div className="p-8 text-gray-500">Product not found.</div>;

  const images = product.images?.length ? product.images : [product.image];
  console.log("product:", product.name, "images count:", images.length); // 👈

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:text-gray-800 mb-8 flex items-center gap-1"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main Image */}
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
              {images[selectedImage] ? (
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover rounded-2xl"
                />
              ) : (
                <span className="text-gray-400">No Image</span>
              )}
            </div>

            {/* Thumbnail Row */}
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition ${
                      selectedImage === index
                        ? "border-yellow-500" // selected thumbnail
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No Image</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="text-xs text-yellow-500 uppercase tracking-widest mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl font-semibold text-gray-800 mb-3">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-gray-800 mb-6">
              PKR {product.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              A beautiful handcrafted piece from our {product.category}{" "}
              collection. Made with premium materials for a timeless look.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => !isInCart && dispatch(addToCart(product))}
                disabled={isInCart}
                className={`flex-1 text-sm font-medium py-3 rounded-lg transition ${
                  isInCart
                    ? "bg-green-50 text-green-600 border border-green-200 cursor-not-allowed"
                    : "bg-yellow-500 text-white hover:bg-yellow-600"
                }`}
              >
                {isInCart ? "✓ Added to Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => navigate("/cart")}
                className="flex-1 border border-gray-200 text-gray-600 text-sm py-3 rounded-lg hover:bg-gray-50 transition"
              >
                View Cart {cartItems.length > 0 && `(${cartItems.length})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
