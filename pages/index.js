import Head from "next/head";
import Image from "next/image";
import Contact from "../components/contact";
//import {} from "react"
import Footer from "../components/footer";
import Header from "../components/header";
import Project from "../components/project";
import { rgbDataURL } from "../utils/blurUrl";

export default function Home() {
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
            I design and code websites. I am currently job seeking and open for
            freelance work. If I am not working on coding skills I like to watch
            series and movies, go for walks, I've also been planning to learn
            skateboarding. Scroll down to learn more about my skills and
            projects.
          </p>
        </div>
      </section>

      <section id="skills" className="bg-gray-100">
        <div className=" container mx-auto py-32 flex flex-col justify-center items-center gap-4">
          <h2 className="w-full text-3xl font-bold text-left sm:text-center">
            Technologies I work with
          </h2>
          <div>
            <p className="text-base sm:text-center lg:w-10/12 sm:mx-auto">
              Some of the web technologies I work with. I have created this
              website using Nextjs, TailwindCSS and Netlify CMS
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-8">
            <article className="flex flex-col gap-2">
              <p className="capitalize font-medium">HTML &amp; CSS</p>
              <p className="capitalize">SCSS</p>
              <p className="capitalize">TailwindCSS</p>
            </article>

            <article className="flex flex-col gap-2">
              <p className="capitalize">Javascript</p>
              <p className="capitalize">React</p>
              <p className="capitalize">NextJs</p>
              <p className="capitalize">GatsbyJs</p>
            </article>

            <article className="flex flex-col gap-2">
              <p className="capitalize">State Management - Redux</p>
              <p className="capitalize">Netlify CMS</p>
              <p className="capitalize">Git</p>
              <p className="capitalize">Github</p>
            </article>
          </div>
        </div>
      </section>

      {/* Projects start */}
      <section
        id="projects"
        className="container mx-auto py-32 flex flex-col justify-center items-center gap-4"
      >
        <h2 className="w-full text-3xl font-bold text-left sm:text-center">
          Some of my projects
        </h2>
        <div className="block">
          <p className="hidden text-base text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eligendi culpa eum tempora obcaecati quo!
          </p>
        </div>

        <div className="w-full space-y-8">
          <Project />
          <Project />
          <Project />
        </div>
      </section>
      {/* Projects end */}

      <Contact />

      <Footer />
    </div>
  );
}
