import React, { useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { rgbDataURL } from "../utils/blurUrl";

function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const openMenu = `relative ease-in-out opacity-100 pointer-events-auto transform translate-y-0 transition-all sm:hidden z-20`;
  const closeMenu = `absolute ease-in-out opacity-0 pointer-events-none duration-200 transform -translate-y-6 transition-transform sm:hidden z-20`;

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const Hero = () => {
    return (
      <section className="relative h-80 sm:h-88 justify-center flex flex-col space-y-6 z-10">
        <h1 className="text-4xl sm:text-4xl md:text-5xl text-center font-medium">
          {` Hi, I'm Clinton`} <br />
          <span className="text-2xl sm:text-3xl">A frontend developer</span>
        </h1>

        {/* <button className="px-4 py-2 w-max mx-auto font-medium capitalize text-white bg-green-600">
          Hire me
        </button> */}
      </section>
    );
  };

  return (
    <header
      id="__header"
      className={`relative w-full h-auto bg-fixed bg-cover bg-bottom bg-[url(/assets/macbook.jpg)]`}
    >
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.3/lottie_svg.min.js"
        strategy="lazyOnLoad"
        onLoad={() => {
          let iconMenu = document.querySelector("#menuIcon");
          let animationMenu = bodymovin.loadAnimation({
            container: iconMenu,
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: "https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/menu.json",
          });

          var directionMenu = 1;
          iconMenu.addEventListener("click", (e) => {
            animationMenu.setDirection(directionMenu);
            animationMenu.play();
            directionMenu = -directionMenu;
          });
        }}
      />

      <nav className="relative container mx-auto flex justify-between items-center z-30">
        <h3 className="py-4 text-lg font-medium font-mono uppercase">
          Clinton
        </h3>

        <button
          id="menuIcon"
          onClick={toggleMenu}
          className="sm:hidden h-12 w-12 group p-1 transition-all"
        ></button>

        <ul className="hidden sm:flex items-center space-x-4">
          {[
            ["About", "/#about"],
            ["Skills", "/#skills"],
            ["Projects", "/#projects"],
            ["Contact", "/#contact"],
          ].map(([title, url], index) => (
            <li key={index} className="flex">
              <a
                className="px-2 py-1 text-base capitalize font-medium text-gray-700 transition-all group-hover:text-gray-900 group-hover:underline-offset-4 group-hover:underline"
                href={url}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className={isMenuOpen ? openMenu : closeMenu}>
        <div className="flex flex-row justify-between items-center transition-all duration-75"></div>
        <ul className="relative container mx-auto mt-6">
          {[
            ["About", "/#about"],
            ["Skills", "/#skills"],
            ["Projects", "/#projects"],
            ["Contact", "/#contact"],
          ].map(([title, url], index) => (
            <li key={index} className="flex">
              <a
                className="py-6 w-full text-2xl text-center font-medium focus-within:bg-gray-100"
                href={url}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Hero />
    </header>
  );
}

export default Header;
