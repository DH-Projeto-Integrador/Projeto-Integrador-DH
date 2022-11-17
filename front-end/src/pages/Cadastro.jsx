import Axios from 'axios';
import { useCallback, useRef } from "react";
import { Link, redirect } from "react-router-dom";

export function Cadastro() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const cpfRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const newUser = {
      name: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      cpf: cpfRef.current.value,
      full_address: addressRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: 123456789
    };

    Axios.post("http://localhost:3333/usuario", newUser)
      .then((response) => {
        localStorage.setItem("token", response.data)
        // redirect('/perfil')
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="flex justify-center items-center h-screen px-4 md:px-0 container m-auto">
      <div className="w-full sm:w-[31.25rem] min-h-96 bg-white border shadow-md rounded-xl flex flex-col justify-center items-center">
        <div className="w-full px-8">
          <div className="text-center">
            <h2 className="text-gray-700 text-xl pt-8 font-bold">Cadastro</h2>
            <span className="text-gray-500 pr-1">Já possui conta?</span>
            <span>
              <Link to="/login" className="text-blue-400">
                Login
              </Link>
            </span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="pt-6 pb-8 mb-2 flex flex-col gap-4"
          >
            <input
              ref={firstNameRef}
              name="firstname"
              type="text"
              placeholder="first name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <input
              ref={lastNameRef}
              name="lastName"
              type="text"
              placeholder="last name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <input
              ref={cpfRef}
              name="cpf"
              type="number"
              placeholder="cpf"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <input
              ref={addressRef}
              name="address"
              type="text"
              placeholder="endereço"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

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

            <button
              className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Acessar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
