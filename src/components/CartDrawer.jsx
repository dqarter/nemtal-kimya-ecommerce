import React from "react";
import { useCart } from "../context/CartContext";

const CartDrawer = () => {
  const {
    cart,
    isOpen,
    setIsOpen,
    increaseAmount,
    decreaseAmount,
    removeFromCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0,
  );

  // WHATSAPP SİPARİŞ MANTIĞI
  const handleWhatsAppOrder = () => {
    const phoneNumber = "905419610916"; // Buraya okulun sipariş numarasını gir Akira
    let message = `*NE-MTAL Kimya Ürünleri Siparişi*%0A---------------------------%0A`;

    cart.forEach((item) => {
      message += `• ${item.amount}x ${item.title} - ${item.price * item.amount} TL%0A`;
    });

    message += `---------------------------%0A*Toplam Tutar: ${totalPrice} TL*%0A%0ASiparişi onaylıyor musunuz?`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Arka Plan Bulanıklaştırma (Overlay) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sağdan Kayan Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-xl font-bold text-blue-900">
              Sepetim ({cart.length})
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="grow overflow-y-auto pr-2 scrollbar-hide">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-6 opacity-70 mt-10">
                <svg
                  className="w-32 h-32 text-gray-300 mb-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  Sepetiniz Boş
                </h3>
                <p className="text-sm text-gray-400">
                  Görünüşe göre henüz bir ürün eklemediniz. Okulumuzun kaliteli
                  kimya ürünlerini incelemeye hemen başlayabilirsiniz.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 mb-4 bg-gray-50 p-3 rounded-lg border border-gray-100"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain mix-blend-multiply"
                  />
                  <div className="grow">
                    <h4 className="text-xs font-bold leading-tight line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-sm font-extrabold text-blue-900 mt-1">
                      {item.price} ₺
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border rounded bg-white">
                        <button
                          onClick={() => decreaseAmount(item.id)}
                          className="px-2 py-0.5 hover:bg-gray-100 text-blue-900 font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold">
                          {item.amount}
                        </span>
                        <button
                          onClick={() => increaseAmount(item.id)}
                          className="px-2 py-0.5 hover:bg-gray-100 text-blue-900 font-bold"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t pt-6 mt-4">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Toplam:</span>
              <span className="text-blue-900">{totalPrice} ₺</span>
            </div>
            <button
              disabled={cart.length === 0}
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Siparişi WhatsApp ile Tamamla
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
