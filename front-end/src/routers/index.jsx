import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Cadastro } from "../pages/Cadastro";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

const Routers = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "cadastro",
    element: <Cadastro />,
  },
];

export const Router = createBrowserRouter(Routers);
