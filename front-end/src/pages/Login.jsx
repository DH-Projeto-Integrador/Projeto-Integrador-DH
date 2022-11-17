import { Link } from "react-router-dom";
import Axios from 'axios'
import { useCallback, useRef } from "react";

export function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const login = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    Axios.post("http://localhost:3333/auth", login)
      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data)
      })
      .catch((error) => console.log(error)
      );
  });

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

          <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-2 flex flex-col gap-4">
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="example@example.com"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <input
              ref={passwordRef}
              name="password"
              type="password"
              placeholder="***********"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <div className="flex items-center justify-center">
              <button
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
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
