import Image from "next/image";
import React from "react";

function Project({ project }) {
  return (
    <article className="sm:flex space-y-2 sm:space-x-4">
      <div className="relative h-60 sm:h-64 w-full sm:w-1/2">
        <Image
          className="h-full w-full object-cover"
          alt=""
          src="https://images.pexels.com/photos/249798/pexels-photo-249798.png?cs=srgb&dl=pexels-sabrina-gelbart-249798.jpg&fm=jpg"
          layout="fill"
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col gap-4">
        <h3 className="text-2xl font-medium capitalize">
          Family Tree - Web App
        </h3>

        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          adipisci accusamus rem soluta ut eligendi! In, voluptas temporibus?
          Neque distinctio soluta laborum recusandae, ducimus id...
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
  );
}

export default Project;
