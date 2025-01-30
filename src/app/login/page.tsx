"use client"

import Image from 'next/image';
export default function Login(){
    return (
        <>
        <div className="w-full px-3 flex flex-col lg:flex-row min-h-screen">
            <div className='w-full flex  flex-col items-center justify-center lg:px-6 gap-16 lg:w-1/3'>
            
            <div className="w-full px-2 text-2xl">
                <h1 className="font-semibold  text-[#393636]">Ibuzz</h1>
            </div>


            <div className="w-full flex flex-col ">
                <div className="w-full flex justify-center mb-12">
                    <h1 className="text-4xl font-bold font-roboto text-[#393636]">Sign In</h1>
                </div>

            <div className="flex flex-col gap-6">
                <div className=" flex flex-col gap-1">
                    <h1 className="px-2 text-lg  text-[#393636]">Email</h1>
                    <input type="text" placeholder="Enter Username" className="border-2 rounded-lg py-2 px-2"/>
                </div>
                <div className=" flex flex-col gap-1">
                    <h1 className="px-2  text-lg  text-[#393636]">Password</h1>
                    <input type="text" placeholder="Enter Password" className="border-2 rounded-lg py-2 px-2"/>
                </div>
            </div>
            <span className="mt-1 px-1 text-sm text-blue-500">Esqueceu a senha?</span>

            <button className="w-full mt-6 p-2 rounded-xl bg-black text-white font-semibold">Entrar</button>

            <span className="mt-1 px-2 text-sm text-gray-700">Não tem uma conta? <span className="text-blue-500">Cadastre-se</span></span>

            <div className="w-full flex flex-col items-center mt-8 gap-2">
                <span className=" text-gray-700 font-semibold">Logar Com</span>

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

            <div className='hidden h-screen lg:flex w-2/3  flex-col bg-black justify-center 
            items-center'>
            <h1 className='text-white text-4xl font-bold border-2'>Bem Vindo De Volta!</h1>
            
          
            <p className='text-white mt-2  text-center border-2 px-60'>Agradecemos por estar conosco. Todos os produtos e serviços da Ibuzz estão à sua disposição."</p>

            <button className='border-2 px-10 py-2 text-white rounded-lg mt-6'>Sign Out</button>
            </div>
        </div>
    </>
    )
}