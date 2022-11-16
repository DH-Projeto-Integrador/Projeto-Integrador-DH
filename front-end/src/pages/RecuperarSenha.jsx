import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function RecuperarSenha() {
    const navigation = useNavigate();

    const [email, setEmail] = useState('');

    const doUserResetPassword = async function () {

        const emailValue = email;
    };

    return (

        <div className="flex justify-center items-center h-screen px-4 md:px-0 container m-auto">
            <div className="w-full sm:w-[31.25rem] min-h-96 bg-white border shadow-md rounded-xl flex flex-col justify-center items-center">
                <div className="w-full px-8">
                    <div className="text-center">
                        <h2 className="text-gray-700 text-xl pt-8 font-bold">Recuperar Senha</h2>

                        <form
                            //onSubmit={hundleSubmit}
                            className="pt-6 pb-8 mb-2 flex flex-col gap-4">

                            <input
                                //ref={emailValue}
                                name="email"
                                type="email"
                                placeholder="example@example.com"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />


                            <button
                                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}