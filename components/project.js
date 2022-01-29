import Image from "next/image";
import React from "react";

function Project(props) {
  const data = props.data;

  return (
    <article className="sm:flex space-y-2 sm:space-x-4">
      <div className="relative h-60 sm:h-64 w-full sm:w-1/2">
        <Image
          className="h-full w-full object-cover"
          alt={data.title}
          src={data.featuredimage}
          layout="fill"
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col gap-4">
        <h3 className="text-2xl font-medium capitalize">{data.title}</h3>

        <p className="text-sm">{data.excerpt}</p>

        <div className="flex justify-start gap-2 flex-wrap">
          {data.tags.map((item, key) => (
            <span key={key} className="inline-block px-2 text-sm font-medium">
              #{item}
            </span>
          ))}
        </div>

        <div className="flex space-x-2">
          <a
            id="__live-link"
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="relative px-4 py-1 overflow-hidden rounded bg-white hover:bg-green-400  group"
          >
            <span className="block relative text-sm text-green-900 font-medium capitalize z-10">
              Live site
            </span>
          </a>

          {/* <a
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
          </a> */}
        </div>
      </div>
    </article>
  );
}

export default Project;
