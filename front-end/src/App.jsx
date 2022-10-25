import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />
      
      <Outlet />

      <Footer />
    </>
  );
}
