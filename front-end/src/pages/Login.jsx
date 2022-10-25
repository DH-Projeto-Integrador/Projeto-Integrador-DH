import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="flex justify-center items-center h-screen px-4 md:px-0 container m-auto">
      <div className="w-full sm:w-[31.25rem] min-h-96 bg-white border shadow-md rounded-xl flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="text-center">
            <h2 className="text-gray-700 text-xl pt-8 font-bold">Login</h2>
            <span className="text-gray-500 pr-1">Não possui conta?</span>
            <span>
              <Link to="/cadastro" className="text-blue-400">
                Cadastrar
              </Link>
            </span>
          </div>

          <form className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="example@example.com"
              />
            </div>

            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="password"
              />
            </div>

            <div className="mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 text-gray-500 font-bold flex items-center">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Lembrar de mim.</span>
              </label>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Acessar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
