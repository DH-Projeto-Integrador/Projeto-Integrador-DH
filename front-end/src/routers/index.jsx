import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Home } from "../pages/Home";
import { Produto } from "../pages/Produto";
import { Carrinho } from "../pages/Carrinho";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Cadastro } from "../pages/Cadastro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "produto",
        element: <Produto />,
      },
      {
        path: "carrinho",
        element: <Carrinho />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
    ],
  },
]);

export default router;
