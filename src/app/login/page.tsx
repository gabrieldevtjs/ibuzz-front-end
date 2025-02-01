"use client"

import Image from 'next/image';
export default function Login(){
    return (
        <>
<div className='h-screen w-full flex flex-col lg:flex-row'>
    {/* Contêiner principal, ocupando toda a altura da tela e se ajustando para colunas em telas pequenas e linhas em telas grandes */}
    <div className='h-full w-full flex flex-col px-6 py-4 lg:w-1/3'>
        
        {/* Título principal */}
                  <div className="flex gap-2 items-center">
                      <Image 
                        src="/icons/iconapple.png" 
                        width={18} 
                        height={20} 
                        alt="icon apple" 
                        className="object-contain"
                        quality={100}
                        priority
                      />
                      <h1 className="text-xl text-[#393636]">Ibuzz</h1>
                    </div>
        
        {/* Contêiner que vai ocupar o espaço restante */}
        <div className='flex flex-col flex-1 justify-center items-center'>
            
            {/* Formulário de login */}
            <div className="w-full flex flex-col">
                
                {/* Título do formulário */}
                <div className="w-full flex justify-center mb-12">
                    <h1 className="text-4xl font-bold font-roboto text-[#393636]">Sign In</h1>
                </div>

                {/* Campos de entrada */}
                <div className="flex flex-col gap-6">
                    
                    {/* Campo de Email */}
                    <div className="flex flex-col gap-1">
                        <div className='flex items-center pl-2'>
                            <Image src="/icons/carta.png" alt="Email" width={25} height={40} className='w-[20px] h-[20px]' />
                            <h1 className="px-2 text-lg text-[#393636]">Email</h1>
                        </div>
                        <input type="text" placeholder="Enter Username" className="border-2 rounded-lg py-2 px-2"/>
                    </div>

                    {/* Campo de Senha */}
                    <div className="flex flex-col gap-1">
                        <div className='flex items-center pl-1'>
                            <Image src="/icons/cad.png" alt="Password" width={25} height={40} className='w-[20px] h-[20px]' />
                            <h1 className="px-2 text-lg text-[#393636]">Password</h1>
                        </div>
                        <input type="text" placeholder="Enter Password" className="border-2 rounded-lg py-2 px-2" />
                    </div>

                </div>

                {/* Link para recuperação de senha */}
                <span className="mt-1 px-1 text-sm text-blue-500">Esqueceu a senha?</span>

                {/* Botão de Login */}
                <button className="w-full mt-6 p-2 rounded-xl bg-black text-white font-semibold">Entrar</button>

                {/* Texto para redirecionar a página de cadastro */}
                <span className="mt-1 px-2 text-sm text-gray-700">
                    Não tem uma conta? <span className="text-blue-500">Cadastre-se</span>
                </span>

                {/* Seção de login com redes sociais */}
                <div className="w-full flex flex-col items-center mt-8 gap-2">
                    <span className="text-gray-700 font-semibold">Logar Com</span>

                    {/* Ícones de redes sociais */}
                    <div className="flex gap-6 items-center justify-center">
                        <a href="https://github.com/gabrieldevtjs" target="_blank">
                            <Image src="/icons/google.png" alt="GitHub" width={30} height={20} />
                        </a>

                        <a href="https://www.linkedin.com/in/jos%C3%A9-gabriel-8901a7344/" target="_blank">
                            <Image src="/icons/facebook.png" alt="LinkedIn" width={30} height={20} />
                        </a>

                        <a href="https://www.instagram.com/gabrieltj.dev?igsh=NndhZHJjMDF0MHNr&utm_source=qr" target="_blank">
                            <Image src="/icons/apple.png" alt="Instagram" width={30} height={20} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>

    {/* Seção para telas grandes (lg) com fundo preto, exibindo uma mensagem de boas-vindas */}
    <div className="hidden h-full lg:flex w-2/3 flex-col bg-black justify-center items-center">
        
        {/* Mensagem de boas-vindas */}
        <h1 className="text-white text-4xl font-bold">Bem Vindo De Volta!</h1>
        
        {/* Texto explicativo */}
        <p className="text-white mt-2 text-center px-60">
            Agradecemos por estar conosco. Todos os produtos e serviços da Ibuzz estão à sua disposição.
        </p>

        {/* Botão de "Sign Out" para deslogar */}
        <button className="border-2 px-10 py-2 text-white rounded-lg mt-6">
            Sign Out
        </button>
    </div>
</div>
        </>
    )
}