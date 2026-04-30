import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export const ItemCard = ({ title, category, image, variants }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (e) => {
    if (e) e.stopPropagation();
    addToCart({
      id: selectedVariant.id,
      title: `${title} (${selectedVariant.weight})`,
      price: selectedVariant.price,
      image: image,
      category: category,
    });
  };

  return (
    <>
      {/* --- ANA ÜRÜN KARTI --- */}
      <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 relative group">
        <div
          className="h-56 w-full bg-gray-50 dark:bg-gray-900/50 flex justify-center items-center p-6 cursor-pointer relative overflow-hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={image}
            alt={title}
            className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-blue-900/10 dark:bg-blue-400/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-400 font-extrabold text-sm py-2 px-5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Hızlı Bakış
            </span>
          </div>
        </div>

        <div className="p-4 flex flex-col grow">
          <h2
            className="text-sm font-extrabold text-black dark:text-gray-100 line-clamp-2 mb-1"
            title={title}
          >
            {title}
          </h2>
          <span className="text-xs font-bold text-blue-800 dark:text-blue-400 capitalize mb-3">
            {category}
          </span>

          <div className="flex flex-wrap gap-2 mb-4">
            {variants.map((v) => (
              <button
                key={v.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVariant(v);
                }}
                className={`text-xs px-2 py-1 rounded font-bold transition-all duration-200 border ${
                  selectedVariant.id === v.id
                    ? "bg-blue-900 dark:bg-blue-600 text-white border-blue-900 dark:border-blue-600 shadow-sm"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-900 dark:hover:border-blue-400 dark:hover:text-blue-400"
                }`}
              >
                {v.weight}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-end mt-auto">
            <span className="text-lg font-extrabold text-blue-900 dark:text-blue-400">
              {selectedVariant.price} ₺
            </span>
          </div>
        </div>

        <div className="px-4 pb-4">
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-900 dark:bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-800 dark:hover:bg-blue-500 transition-colors"
          >
            Sepete Ekle
          </button>
        </div>
      </div>

      {/* --- ÜRÜN DETAY MODALI (QUICK VIEW) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row z-10 transform transition-all animate-fade-in-up">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-600 dark:hover:text-red-400 text-gray-600 dark:text-gray-300 rounded-full p-2 transition-colors z-20"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="md:w-1/2 bg-gray-50 dark:bg-gray-900/50 flex justify-center items-center p-10 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700 min-h-75">
              <img
                src={image}
                alt={title}
                className="max-h-80 object-contain mix-blend-multiply drop-shadow-xl"
              />
            </div>

            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                {category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                {title}
              </h2>

              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6 shadow-sm">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-amber-500 dark:text-amber-400 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="text-sm font-bold text-amber-900 dark:text-amber-300">
                      Güvenlik Uyarıları
                    </h4>
                    <p className="text-xs text-amber-700 dark:text-amber-200/80 mt-1 leading-relaxed">
                      Endüstriyel sınıf kimyasal üründür. Lütfen çocukların
                      ulaşamayacağı serin ve kuru yerlerde saklayınız. Göz ve
                      cilt ile doğrudan temasından kaçınınız.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                  Ambalaj / Gramaj Seçenekleri:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 rounded-lg font-bold transition-all duration-200 border-2 ${
                        selectedVariant.id === v.id
                          ? "bg-blue-900 dark:bg-blue-600 text-white border-blue-900 dark:border-blue-600 shadow-md"
                          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-900 dark:hover:border-blue-400 dark:hover:text-blue-400"
                      }`}
                    >
                      {v.weight}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto border-t border-gray-100 dark:border-gray-700 pt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                    Toplam Tutar
                  </p>
                  <span className="text-3xl font-black text-blue-900 dark:text-blue-400">
                    {selectedVariant.price} ₺
                  </span>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
