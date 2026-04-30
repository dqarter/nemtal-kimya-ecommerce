import React from 'react';
import { useCart } from '../context/CartContext';

const Toast = () => {
  const { toasts } = useCart();

  return (
    // Ana kapsayıcı sağ alta sabitlenir, içindeki elemanlar flex-col ile alt alta dizilir
    <div className="fixed bottom-10 right-10 z-100 flex flex-col gap-3 pointer-events-none">
      
      {/* Kuyruktaki her bir bildirim için yeni bir kutu oluşturuyoruz */}
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          // animate-bounce yerine daha şık bir giriş animasyonu (isteğe bağlı Tailwind eklentisi gerektirebilir, standart gölge ve renk iş görür)
          className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 transition-all duration-300 transform translate-y-0 opacity-100"
        >
          <i className="fa fa-check-circle text-xl"></i>
          <span className="font-bold text-sm max-w-250px truncate">{toast.message}</span>
        </div>
      ))}
      
    </div>
  );
};

export default Toast;