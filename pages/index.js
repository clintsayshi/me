import Head from "next/head";
import Image from "next/image";
import path from "path";
import fs from "fs";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Project from "../components/project";
import { rgbDataURL } from "../utils/blurUrl";

import { attributes as data } from "../content/pages/home.md";
import matter from "gray-matter";

export default function Home({ projects }) {
  const SectionHeading = ({ text }) => {
    return <h2 className="text-3xl font-bold">{text}</h2>;
  };

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Portfolio | Clinton Manakane</title>
      </Head>
      <Header />

      <section
        id="about"
        className="container mx-auto py-32 flex flex-col justify-center items-center gap-4 z-20"
      >
        <div className="relative h-64 w-64 md:h-72 md:w-72">
          <Image
            className="rounded-full"
            src="/assets/me.png"
            objectFit="cover"
            alt="picture of clinton"
            layout="fill"
            placeholder="blur"
            blurDataURL={rgbDataURL(237, 181, 6)}
          />
        </div>

        <SectionHeading text="About me" />

        <div>
          <p className="text-base text-center lg:w-10/12 mx-auto">
            {data.about}
          </p>
        </div>
      </section>

      <section id="skills" className="bg-gray-100">
        <div className=" container mx-auto py-32 flex flex-col justify-center items-center gap-4">
          <h2 className="w-full text-3xl font-bold text-left sm:text-center">
            Tech Stack
          </h2>
          <div>
            <p className="text-base sm:text-center lg:w-10/12 sm:mx-auto">
              Some of the web technologies I work with. I have created this
              website using Nextjs, TailwindCSS and Netlify CMS
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-8">
            {data.skills.map((main, index) => (
              <article key={index} className="flex flex-col gap-2">
                {main.list.map((skill, key) => (
                  <p key={key} className="capitalize font-medium">
                    {skill}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects start */}
      <section
        id="projects"
        className="container mx-auto py-32 flex flex-col justify-center items-center gap-5"
      >
        <h2 className="w-full text-3xl font-bold text-left sm:text-center">
          Some of my projects
        </h2>
        {/* <div className="block">
          <p className="hidden text-base text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eligendi culpa eum tempora obcaecati quo!
          </p>
        </div> */}

        <div className="w-full space-y-8">
          {projects.map((item, key) => (
            <Project key={key} {...item} />
          ))}
        </div>
      </section>
      {/* Projects end */}

      <Contact />

      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  let files = fs.readdirSync("content/projects");

  files = files.map((item) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join("content/projects", item))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    return {
      data: parsedMarkdown.data,
      slug: item.replace(".md", ""),
    };
  });

  return {
    props: {
      projects: files,
    },
  };
};
