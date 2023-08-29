const cadastro = () => {

  return (
    <div class="flex flex-col" >
      <div class="flex flex-col bg-white h-screen p-4 rounded-md shadow-md justify-items-center border border-gray-300  ">
        <p class="text-3xl text-center text-black font-bold py-5 ">Cadastre-se</p> <br />
        <div class="bg-blue-300 -2 flex flex-col ">
          <h1 class="from-bold text-black py-2.5 font-bold p-2 pl-12" >Dados Pessoais</h1>

        </div>
        <div><h1 class="text-black flex pl-12 font-bold">Nome</h1>
          <input class="border-2 border-black w-11/12 ml-12 rounded-md" type="text"></input></div>

        <div><h1 class="text-black pl-12 font-bold">E-mail</h1>
          <input class="border-2 border-black w-11/12 ml-12 rounded-md" type="text"></input></div>

        <div class="flex gr ">
          <div><h1 class="text-black pl-12 font-bold">Telefone 1</h1>
            <input class="border-2 border-black inline-block ml-12 rounded-md" type="text"></input></div>

          <div><h1 class="text-black pl-12 font-bold">Telefone 2</h1>
            <input class="border-2 border-black inline-block ml-12 rounded-md" type="text"></input></div>
        </div>

        <div class="flex gr ">
          <div><h1 class="text-black pl-12 font-bold">Data de Nascimento</h1>
            <input class="border-2 border-black inline-block ml-12 rounded-md" type="text"></input></div>

          <div><h1 class="text-black pl-12 font-bold">CPF</h1>
            <input class="border-2 border-black inline-block ml-12 rounded-md" type="text"></input></div>

          <div><h1 class="text-black pl-12 font-bold">RG</h1>
            <input class="border-2 border-black inline-block ml-12 rounded-md" type="text"></input></div>
        </div>
        <br />

        <div class="bg-blue-300 -2 flex flex-col ">
          <h1 class="from-bold text-black py-2.5 font-bold p-2 pl-12" >Enderoço</h1>
        </div>

        <div class="flax grid grid-cols-2 ">

          <div><h1 class="text-black flex pl-12 font-bold">Nome</h1>
            <input class="border-2 border-black ml-12 rounded-md" type="text"></input></div>
          <button class="text-blue-600 mr-auto"><i>Busca CEP</i></button>
        </div>

        <div class="flax grid grid-cols-2">
          <div>
            <div><h1 class="text-black flex pl-12 font-bold">Lagradouro</h1>
              <input class="border-2 border-black inline-block w-11/12 ml-12 rounded-md" type="text"></input></div>
          </div>

          <div class="mr-1"><h1 class="text-black pl-12 font-bold">Nº</h1>
            <input class="border-2 border-black w-8 inline-block mr-4 ml-12 rounded-md" type="text"></input></div>
        </div>
        <div class="flex gr ">
          <div><h1 class="text-black pl-12 font-bold">Bairro</h1>
            <input class="border-2 border-black inline-block ml-12 rounded-md" type="text"></input></div>

          <div><h1 class="text-black pl-12 font-bold">Cidade</h1>
            <input class="border-2 border-black inline-block ml-12 rounded-md" type="text"></input></div>

          <div><h1 class="text-black pl-12 font-bold">UF</h1>
            <input class="border-2 border-black inline-block w-8 ml-12 rounded-md" type="text"></input></div>
        </div>
        <div><h1 class="text-black flex pl-12 font-bold">Complemento</h1>
          <input class="border-2 border-black inline-block w-7/12 ml-12 rounded-md" type="text"></input></div> <br />

        <div class="bg-blue-300 -2 flex flex-col ">
          <h1 class="from-bold text-black py-2.5 font-bold p-2 pl-12" >Login</h1>
        </div>

        <div><h1 class="text-black flex pl-12 font-bold">Confirmação do E-mail</h1>
          <input class="border-2 border-black w-8/12 ml-12 rounded-md" type="text"></input></div>

        <div><h1 class="text-black flex pl-12 font-bold">Senha</h1>
          <input class="border-2 border-black ml-12 rounded-md" type="text"></input></div>

        <div><h1 class="text-black flex pl-12 font-bold">Confirmação da Senha</h1>
          <input class="border-2 border-black ml-12 rounded-md" type="text"></input></div> <br />
        <div class="flex justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-sm">Cadastrar</button>
        </div>
      </div>
    </div>

  )
}





   


