import React from "react";
import MainHeader from "./components/MainHeader";
import ItemList from "./components/ItemList";
import CartSidebar from "./components/CartSidebar";
import Toast from "./components/Toast"; // Bildirimi içeri aktardık
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import CartDrawer from "./components/CartDrawer";
import HeroBanner from "./components/HeroBanner";

function App() {
  return (
    <CartProvider>
      <Toaster position="bottom-right" />
      <MainHeader />
      <HeroBanner/>
      <CartDrawer /> {/* YENİ: Sepet çekmecesi her zaman tetikte bekliyor */}
      <ItemList />
    </CartProvider>
  );
}

export default App;
