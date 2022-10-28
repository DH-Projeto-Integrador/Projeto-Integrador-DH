import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CardProvider } from "./providers/card.provider";

import "./styles/global.css";

export function App() {
  return (
    <>
      <CardProvider>
        <Header />
        <Outlet />
        <Footer />
      </CardProvider>
    </>
  );
}
