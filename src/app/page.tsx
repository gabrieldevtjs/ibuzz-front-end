"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu state (open or closed)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="min-h-screen w-full font-roboto">
        <div className="px-6">
          {/* Header with logo and menu button */}
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
            {/* Menu button (hamburger) */}
            <button
              onClick={toggleMenu}
              className="text-2xl lg:hidden"
              data-aos="fade-left"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>

            <div className="hidden lg:flex items-center gap-14">
              <div>
                <nav>
                  <ul className="flex gap-6">
                    <li>
                      <a href="#Home" className="text-[#393636] text-sm">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#Products" className="text-[#393636] text-sm">
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="#Contact" className="text-[#393636] text-sm">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex gap-4 items-center">
                <div>
                  <Image
                    src={"/icons/carrinho.png"}
                    alt="shopping-cart"
                    width={17}
                    height={20}
                  />
                </div>
                <div>
                  <Image
                    src={"/icons/user.png"}
                    alt="user-icon"
                    width={15}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* iPhone 16 Section */}
          <div className="flex flex-col items-center gap-2 sm:mt-20 lg:flex-row-reverse lg:gap-32 lg:justify-center lg:mt-36">
            {/* Main container with circular gradient */}
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
              <span className="font-semibold text-xl text-[#393636]">
                iPhone 16
              </span>
              <p className="text-gray-600 text-center max-w-sm lg:text-start">
                The iPhone 16 is Apple's latest release, featuring a 6.1" OLED display,
                A18 Bionic chip, and a 48 MP camera.
              </p>
              <div className="py-2 flex flex-col items-center gap-3">
                <span className="text-gray-700 text-xs font-bold">
                  Starting From $1,299
                </span>
                <button className="px-6 py-2 text-white bg-blue-700 rounded-lg text-xs hover:bg-blue-800 transition-colors duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* iPhone Color Options Section */}
          <div className="mt-44 flex flex-col items-center">
            <div className="flex flex-col items-center">
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#393636]">
                Various <span className="text-blue-600">Colors</span>
              </span>
            </div>
            
            <p className="text-center max-w-lg lg:px-16 text-[#393636]">
              Customize your experience with the iPhone 16 in the perfect color for you!
            </p>
            </div>
            <div className="relative w-full max-w-[300px] h-[270px] flex justify-start lg:h-[300px]">
              <Image
                src="/images/coloriphone.png"
                alt="iphone-colors"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>

          {/* MacBook Air M4 Section */}
          <div className="mt-44 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#393636] text-center mb-16">
              Limitless Innovation, Explore the New <span className="text-blue-600">MacBook!</span>
            </h2>
            <div className="flex flex-col gap-6 items-center sm:items-center w-full lg:flex-row">
              <div className=" w-full flex items-center justify-center lg:w-1/2 lg:ml-12 ">
                <Image
                  src="/images/mackbooknv.png"
                  alt="macbook"
                  className="object-contain"
                  quality={100}
                  width={400}
                  height={350}
                />
              </div>
              <div className="lg:w-1/2 flex flex-col items-center lg:mr-12">
                <div>
                  <h3 className="text-xl font-semibold text-[#393636]">MacBook Air M4</h3>
                </div>
                <p className="text-[#393636] text-center mt-2 max-w-xl sm:px-14">
                  The MacBook Air M4 is Apple's latest release, featuring a 13.6" Retina display,
                  M4 chip, and unprecedented performance.
                </p>
                <button className="px-5 py-3 rounded-lg mt-6 bg-blue-700 text-white text-xs">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Apple Watch Section */}
        <div className="bg-black mt-44 lg:mt-60 rounded-2xl flex flex-col items-center z-10 pb-12 lg:flex-row lg:px-52">
          <div className="flex flex-col items-center lg:items-start 2xl:px-16">
            <div className="mt-16">
              <h1 className="text-white text-xl">
                The Power of Apple <span className="text-blue-700 font-semibold">Watch</span>
              </h1>
            </div>
            <div className="relative w-full max-w-[400px] h-[260px] mt-6 lg:hidden">
              <Image
                src="/images/watchnv.png"
                alt="apple-watch"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            <div className="mt-5">
              <h2 className="text-lg text-white">Apple Watch Series <span className="text-blue-700 font-bold">10</span></h2>
            </div>

            <div className="mt-4">
              <p className="text-center text-gray-300 text-sm px-6 sm:px-14 max-w-lg  lg:text-start lg:px-0">
                The MacBook Air M4 is Apple's latest release, featuring a 13.6" Retina display,
                M4 chip, and unprecedented performance.
              </p>
            </div>

            <button className="px-5 py-3 rounded-lg mt-6 text-white text-xs bg-blue-700 border-2 border-blue-700">
              LEARN MORE
            </button>
          </div>

          <div className="relative w-full max-w-[400px] h-[500px] mt-6 hidden lg:flex">
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
        <div className="px-6">
          <div className="flex flex-col justify-center items-center mt-44">
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#393636]">
                Various <span className="text-[#AFC50E]">Models</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-center">
              <p className="text-center max-w-lg px-3 text-[#393636]">
                Choose the perfect band and customize your Apple Watch Series 10
                with the perfect style for you!
              </p>
            </div>
            <div className="relative w-full max-w-[300px] h-[320px] pt-8">
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
          <div className="mt-28 flex flex-col items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#393636] text-center">
                Explore the New iPad <span className="text-[#F33D7E]">Pro</span>
              </h2>
            </div>
            <div className="flex flex-col items-center lg:flex-row xl:gap-44">
              <div className="relative w-full max-w-[270px] h-[360px]">
                <Image
                  src="/images/ipadrosa.png"
                  alt="ipad"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="mt-3">
                  <h3 className="text-xl font-semibold text-[#393636]">iPad Pro</h3>
                </div>

                <p className="text-[#393636] max-w-lg lg:max-w-2xl text-center">
                  The 2024 iPad Pro features the M4 chip, Ultra Retina XDR display, and a
                  thinner design, perfect for productivity and entertainment.
                </p>
                <button className="px-5 py-3 rounded-lg mt-6 bg-[#F33D7E] text-white text-xs">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* iPad Color Options Section */}
          <div className="mt-44 flex flex-col justify-center items-center pb-52">
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#393636]">
                Various <span className="text-blue-600">Colors</span>
              </span>
            </div>
            <p className="text-center mb-6 text-[#393636]">
              Choose the iPad in the perfect color for you and customize your
              experience!
            </p>
            <div className="relative w-full max-w-[400px] h-[400px] pt-8">
              <Image
                src="/images/ipadfundo.png"
                alt="ipad-colors"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Footer with Social Links */}
        <footer className="w-full bg-black px-6 text-white pt-12 font-Kanit">
          <div className="flex flex-col gap-12 border-b-2 pb-6 border-gray-600">
            <div className="flex flex-col gap-2">
              <h1>SOCIAL</h1>
              <div className="flex gap-2">
                <a
                  href="https://api.whatsapp.com/send?phone=5592994916643&text=Hi,%20I%20came%20through%20the%20portfolio!"
                  target="_blank"
                >
                  <Image
                    src="/iconswhite/zapbranco.svg"
                    alt="WhatsApp"
                    width={22}
                    height={20}
                    quality={100}
                  />
                </a>
                <a
                  href="https://www.instagram.com/gabrieltj.dev?igsh=NndhZHJjMDF0MHNr&utm_source=qr"
                  target="_blank"
                >
                  <Image
                    src="/iconswhite/instabanco.svg"
                    alt="Instagram"
                    width={22}
                    height={20}
                    quality={100}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/josé-gabriel-8901a7344/"
                  target="_blank"
                >
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
              <p className="text-xs text-gray-400">
                Portfolio - Full Stack Developer
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}