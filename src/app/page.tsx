"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu (aberto ou fechado)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="min-h-screen w-full font-roboto">
        <div className="px-6">
          {/* Cabeçalho com logo e botão de menu */}
          <div className="flex justify-between items-center pt-6">
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
            {/* Botão de menu (hamburguer) */}
            <button onClick={toggleMenu} className="text-2xl lg:hidden" data-aos="fade-left">
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Seção do iPhone 16 */}
          <div className=" flex flex-col items-center gap-2 lg:flex-row-reverse lg:gap-28 lg:justify-center h-screen justify-center">
            {/* Container principal com gradiente circular */}
            <div className="relative w-full max-w-[250px] h-[400px] group">
              {/* Efeito de brilho circular */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent rounded-full blur-xl transform scale-95 -z-10"/>
              
              {/* Container da imagem com sombra e hover effect */}
              <div className="relative w-full h-full transition-transform duration-300 ease-in-out hover:scale-105">
                <Image 
                  src="/images/iphoneazulnv.avif" 
                  alt="iphone-azul" 
                  fill
                  className="object-contain drop-shadow-2xl filter hover:brightness-110 transition-all duration-300"
                  quality={100}
                  priority
                />
                {/* Reflexo suave */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50" />
              </div>
            </div>
          <div className="flex flex-col items-center lg:items-start">
            <span className="font-semibold text-xl text-[#393636]">Iphone 16</span>
            <p className="text-gray-600 text-center max-w-sm lg:text-start lg:mt-4">
            O iPhone 16 é o último lançamento da Apple, com tela OLED de 6,1", chip A18 Bionic e câmera de 48 MP.
            </p>
            <div className="py-2 flex flex-col items-center gap-3">
              <span className="text-gray-700 text-xs font-bold">A Partir De R$ 6.599</span>
              <button className="px-6 py-2 text-white bg-blue-700 rounded-lg text-xs hover:bg-blue-800 transition-colors duration-300">
                SAIBA MAIS
              </button>
            </div>
            </div>
          </div>

          {/* Seção de diversas cores para o iPhone */}
          <div className="h-screen flex flex-col items-center">
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#393636]">Diversas Cores</span>
            </div>
            <p className="text-center">Customize sua experiência com o iPhone 16 na cor perfeita para você!</p>
            <div className="relative w-full max-w-[300px] h-[300px] flex justify-start">
              <Image 
                src="/images/coloriphone.png" 
                alt="iphone-cores" 
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>

          {/* Seção do MacBook Air M4 */}
          <div className="h-screen flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#393636] text-center">Inovação Sem Limites, Explore o Novo MacBook!</h2>
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="relative w-full max-w-[400px] h-[500px] lg:w-[700px]">
            
              <Image 
                src="/images/mackbooknv.png" 
                alt="macbook" 
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            <div className="flex flex-col items-center">
            <div>
              <h3 className="text-xl font-semibold">MacBook Air M4</h3>
            </div>
            <p className="text-[#393636] text-center mt-2 max-w-xl sm:px-14 lg:px-10">O MacBook Air M4 é o mais recente lançamento da Apple, com tela Retina de 13,6", chip M4 e desempenho sem precedentes.</p>
            <button className="px-5 py-3 rounded-lg mt-6 bg-blue-700 text-white text-xs">SAIBA MAIS</button>
          </div>
          </div>
          </div>
        </div>

        {/* Seção do Apple Watch */}
        <div className="bg-black mt-20 rounded-2xl flex flex-col items-center z-10 pb-12 xl:flex-row xl:px-80">
          <div className="flex flex-col items-center xl:items-start  2xl:px-16">
          <div className="mt-16">
            <h1 className="text-white  text-xl">O Poder do Apple <span className="text-[#4D5060] font-semibold">Watch</span></h1>
          </div>
          <div className="relative w-full max-w-[400px] h-[500px] mt-6 xl:hidden">
            <Image 
              src="/images/watchnv.png" 
              alt="apple-watch" 
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="mt-5">
            <h2 className="text-lg text-white">Apple Watch Series 10</h2>
          </div>

          <div className="mt-4">
            <p className="text-center text-[#DBDBDB] text-sm px-6 xl:text-start xl:px-0">
              O MacBook Air M4 é o mais recente lançamento da Apple, com tela Retina de 13,6", chip M4 e desempenho sem precedentes.
            </p>

           
          </div>

          <button className="px-5 py-3 rounded-lg mt-6 border-2 text-white text-xs">SAIBA MAIS</button>
          </div>

          <div className="relative w-full max-w-[400px] h-[500px] mt-6 hidden xl:flex">
            <Image 
              src="/images/watchnv.png" 
              alt="apple-watch" 
              fill
              className="object-contain pt-20 mr-5"
              quality={100}
            />
          </div>

        </div>

        {/* Seção de modelos e personalizações para Apple Watch */}
        <div className="px-6">
          <div className="flex flex-col justify-center items-center mt-44 ">
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#393636]">Diversos <span className="text-[#AFC50E]">Modelos</span></span>
            </div>
            <div className="w-full flex items-center justify-center">
            <p className="text-center max-w-lg px-6 ">Escolha a pulseira ideal e personalize seu Apple Watch Series 10 com o estilo perfeito para você!</p>
            </div>
            <div className="relative w-full max-w-[400px] h-[500px] pt-8">
              <Image 
                src="/images/watchcorhd.png" 
                alt="apple-watch-cores" 
                fill
                className="object-contain"
                quality={100}
              />
            </div>
           
          </div>

          {/* Seção do iPad Pro */}
          <div className="mt-28 flex flex-col items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#393636] text-center">Explore o Novo iPad <span className="text-[#F33D7E]">Pro</span></h2>
            </div>
            <div className="flex flex-col items-center xl:flex-row xl:gap-44">
            <div className="relative w-full max-w-[400px] h-[500px]">
              <Image 
                src="/images/ipadrosa.png" 
                alt="ipad" 
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            <div className="flex flex-col items-center">
            <div className="mt-3">
              <h3 className="text-xl font-semibold">Ipad Pro</h3>
            </div>
            
            <p className="text-[#393636] max-w-lg lg:max-w-2xl text-center">O iPad Pro 2024 possui chip M4, tela Ultra Retina XDR e design mais fino, ideal para produtividade e entretenimento.</p>
            <button className="px-5 py-3 rounded-lg mt-6 bg-blue-700 text-white text-xs">SAIBA MAIS</button>
          </div>
          </div>
          </div>

          {/* Seção de diversas cores para iPad */}
          <div className="mt-44 flex flex-col justify-center items-center pb-52">
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#393636]">Diversas Cores</span>
            </div>
            <p className="text-center ">Escolha o iPad na cor perfeita para você e personalize sua experiência!</p>
            <div className="relative w-full max-w-[400px] h-[500px] pt-8">
              <Image 
                src="/images/ipadcor.png" 
                alt="ipad-cores" 
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Rodapé com links sociais */}
        <footer className="w-full bg-gray-950 px-6 text-white pt-12 font-Kanit">
          <div className="flex flex-col gap-12 border-b-2 pb-6 border-gray-600">
            <div className="flex flex-col gap-2">
              <h1>SOCIAL</h1>
              <div className="flex gap-2">
                <a href="https://api.whatsapp.com/send?phone=5592994916643&text=Ol%C3%A1,%20vim%20pelo%20portf%C3%B3lio!" target="_blank">
                  <Image
                    src="/iconswhite/zapbranco.svg"
                    alt="WhatsApp"
                    width={22}
                    height={20}
                    quality={100}
                  />
                </a>
                <a href="https://www.instagram.com/gabrieltj.dev?igsh=NndhZHJjMDF0MHNr&utm_source=qr" target="_blank">
                  <Image
                    src="/iconswhite/instabanco.svg"
                    alt="Instagram"
                    width={22}
                    height={20}
                    quality={100}
                  />
                </a>
                <a href="https://www.linkedin.com/in/jos%C3%A9-gabriel-8901a7344/" target="_blank">
                  <Image
                    src="/iconswhite/linkbranco.svg"
                    alt="LinkedIn"
                    width={22}
                    height={20}
                    quality={100}
                  />
                </a>
                <a href="https://github.com/gabrieldevtjs" target="_blank">
                  <Image
                    src="/iconswhite/gitbranco.svg"
                    alt="GitHub"
                    width={22}
                    height={20}
                    quality={100}
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h1>JOSÉ GABRIEL</h1>
              <p className="text-xs text-gray-400">Portfolio - Desenvolvedor Full Stack</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}