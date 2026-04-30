import React from 'react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { cart, isOpen, setIsOpen, increaseAmount, decreaseAmount, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.amount), 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={`fixed top-0 right-0 h-full w-full sm:w-400px bg-white z-50 shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        
        <div className="p-6 border-b flex justify-between items-center bg-violet-900 text-white">
          <h2 className="text-xl font-bold">Sepetim ({cart.reduce((total, item) => total + item.amount, 0)})</h2>
          <button onClick={() => setIsOpen(false)} className="text-3xl">&times;</button>
        </div>

        <div className="grow overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Sepetin henüz boş.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                <div className="grow">
                  <h4 className="text-sm font-bold line-clamp-1">{item.title}</h4>
                  <p className="text-violet-900 font-bold">${item.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => decreaseAmount(item.id)} className="bg-gray-200 px-2 rounded">-</button>
                    <span>{item.amount}</span>
                    <button onClick={() => increaseAmount(item.id)} className="bg-gray-200 px-2 rounded">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-500 text-sm hover:underline">Sil</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">Toplam:</span>
            <span className="text-2xl font-extrabold text-violet-900">${totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-violet-900 text-white py-3 rounded-full font-bold hover:bg-violet-800 transition-colors shadow-lg">
            Alışverişi Tamamla
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;