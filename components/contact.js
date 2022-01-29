import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="bg-gray-50">
      <div className=" container mx-auto py-32 flex flex-col justify-center items-center gap-4">
        <h2 className="w-full text-3xl font-bold text- text-center">
          Get in touch
        </h2>
        <div className="flex flex-col items-center">
          <p className="my-2 text-base text-center lg:w-10/12 mx-auto">
            {`Feel free to reach out if you're looking to hire, to connect or if
              you want us to work on something.`}
          </p>

          <a
            className="text-lg font-medium  inline-block indent"
            href="mailto:clintonwamanakane@gmail.com"
          >
            clintonwamanakane@gmail.com
          </a>

          <div className="my-4 flex gap-4">
            <a
              className="border hover:border-black transition-color ease-in-out group py-2 px-2 rounded"
              href="http://linkedin.com/in/mcclintsayshi"
            >
              <FiLinkedin className="text-3xl sm:text-xl text-gray-500 transition-all ease-in-out group-hover:text-black group-focus-within:text-black" />
            </a>
            <a
              className="border hover:border-black transition-color ease-in-out group py-2 px-2 rounded"
              href="http://github.com/mcclintsayshi"
            >
              <FiGithub className="text-3xl sm:text-xl text-gray-500 transition-all ease-in-out group-hover:text-black group-focus-within:text-black" />
            </a>
            <a
              className="border hover:border-black transition-color ease-in-out group py-2 px-2 rounded"
              href="http://twitter.com/clintsayshi"
            >
              <FiTwitter className="text-3xl sm:text-xl text-gray-500 transition-all ease-in-out group-hover:text-black group-focus-within:text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
