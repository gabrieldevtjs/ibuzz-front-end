"use client";
import Image from "next/image";
import { useState } from "react";
import Coments from "./components/coment"
import Questions from "./components/questions";
import { FooterHome } from "./components/footer";



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu (aberto/fechado)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="min-h-screen w-full font-poppins bg-gray-50">
        <div className="px-6">
          {/* Header */}
          <div className="flex justify-between items-center pt-6 w-full lg:px-8  xl:px-16">
            <div className="flex gap-2 items-center">
              <Image
                src="/icons/iconapple.png"
                width={24}
                height={24}
                alt="icon apple"
                className="object-contain"
                quality={100}
                priority
              />
              <h1 className="text-2xl font-semibold text-gray-900">Ibuzz</h1>
            </div>
            {/* Menu Mobile */}
            <button
              onClick={toggleMenu}
              className="text-2xl lg:hidden focus:outline-none"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>

            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center gap-14">
              <nav>
                <ul className="flex gap-6">
                  <li>
                    <a
                      href="#Home"
                      className="text-gray-900 text-sm hover:text-blue-700 transition-colors duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Products"
                      className="text-gray-900 text-sm hover:text-blue-700 transition-colors duration-300"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contact"
                      className="text-gray-900 text-sm hover:text-blue-700 transition-colors duration-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden lg:flex gap-4 items-center">
             <a href="/login" className="bg-blue-600 rounded-lg px-6 py-2 text-white text-xs font-semibold">Sign In</a>
  
            </div>
          </div>

          {/* Menu Mobile Overlay */}
          {isMenuOpen && (
            <div className="fixed top-0 right-0 h-full bg-white w-64 z-50 shadow-lg transform transition-transform duration-300 ease-in-out">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-2xl"
              >
                ✖
              </button>
              <nav className="mt-12">
                <ul className="flex flex-col gap-4 p-4">
                  <li>
                    <a
                      href="#Home"
                      className="text-gray-900 text-sm hover:text-blue-700 transition-colors duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Products"
                      className="text-gray-900 text-sm hover:text-blue-700 transition-colors duration-300"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contact"
                      className="text-gray-900 text-sm hover:text-blue-700 transition-colors duration-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          {/* iPhone 16 Section */}
          <div className="flex flex-col items-center gap-8 sm:mt-20 lg:flex-row-reverse lg:gap-80 lg:justify-center lg:mt-36 xl:mt-44">
            <div className="relative w-full max-w-[250px] h-[400px] group">
              <div className="relative w-full h-full transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/iphoneazulnv.avif"
                  alt="blue-iphone"
                  fill
                  className="object-contain drop-shadow-2xl filter hover:brightness-110 transition-all duration-300"
                  quality={100}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-3xl font-bold text-gray-900">iPhone 16</h2>
              <p className="text-gray-600 text-center max-w-sm lg:text-start mt-4">
                The iPhone 16 is Apple's latest release, featuring a 6.1" OLED
                display, A18 Bionic chip, and a 48 MP camera.
              </p>
              <div className="py-2 flex flex-col items-center gap-3 mt-6">
                <span className="text-gray-700 text-sm font-bold">
                  Starting From $1,299
                </span>
                <button className="px-8 py-3 text-white bg-blue-700 rounded-lg text-sm hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 shadow-lg">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* iPhone Color Options Section */}
          <div className="mt-44 flex flex-col items-center lg:mt-60">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Various <span className="text-blue-600">Colors</span>
              </h2>
            </div>
            <p className="text-center max-w-lg text-gray-600">
              Customize your experience with the iPhone 16 in the perfect color
              for you!
            </p>
            <div className="relative w-[300px] h-[270px] mt-8 lg:h-[300px] lg:w-[400px]">
              <Image
                src="/images/iphones.png"
                alt="iphone-colors"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>

          {/* MacBook Air M4 Section */}
          <div className="mt-44 flex flex-col items-center lg:mt-60">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-16">
              Limitless Innovation, Explore the New{" "}
              <span className="text-blue-600">MacBook!</span>
            </h2>
            <div className="flex flex-col gap-6 items-center w-full lg:flex-row lg:justify-center lg:gap-20">
              <div className="w-auto flex items-center justify-center">
                <Image
                  src="/images/mackbooknv.png"
                  alt="macbook"
                  className="object-contain lg:w-[500px]"
                  quality={100}
                  width={400}
                  height={350}
                />
              </div>
              <div className="w-auto flex flex-col items-center lg:items-start">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  MacBook Air M4
                </h3>
                <p className="text-gray-600 text-center mt-4 max-w-sm lg:text-start text-sm lg:text-lg">
                  The MacBook Air M4 is Apple's latest release, featuring a
                  13.6" Retina display, M4 chip, and unprecedented performance.
                </p>
                <button className="px-8 py-3 rounded-lg mt-6 bg-blue-700 text-white text-xs lg:text-sm hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 shadow-lg">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Apple Watch Section */}
        <div className="bg-black mt-44 lg:mt-72 rounded-2xl flex flex-col items-center z-10 pb-12 lg:flex-row  lg:justify-center">
          <div className="flex flex-col items-center lg:items-start mt-16 lg:mt-0">
            <h1 className="text-white text-2xl lg:text-3xl font-bold">
              The Power of Apple <span className="text-blue-700">Watch</span>
            </h1>
            <div className="relative w-full max-w-[400px] h-[260px] mt-6 lg:hidden">
              <Image
                src="/images/watchnv.png"
                alt="apple-watch"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            <h2 className="text-xl lg:text-2xl text-white mt-5">
              Apple Watch Series{" "}
              <span className="text-blue-700 font-bold">10</span>
            </h2>
            <p className="text-gray-300 text-center mt-4 max-w-lg lg:text-start text-sm lg:text-base px-2 lg:px-0">
              The Apple Watch Series 10 features a sleek design, advanced health
              tracking, and seamless integration with your Apple devices.
            </p>
            <button className="px-8 py-3 rounded-lg mt-6 text-white text-xs lg:text-sm bg-blue-700 border-2 border-blue-700 hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 shadow-lg">
              LEARN MORE
            </button>
          </div>
          <div className="relative w-full max-w-[400px] h-[500px] mt-6 hidden lg:flex ">
            <Image
              src="/images/watchnv.png"
              alt="apple-watch"
              fill
              className="object-contain pt-20 mr-5"
              quality={100}
            />
          </div>
        </div>

        {/* Apple Watch Models and Customization Section */}
        <div className="mt-44 flex flex-col items-center lg:mt-60">
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Various <span className="text-[#AFC50E]">Models</span>
            </h2>
          </div>
          <p className="text-center max-w-lg text-gray-600 text-sm lg:text-base px-2">
            Choose the perfect band and customize your Apple Watch Series 10
            with the perfect style for you!
          </p>
          <div className="relative  w-[300px] h-[320px] mt-8 lg:w-[370px]">
            <Image
              src="/images/watchcorhd.png"
              alt="apple-watch-colors"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>

        {/* iPad Pro Section */}
        <div className="mt-44 flex flex-col items-center lg:mt-60">
          <div className="mb-6 xl:mb-20 2xl:mb-24">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">
              Explore the New iPad <span className="text-[#F33D7E]">Pro</span>
            </h2>
          </div>
          <div className="flex flex-col items-center lg:flex-row-reverse lg:gap-20">
            <div className="relative w-[270px] h-[360px] xl:w-[360px]">
              <Image
                src="/images/ipadrosa.png"
                alt="ipad"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            <div className="flex flex-col items-center lg:items-start mt-6 lg:mt-0">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">iPad Pro</h3>
              <p className="text-gray-600 text-center mt-4 max-w-xs lg:text-start text-sm lg:text-base">
                The 2024 iPad Pro features the M4 chip, Ultra Retina XDR
                display, and a thinner design, perfect for productivity and
                entertainment.
              </p>
              <button className="px-8 py-3 rounded-lg mt-6 bg-[#F33D7E] text-white text-xs lg:text-sm hover:bg-[#D42A5E] transition-colors duration-300 transform hover:scale-105 shadow-lg">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* iPad Color Options Section */}
        <div className="mt-44 flex flex-col items-center pb-52">
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Various <span className="text-blue-600">Colors</span>
            </h2>
          </div>
          <p className="text-center max-w-lg text-gray-600 text-sm lg:text-base px-2">
            Choose the iPad in the perfect color for you and customize your
            experience!
          </p>
          <div className="relative w-full max-w-[400px] h-[300px] mt-8 lg:h-[400px]">
            <Image
              src="/images/ipadfundo.png"
              alt="ipad-colors"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>

        <div className="px-6 py-16">
        <Coments/>
        </div>

            <div className="w-full px-4 mt-44">
                <Questions/>
            </div>
      

        {/* Footer */}
        <div className="mt-44">
          <FooterHome/>
          </div>
      </div>
    </>
  );
}
