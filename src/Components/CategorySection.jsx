import { useState } from "react";
import ProductCard from "./productCard";

const INITIAL_SHOW = 4;

const CategorySection = ({ category, items }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, INITIAL_SHOW);

  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">{category}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {items.length > INITIAL_SHOW && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-gray-200 text-gray-600 text-sm px-6 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default CategorySection;
