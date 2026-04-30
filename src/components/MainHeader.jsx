import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const MainHeader = () => {
  const { cart, setIsOpen } = useCart();

  // 1. ÇÖZÜM: State'i başlatırken kontrolü yapıyoruz. (Fazladan render'ı önler)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Sayfa ilk yüklendiğinde kullanıcının son temasını kontrol et ve state'e doğrudan yaz
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  // 2. DOM YÖNETİMİ: State her değiştiğinde HTML'e 'dark' class'ını ekle/çıkar
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // isDarkMode bağımlılığı eklendi

  // 3. BUTON TETİKLEYİCİ: Gece/Gündüz modunu değiştirir
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.theme = newMode ? "dark" : "light";
      return newMode;
    });
  };

  const totalItems = cart.reduce((total, item) => total + item.amount, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        {/* Logo ve Okul İsmi - K12 Yönlendirmeli */}
        <a
          href="https://necmettinerbakanmtal43.meb.k12.tr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 cursor-pointer group/logo"
        >
          <img
            src="/logo.png"
            alt="NE-MTAL Logo"
            className="h-12 w-auto object-contain drop-shadow-sm transition-transform group-hover/logo:scale-105"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-xl font-black text-blue-900 dark:text-blue-400 tracking-tighter leading-none transition-colors group-hover/logo:text-blue-700 dark:group-hover/logo:text-blue-300">
              NE-MTAL
            </span>
            <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-0.5 transition-colors">
              Kimya
            </span>
          </div>
        </a>

        {/* Sağ Menü Navigasyonu */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <a
            href="/"
            className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors hidden sm:block"
          >
            Anasayfa
          </a>

          {/* Gece / Gündüz Teması Değiştirme Butonu */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Temayı Değiştir"
          >
            {isDarkMode ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </button>

          {/* Sepet Butonu */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-blue-900 dark:bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-800 dark:hover:bg-blue-500 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="hidden sm:inline">Sepetim</span>

            {/* Dinamik Sepet Ürün Sayısı Rozeti */}
            {totalItems > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-bounce">
                {totalItems}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
