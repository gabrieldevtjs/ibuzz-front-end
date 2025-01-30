"use client"

import Image from 'next/image';
export default function Login(){
    return (
        <>
<div className='h-screen w-full flex flex-col lg:flex-row'>
    {/* Contêiner principal, ocupando toda a altura da tela e se ajustando para colunas em telas pequenas e linhas em telas grandes */}
    <div className='h-full w-full flex flex-col px-6 py-4 lg:w-1/3'>
        
        {/* Título principal */}
        <div className='text-2xl font-semibold text-[#393636]'>
            Ibuzz
        </div>
        
        {/* Contêiner que vai ocupar o espaço restante */}
        <div className='flex flex-col flex-1 justify-center items-center'>
            
            {/* Formulário de login */}
            <div className="w-full flex flex-col">
                
                {/* Título do formulário */}
                <div className="w-full flex justify-center mb-12">
                    <h1 className="text-4xl font-bold font-roboto text-[#393636]">Sign Out</h1>
                </div>

                {/* Campos de entrada */}
                <div className="flex flex-col gap-6">
                    
                    {/* Campo de Email */}
                    <div className="flex flex-col gap-1">
                        <div className='flex items-center pl-2'>
                            <Image src="/icons/carta.png" alt="Email" width={25} height={40} className='w-[20px] h-[20px]' />
                            <h1 className="px-2 text-lg text-[#393636]">Username</h1>
                        </div>
                        <input type="text" placeholder="Enter Username" className="border-2 rounded-lg py-2 px-2" />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        <div className='flex items-center pl-2'>
                            <Image src="/icons/carta.png" alt="Email" width={25} height={40} className='w-[20px] h-[20px]' />
                            <h1 className="px-2 text-lg text-[#393636]">Email</h1>
                        </div>
                        <input type="text" placeholder="Enter Username" className="border-2 rounded-lg py-2 px-2" />
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

               

                {/* Botão de Login */}
                <button className="w-full mt-6 p-2 rounded-xl bg-black text-white font-semibold">Cadastrar</button>

                {/* Texto para redirecionar a página de cadastro */}
                <div className='flex w-full justify-center'>
                <span className="mt-1 px-2 text-sm text-gray-700">
                    Já tem uma conta? <span className="text-blue-500">Faça Login</span>
                </span>
                </div>

                
            </div>
        </div>
    </div>

    {/* Seção para telas grandes (lg) com fundo preto, exibindo uma mensagem de boas-vindas */}
    <div className="hidden h-full lg:flex w-2/3 flex-col bg-black justify-center items-center">
        
        {/* Mensagem de boas-vindas */}
        <h1 className="text-white text-4xl font-bold">Crie Sua Conta Na Ibuzz!</h1>
        
        {/* Texto explicativo */}
        <p className="text-white mt-2 text-center px-60">
        Cadastre-se para acessar produtos exclusivos e uma experiência personalizada.
        </p>

        {/* Botão de "Sign Out" para deslogar */}
        <button className="border-2 px-10 py-2 text-white rounded-lg mt-6">
            Sign In
        </button>
    </div>
</div>
        </>
    )
}