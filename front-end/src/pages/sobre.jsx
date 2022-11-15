export function Sobre() {
  return (
    <div className="mx-auto my-14 flex flex-col gap-8">
      <section class="w-full flex justify-center md:max-w-3xl md:m-auto border shadow-md rounded-xl">
        <div class="container p-8">
          <h1 class="text-xl text-center md:text-2xl font-semibold mb-4 md:mb-6">Sobre nós</h1>

          <div class="font-normal text-base mb-6">
            <p class="indent-4 text-justify mb-4">
              O Projeto IFruits nasceu do trabalho em equipe de integrantes da 32°
              turma de Desenvolvimento Web Full Stack da Digital House com foco em forma
              profissionais na área de tecnologia de desenvolvimento web.
            </p>
            <p class="indent-4 text-justify">
              Levando em conta os tempos atuais vivídos no mundo, vemos a necessidade de se
              pensar em conscientização social mais do que nunca. Assim, decidimos levar como
              parámetro para esse projeto os Objetivos de Desenvolvimento sustentáveis da ONU
              (Metas globais), especificamente os 3° primeiros.
            </p>
          </div>
          <div class="flex justify-center flex-wrap gap-4 mb-6">
            <div>
              <img class="rounded w-64 md:w-52" src="images/SDG-1.png" alt="" />
            </div>
            <div>
              <img class="rounded w-64 md:w-52" src="images/SDG-2.png" alt="" />
            </div>
            <div>
              <img class="rounded w-64 md:w-52" src="images/SDG-3.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section class="w-full flex justify-center md:max-w-3xl md:m-auto border shadow-md rounded-xl">
        <div class="container p-8">
          <div>
            <p class="indent-4 text-justify">
              O IFruits tem como objetivo viabilizar uma plataforma gratuita para feirantes
              e vendedores de Hortifruti autonomos que tem a necessidade de um site prático,
              simples, com foco exclusivamente nos produtos que eles podem oferecer, de fácil
              uso e acesso.
            </p>
          </div>

          <div class="grid gap-4">
            <div class="bg-white rounded p-4 grid sm:grid-cols-2 gap-4 items-center">
              <img src="images/missao.png" alt="" />
              <div class="my-4">
                <h2 class="text-yellow-500 text-xl font-medium text-center mb-2">Misão</h2>
                <p class="text-yellow-800 indent-4 text-justify">
                  Promover facilidades no adquirimento de produtos saudáveis, com praticidade e responsabilidade social.
                </p>
              </div>
            </div>
            <div class="bg-white rounded p-4 grid sm:grid-cols-2 gap-4 items-center">
              <img src="images/visao.png" alt="" />
              <div class="my-4">
                <h2 class="text-violet-500 text-xl font-medium text-center mb-2">Visão</h2>
                <p class="text-violet-800 indent-4 text-justify">
                  Visamos conectar pessoas, fazer um mundo mais próximo e unido, onde podemos
                  pensar em conjunto e criar soluções inovadoras para os desafios e dificuldades
                  do mundo moderno.
                </p>
              </div>
            </div>
            <div class="bg-white rounded p-4 grid sm:grid-cols-2 gap-4 items-center">
              <img src="images/valores.png" alt="" />

              <div class="my-4">
                <h2 class="text-pink-500 text-xl font-medium text-center mb-2">Valores</h2>
                <p class="text-pink-800 indent-4 text-justify">
                  Responsabilidade social, tecnologia sustentável, cooperação e soluções rapidas
                  com alta performace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}