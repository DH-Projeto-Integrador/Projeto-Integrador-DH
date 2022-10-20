import { Link } from "react-router-dom";

export function Cadastro() {
  return (
    <div className="flex justify-center items-center py-8 px-4 md:px-0">
      <div className="container m-auto">
        <div class="w-full bg-white border shadow-md rounded-xl">
          <div className="max-w-xl m-auto">
            <div className="text-center">
              <h2 className="text-gray-700 text-xl pt-8">Cadastro</h2>
              <p className="text-gray-500">
                Já possui uma conta?{" "}
                <Link to="/login" className="text-blue-400">
                  Login
                </Link>
              </p>
            </div>

            <form class="px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Nome Completo"
                />
              </div>

              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="number"
                  placeholder="CPF"
                />
              </div>

              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Endereço"
                />
              </div>

              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="email"
                  placeholder="email"
                />
              </div>

              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                />
              </div>

              <div class="mb-6">
                <div class="md:w-1/3"></div>
                <label class="md:w-2/3 text-gray-500 font-bold flex items-center">
                  <input class="mr-2 leading-tight" type="checkbox" />
                  <span class="text-sm">
                    Li e concordo com os termos de serviço.
                  </span>
                </label>
              </div>

              <div class="flex items-center justify-center">
                <button
                  class="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Acessar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
