import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CartProvider } from "./providers/CartContext";

import "./styles/global.css";

export function App() {
  return (
    <>
      <CartProvider>
        <Header />
          <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
}
