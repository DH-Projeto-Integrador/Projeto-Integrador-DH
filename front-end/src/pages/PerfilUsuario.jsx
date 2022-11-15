export function PerfilUsuario(){
    return (
    <>
    <main className="w-full flex justify-center">
      <div className="container p-4 my-4 lg:max-w-4xl">
        <h3 className="text-xl font-semibold mb-4">Perfil</h3>

        <div className="rounded-lg shadow-lg p-8">
          <div className="mt-4 grid gap-4 items-center md:grid-cols-3">
            <div className="grid justify-center col-span-2 md:col-span-1">
              <div>
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-full w-24" alt="Avatar" />
              </div>
    
              <span className="block text-lg font-semibold text-center mt-2">Vitor</span>
            </div>

            <div className="flex gap-4 flex-wrap col-span-2">
              <div>
                <span className="text-md font-medium">Email</span>
                <p className="text-base font-normal">felipesantos@gmail.com</p>
              </div>

              <div>
                <span className="text-md font-medium">CEP</span>
                <p className="text-base font-normal">123.123.123-12</p>
              </div>

              <div>
                <span className="text-md font-medium">Telefone</span>
                <p className="text-base font-normal">(87) 9 99663-8722</p>
              </div>

              <div>
                <span className="text-md font-medium">Endereço</span>
                <p className="text-base font-normal">Rua Frei Damião, São Paulo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <section className="w-full flex justify-center">
      <div className="container p-4 lg:max-w-4xl">
        <h3 className="text-xl font-semibold mb-4">Historico</h3>

        <div className="rounded-lg shadow-lg p-4">
          <div className="flex justify-center mt-4 p-4 flex-wrap gap-4">
            <div className="flex flex-col items-center w-64 rounded-lg bg-white border p-2">
              <img className="w-48 h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
              
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Maçã</h5>
                <p className="text-gray-600 text-xs inline">Valor: $12,50</p>
                <p className="text-gray-600 text-xs inline">Quantidade: 6</p>
                <p className="text-gray-600 text-xs inline">Pedido: 03/12/2022</p>
              </div>
            </div>

            <div className="flex flex-col items-center w-64 rounded-lg bg-white border p-2">
              <img className="w-48 h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
              
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Maçã</h5>
                <p className="text-gray-600 text-xs inline">Valor: $12,50</p>
                <p className="text-gray-600 text-xs inline">Quantidade: 6</p>
                <p className="text-gray-600 text-xs inline">Pedido: 03/12/2022</p>
              </div>
            </div>

            <div className="flex flex-col items-center w-64 rounded-lg bg-white border p-2">
              <img className="w-48 h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
              
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Maçã</h5>
                <p className="text-gray-600 text-xs inline">Valor: $12,50</p>
                <p className="text-gray-600 text-xs inline">Quantidade: 6</p>
                <p className="text-gray-600 text-xs inline">Pedido: 03/12/2022</p>
              </div>
            </div>

            <div className="flex flex-col items-center w-64 rounded-lg bg-white border p-2">
              <img className="w-48 h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
              
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Maçã</h5>
                <p className="text-gray-600 text-xs inline">Valor: $12,50</p>
                <p className="text-gray-600 text-xs inline">Quantidade: 6</p>
                <p className="text-gray-600 text-xs inline">Pedido: 03/12/2022</p>
              </div>
            </div>

            <div className="flex flex-col items-center w-64 rounded-lg bg-white border p-2">
              <img className="w-48 h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
              
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Maçã</h5>
                <p className="text-gray-600 text-xs inline">Valor: $12,50</p>
                <p className="text-gray-600 text-xs inline">Quantidade: 6</p>
                <p className="text-gray-600 text-xs inline">Pedido: 03/12/2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}