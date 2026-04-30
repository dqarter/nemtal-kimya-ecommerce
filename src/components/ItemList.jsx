import React, { useState, useEffect } from "react";
import { ItemCard } from "./ItemCard";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("/urunler.json")
        .then((res) => {
          if (!res.ok) throw new Error("Ağ yanıt vermedi");
          return res.json();
        })
        .then((data) => {
          setItems(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Veri Hatası:", err);
          setError(true);
          setLoading(false);
        });
    }, 600);
  }, []);

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center mt-20 text-center px-5">
        <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
          Sunucu Bağlantı Hatası
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Okul ürünleri kataloğuna şu an ulaşılamıyor. Lütfen sayfayı yenileyin.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-5 mt-8">
        <div className="flex gap-3 mb-8 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-28 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="w-full h-105 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse shadow-sm"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  const categories = ["Tümü", ...new Set(items.map((item) => item.category))];

  const filteredItems = items.filter((item) => {
    const matchCategory =
      selectedCategory === "Tümü" || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.baseId.includes(searchTerm);
    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-5 mt-8">
      {/* ARAMA ÇUBUĞU - Koyu Mod Uyumlu */}
      <div className="mb-8 relative shadow-sm group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-blue-900 dark:group-focus-within:text-blue-400 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Ürün adı veya ürün kodu (Örn: 1912) arayın..."
          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 focus:outline-none focus:border-blue-900 dark:focus:border-blue-500 focus:ring-0 transition-all font-medium text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* KATEGORİ BUTONLARI - Koyu Mod Uyumlu */}
      <div className="flex overflow-x-auto gap-3 mb-8 border-b dark:border-gray-800 pb-6 whitespace-nowrap scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-blue-900 dark:bg-blue-600 text-white shadow-md transform scale-105"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-gray-800 dark:text-gray-300 font-medium">
          <span className="font-bold text-blue-900 dark:text-blue-400">
            {selectedCategory}
          </span>{" "}
          kategorisinde{" "}
          <span className="font-bold text-blue-900 dark:text-blue-400">
            {filteredItems.length}
          </span>{" "}
          sonuç.
        </h3>
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.baseId}
              title={item.title}
              image={item.image}
              category={item.category}
              variants={item.variants}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-2">
            Ürün Bulunamadı
          </h3>
        </div>
      )}
    </div>
  );
};

export default ItemList;
