import React from 'react';

const HeroBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-6 mb-2">
      <div className="bg-linear-to-r from-blue-900 to-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        
        {/* Arka Plan Dekoratif Efektleri */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-40 -mb-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <span className="bg-white/20 text-blue-50 text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase backdrop-blur-sm border border-white/20">
            NE-MTAL Döner Sermaye İşletmesi
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-5 mb-4 leading-tight">
            Temizlikte Okul <br className="hidden sm:block"/> Güvencesi ve Kalitesi
          </h1>
          <p className="text-blue-100 max-w-xl text-sm sm:text-base leading-relaxed font-medium">
            Necmettin Erbakan MTAL Kimya Teknolojisi alanı öğrencileri ve öğretmenleri tarafından, endüstriyel standartlarda ve tam hijyen koşullarında üretilen profesyonel temizlik ürünleri.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;