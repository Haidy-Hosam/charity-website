import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { products } from "./productsData";
import PurchaseProduct from "./PurchaseProduct"; 

const ProductCard = ({ product, onBuyClick }) => {
const history = useHistory();
  // دي لما ادوس علي الكارد نفسه
const handleCardClick = () => {
    history.push(`/product/${product.id}`);
  };
  // دي لما ادوس علي اشتري الان
  const handleBuyClick = (e) => {
    e.stopPropagation(); //  تمنع الكارد إنه يحس بالدوسة دي
    onBuyClick();
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer group"
    >
      <div className="h-48 bg-[#F5F7F9] flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col items-center flex-grow">
        <div className="w-full flex justify-between items-center mb-2">
          <h3 className="font-bold text-gray-900 text-base">
            {product.title}
          </h3>
          <div className="flex items-center gap-1 font-bold text-gray-800 text-lg">
            <span>{product.price}</span>
            <span className="text-sm font-normal text-gray-600">
              {product.currency}
            </span>
          </div>
        </div>

        <p className="text-[10px] text-gray-400 text-center leading-relaxed mb-4">
          نص تجريبي .. نص تجريبي .. نص تجريبي
          <br />
          نص تجريبي .. نص تجريبي .. نص تجريبي
        </p>

        <div className="mt-auto">
          <button 
            onClick={handleBuyClick} 
            className="bg-[#72B7C4] hover:bg-[#5faab8] text-white text-sm font-bold py-2 px-8 rounded-full transition-colors duration-200"
          >
            اشتري الآن
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
const ProductGrid = ({ limit }) => {
  const productsToShow = limit ? products.slice(0, limit) : products;
  const columnsClass = limit === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="w-full bg-[#FFFFFF] p-8 font-sans" dir="rtl">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 ${columnsClass} gap-6`}
      >
        {productsToShow.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onBuyClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* عرض المودال */}
      {selectedProduct && (
        <PurchaseProduct
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductGrid;