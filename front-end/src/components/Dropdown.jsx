import { Link } from "react-router-dom";

export function DropdownSignIn() {
  return (
    <div
      className="absolute -right-3 z-10 mt-3 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1" role="none">
        {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
        <Link
          to="login"
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-200"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
        >
          Entrar
        </Link>
        <Link
          to="cadastro"
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-200"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-1"
        >
          Cadastro
        </Link>
      </div>
    </div>
  );
}

export function DropdownSignOut() {
  return (
    <div
      className="absolute -right-3 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1" role="none">
        {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
        <Link
          to="perfilusuario"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-2"
        >
          Perfil
        </Link>
        <form method="POST" action="#" role="none">
          <button
            type="submit"
            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-3"
          >
            Sair
          </button>
        </form>
      </div>
    </div>
  );
}
