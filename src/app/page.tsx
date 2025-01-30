"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Estado para controlar se o menu está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="min-h-screen w-full font-roboto">
        <div className="px-6">
          {/* Cabeçalho */}
          <div className="flex justify-between items-center pt-6">
            <div className="flex gap-2 items-center">
              <Image src={'/icons/iconapple.png'} width={18} height={20} alt="icon apple" className="object-cover" />
              <h1 className="text-xl text-[#393636]">Ibuzz</h1>
            </div>
            <button onClick={toggleMenu} className="text-2xl lg:hidden" data-aos="fade-left">
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Seção do iPhone */}
          <div className="mt-28 flex flex-col items-center gap-2">
            <div>
              <Image src={"/images/iphoneazulhome.png"} alt="iphone-azul" width={200} height={200} className="max-w-[400px] max-h-[500px] object-cover" />
            </div>
            <span className="font-semibold text-xl text-[#393636]">Iphone 16</span>
            <p className="text-gray-600 text-center">O iPhone 16 é o último lançamento da Apple, com tela OLED de 6,1", chip A18 Bionic e câmera de 48 MP.</p>
            <div className="py-2 flex flex-col items-center gap-3">
              <span className="text-gray-700 text-xs font-bold">A Partir De R$ 6.599</span>
              <button className="px-6 py-2 text-white bg-blue-700 rounded-lg text-xs">SAIBA MAIS</button>
            </div>
          </div>

          {/* Seção de Cores */}
          <div className="mt-44 flex flex-col items-center">
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#393636]">Diversas Cores</span>
            </div>
            <p className="text-center">Customize sua experiência com o iPhone 16 na cor perfeita para você!</p>
            <div className="pt-8">
              <Image src={"/images/coloriphone.png"} alt="iphone-azul" width={200} height={200} className="max-w-[400px] max-h-[500px] object-cover" />
            </div>
          </div>

          {/* Seção do MacBook */}
          <div className="mt-48 flex flex-col items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#393636] text-center">Inovação Sem Limites, Explore o Novo MacBook!</h2>
            </div>
            <div>
              <Image src={"/images/mackbook.png"} alt="macbook" width={300} height={200} className="max-w-[400px] max-h-[500px] object-cover" />
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-semibold">MacBook Air M4</h3>
            </div>
            <p className="text-[#393636] text-center mt-6">O MacBook Air M4 é o mais recente lançamento da Apple, com tela Retina de 13,6", chip M4 e desempenho sem precedentes.</p>
            <button className="px-5 py-3 rounded-lg mt-6 bg-blue-700 text-white text-xs">SAIBA MAIS</button>
          </div>
        </div>

        {/* Seção do Apple Watch */}
        <div className="bg-black mt-20 rounded-2xl flex flex-col items-center z-10 pb-12">
          <div className="mt-14">
            <h1 className="text-white font-semibold text-xl">O Poder do Apple <span className="text-[#4D5060]">Watch</span></h1>
          </div>
          <div className="mt-6 z-120">
            <Image src={"/images/watch.png"} alt="apple-watch" width={200} height={200} className="max-w-[400px] max-h-[500px] object-cover" />
          </div>
          <div className="mt-8">
            <h2 className="text-lg text-white">Apple Watch Series 10</h2>
          </div>

          <div className="mt-4">
            <p className="text-center text-[#DBDBDB] text-sm px-6">
            O MacBook Air M4 é o mais recente lançamento da Apple, com tela Retina de 13,6", chip M4 e desempenho sem precedentes.
            </p>
          </div>

          
          <button className="px-5 py-3 rounded-lg mt-6 border-2 text-white text-xs">SAIBA MAIS</button>
        </div>

        <div className="px-6">
        <div className="mt-44 flex flex-col items-center">
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#393636]">Diversos <span className="text-[#AFC50E]">Modelos</span></span>
            </div>
            <p className="text-center">Escolha a pulseira ideal e personalize seu Apple Watch Series 10 com o estilo perfeito para você!</p>
            <div className="pt-8">
              <Image src={"/images/watchcor.png"} alt="iphone-azul" width={200} height={200} className="max-w-[400px] max-h-[500px] object-cover" />
            </div>
          </div>


          <div className="mt-48 flex flex-col items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#393636] text-center">Explore o Novo iPad Pro</h2>
            </div>
            <div>
              <Image src={"/images/ipad.png"} alt="macbook" width={300} height={200} className="max-w-[400px] max-h-[500px] object-cover" />
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-semibold">Ipad Pro</h3>
            </div>
            <p className="text-[#393636] text-center mt-6">O iPad Pro (2024) possui chip M4, tela Ultra Retina XDR e design mais fino, ideal para produtividade e entretenimento.</p>
            <button className="px-5 py-3 rounded-lg mt-6 bg-blue-700 text-white text-xs">SAIBA MAIS</button>
          </div>


          <div className="mt-44 flex flex-col items-center pb-52">
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#393636]">Diversas Cores</span>
            </div>
            <p className="text-center">Escolha o iPad na cor perfeita para você e personalize sua experiência!</p>
            <div className="pt-8">
              <Image src={"/images/ipadcor.png"} alt="iphone-azul" width={270} height={200} className="max-w-[400px] max-h-[500px] object-cover" />
            </div>
          </div>
          
          </div> 

            <footer className="w-full bg-gray-950 px-6 text-white pt-12 font-Kanit">
      <div className="flex flex-col gap-12 border-b-2 pb-6 border-gray-600">
        <div className="flex flex-col gap-2">
          <h1>SOCIAL</h1>
          <div className="flex gap-2">
            <a href="https://api.whatsapp.com/send?phone=5592994916643&text=Ol%C3%A1,%20vim%20pelo%20portf%C3%B3lio!" target="_blank">
              <Image
                src="/iconswhite/zapbranco.svg"
                alt="GitHub"
                width={22}
                height={20}
              />
            </a>
            <a href="https://www.instagram.com/gabrieltj.dev?igsh=NndhZHJjMDF0MHNr&utm_source=qr" target="_blank">
              <Image
                src="/iconswhite/instabanco.svg"
                alt="GitHub"
                width={22}
                height={20}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-gabriel-8901a7344/"
              target="_blank"
            >
              <Image
                src="/iconswhite/linkbranco.svg"
                alt="LinkedIn"
                width={22}
                height={20}
              />
            </a>

            <a
              href="https://github.com/gabrieldevtjs"
              target="_blank"
            >
              <Image
                src="/iconswhite/gitbranco.svg"
                alt="Instagram"
                width={22}
                height={20}
              />
            </a>
          </div>
        </div>
  
      <div className="flex flex-col gap-6">
        <h1>JOSÉ GABRIEL</h1>

        <p className="text-xs text-gray-400">Desenvolvedor Full Stack apaixonado por criar soluções completas para web, integrando front-end e back-end para construir aplicações robustas e funcionais.</p>
      </div>

      </div>
      <div className="w-full text-center py-10">
         <p className="text-xs">
            &copy; 2025 Gabriel. Todos os direitos reservados.
          </p>
          </div>
    </footer> 
      </div>
    </>
  );
}