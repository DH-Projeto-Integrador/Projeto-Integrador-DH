import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Cadastro } from "../pages/Cadastro";
import { Home } from "../pages/Home";
import { Produto } from "../pages/Produto";
import { Carrinho } from "../pages/Carrinho";
import { Login } from "../pages/Login";
import { RecuperarSenha } from "../pages/RecuperarSenha";
import { PerfilUsuario } from "../pages/PerfilUsuario";


const Routers = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true,
        element: <Home /> 
      },  
      {
        path: ":idProduct",
        element: <Produto />,
      },
      {
        path: "carrinho",
        element: <Carrinho />,
      },
      {
        path: "perfilusuario",
        element: <PerfilUsuario />,
      },
      {
        path: "recuperarsenha",
        element: <RecuperarSenha />,
      },
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
