import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <style></style>

      <header
        id="__header"
        className="w-full h-[25rem] bg-fixed bg-cover bg-bottom bg-"
      >
        <nav className="container mx-auto flex justify-between items-center">
          <h3 className="py-4">Clinton</h3>

          <button className="sm:hidden group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-focus:text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <ul className="hidden sm:flex items-center space-x-4">
            <li className="group">
              <a
                className="px-2 py-1 text-base capitalize font-medium text-gray-700 transition-all group-hover:text-gray-900 group-hover:underline-offset-4 group-hover:underline"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="px-2 py-1 text-base capitalize font-medium"
                href="#"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="px-2 py-1 text-base capitalize font-medium"
                href="#"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <nav className="hidden sm:hidden border">
          <div className="flex flex-row justify-between items-center transition-all duration-75"></div>
          <ul className="container mx-auto">
            <li className="flex">
              <a className="py-4 w-full text-center" href="#">
                About
              </a>
            </li>
            <li className="flex">
              <a className="py-4 w-full text-center" href="#">
                Projects
              </a>
            </li>
            <li className="flex">
              <a className="py-4 w-full text-center" href="#">
                Skills
              </a>
            </li>
            <li className="flex">
              <a className="py-4 w-full text-center" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <section className="h-80 sm:h-72 justify-center flex flex-col space-y-6">
          <h1 className="text-4xl sm:text-4xl md:text-5xl text-center font-medium">
            Hi, I'm Clinton <br />
            <span className="text-2xl sm:text-3xl">A frontend developer</span>
          </h1>

          <button className="px-4 py-2 w-max mx-auto font-medium capitalize text-white bg-green-600">
            Hire me
          </button>
        </section>
      </header>

      <section className="container mx-auto py-20 border flex flex-col justify-center items-center space-y-2">
        <div className="h-64 w-64">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://images.pexels.com/photos/1002687/pexels-photo-1002687.jpeg?cs=srgb&dl=pexels-ezekixl-akinnewu-1002687.jpg&fm=jpg"
          />
        </div>
        <h2 className="text-2xl font-bold">About me</h2>
        <div>
          <p className="text-base text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eligendi culpa eum tempora obcaecati quo!
          </p>
        </div>
      </section>

      <section className="container mx-auto py-20 border flex flex-col justify-center items-center space-y-2">
        <h2 className="w-full text-2xl font-bold text-left sm:text-center">
          My Skills
        </h2>
        <div>
          <p className="my-2 text-base sm:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eligendi culpa eum tempora obcaecati quo!
          </p>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-center items-start gap-4">
          <article className="p-2">
            <h3 className="mb-1 uppercase font-medium underline underline-offset-4">
              HTML
            </h3>
            <div className="space-y-1">
              <p className="capitalize">CSS</p>
              <p className="capitalize">TailwindCSS</p>
            </div>
          </article>

          <article className="p-2">
            <h3 className="mb-1 uppercase font-medium underline underline-offset-4">
              CSS
            </h3>
            <div className="space-y-1">
              <p className="capitalize">SCSS</p>
              <p className="capitalize">TailwindCSS</p>
            </div>
          </article>

          <article className="p-2">
            <h3 className="mb-1 uppercase font-medium underline underline-offset-4">
              CSS
            </h3>
            <div className="space-y-1">
              <p className="capitalize">SCSS</p>
              <p className="capitalize">TailwindCSS</p>
            </div>
          </article>
        </div>
      </section>

      <section className="py-20 border flex flex-col justify-center items-center space-y-2">
        <h2 className="text-3xl font-bold">Some of my projects</h2>
        <div>
          <p className="hidden my-2 text-base text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eligendi culpa eum tempora obcaecati quo!
          </p>
        </div>

        <div className="w-full">
          <article className="sm:flex space-y-2 sm:space-x-4">
            <div className="h-60 w-full sm:w-1/2">
              <img
                className="h-full w-full object-cover"
                alt=""
                src="https://images.pexels.com/photos/249798/pexels-photo-249798.png?cs=srgb&dl=pexels-sabrina-gelbart-249798.jpg&fm=jpg"
              />
            </div>
            <div className="w-full sm:w-2/5 space-y-3">
              <h3 className="text-2xl font-medium capitalize">
                Family Tree - Web App
              </h3>

              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                adipisci accusamus rem soluta ut eligendi! In, voluptas
                temporibus? Neque distinctio soluta laborum recusandae, ducimus
                id...
              </p>

              <div className="flex space-x-2 flex-wrap">
                <a className="inline-block px-2 text-sm font-medium" href="#">
                  #Reactjs
                </a>
                <a className="inline-block px-2 text-sm font-medium" href="#">
                  #TailwindCSS
                </a>
              </div>

              <div className="flex space-x-2">
                <a
                  id="__live-link"
                  href="#"
                  className="relative px-4 py-1 overflow-hidden rounded bg-white"
                >
                  <span className="block relative text-sm text-green-900 font-medium capitalize z-10">
                    Live site
                  </span>
                </a>

                <a
                  href="#"
                  className="relative px-4 py-1 flex items-center space-x-2 rounded bg-white border-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span className="block relative text-sm github font-medium z-10">
                    Source code
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      <section className="container mx-auto py-20 border flex flex-col justify-center items-center space-y-2">
        <h2 className="w-full text-2xl font-bold text-left sm:text-center">
          Get in touch
        </h2>
        <div className="flex flex-col items-center">
          <p className="my-2 text-base sm:text-center">
            Feel free to reach out if you're looking to hire, to connect or see
            if we can build something amazing together.
          </p>

          <a
            className="font-medium underline underline-offset-2"
            href="mailto:#"
          >
            clintonwamanakane@gmail.com
          </a>

          <div className="my-2 flex gap-3">
            <a className="p-1" href="#">
              Twitter
            </a>
            <a className="p-1" href="#">
              Github
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
