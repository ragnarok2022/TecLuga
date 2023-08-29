const CartaoLogin = () => {
  
  return (
    <div class="flex flex-col " >
      <div class="flex items-center  justify-center h-screen bg-gray-100">
        
        <div class=" login-card border-[px] in border-gray-300 shadow-lg justify-center w-auto p-10 inset-0 rounded-lg py-28 items-center ">
        <p class="text-3xl text-center text-black font-bold py-5 ">Faça login</p>
        <div>
          <p class="text-black  flex pl-2 font-bold" >Login</p>
          <input type="Login"placeholder="Email"class="border-2 border-black w-full bg-gray-100 rounded-md px-4 py-2 mb-4" />
          </div>
          <div>
          <p class="text-black flex pl-2 font-bold" >Senha</p>
          <input type="Login"placeholder="Senha"class="border-2 border-black w-full bg-gray-100 rounded-md px-4 py-2 mb-4" /></div>
          <div><button class="text-blue-500 text-xs px-28 ">Esqueci a senha</button></div>
          <br /><br />
          <div> <p class="text-black text-center font-bold" >Não tem cadastro?</p> 
            </div>
            <div>
              <button class="text-blue-500 px-28">Cadastre-se</button>

              
            </div>
        </div>
      </div>
    </div>

  )

}

