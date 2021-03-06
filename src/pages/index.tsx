import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage = () => {
  return (
    <div className=" bg-gradient-to-r from-green-400 to-blue-500 h-screen">
      <div className=" flex h-screen bg-black bg-opacity-40">
        <div className="flex flex-wrap justify-center m-auto">
          <StaticImage
            className="rounded-full border-8 border-white w-60 xl:w-80 shadow-2xl shadow-gray-700"
            src="../images/profile.jpg"
            alt="Profile image"
          />
          <div className="my-auto mx-9">
            <div className="text-4xl lg:text-5xl xl:text-6xl mt-6 sm:mt-0 font-bold text-white flex justify-center">
              <h1 className="animate-[fall_1s_ease-out_normal]">K</h1>
              <h1 className="animate-[fall_3s_ease-out_normal]">e</h1>
              <h1 className="animate-[fall_2s_ease-out_normal]">s</h1>
              <h1 className="animate-[fall_4s_ease-out_normal]">a</h1>
              <h1 className="animate-[fall_2s_ease-out_normal]">r</h1>
              <h1 className="animate-[fall_5s_ease-out_normal]">a</h1>
              <h1 className="ml-2 lg:ml-4"></h1>
              <h1 className="animate-[fall_1s_ease-out_normal]">G</h1>
              <h1 className="animate-[fall_4s_ease-out_normal]">a</h1>
              <h1 className="animate-[fall_3s_ease-out_normal]">m</h1>
              <h1 className="animate-[fall_2s_ease-out_normal]">l</h1>
              <h1 className="animate-[fall_3s_ease-out_normal]">a</h1>
              <h1 className="animate-[fall_1s_ease-out_normal]">t</h1>
              <h1 className="animate-[fall_4s_ease-out_normal]">h</h1>
            </div>
            <h2 className="text-xl lg:text-2xl xl:text-3xl mt-2 lg:mt-4 text-white text-center">
              Senior Software Engineer
            </h2>
            <div className="flex justify-around mt-2 lg:mt-4 xl:mt-6">
              <a href="https://github.com/66kesara99">
                <button className="rounded-full border-2 border-white w-12 h-12 xl:w-14 xl:h-14 transition ease-in-out hover:scale-125 mx-2">
                  <StaticImage
                    className="w-8"
                    src="../images/github.png"
                    alt="Github profile"
                    layout="constrained"
                  />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/66kesara99/">
                <button className="rounded-full border-2 border-white w-12 h-12 xl:w-14 xl:h-14 transition ease-in-out hover:scale-125 mx-2">
                  <StaticImage
                    className="w-8"
                    src="../images/linkedin.png"
                    alt="Linkedin profile"
                    layout="constrained"
                  />
                </button>
              </a>
              <a href="https://www.hackerrank.com/66kesara99">
                <button className="rounded-full border-2 border-white w-12 h-12 xl:w-14 xl:h-14 transition ease-in-out hover:scale-125 mx-2">
                  <StaticImage
                    className="w-10"
                    src="../images/hackerrank.png"
                    alt="Hackerrank profile"
                    layout="constrained"
                  />
                </button>
              </a>
              <a href="tel:+94774473379">
                <button className="rounded-full border-2 border-white w-12 h-12 xl:w-14 xl:h-14 transition ease-in-out hover:scale-125 mx-2">
                  <StaticImage
                    className="w-5"
                    src="../images/call.png"
                    alt="Contact number"
                    layout="constrained"
                  />
                </button>
              </a>
              <a href="m&#97;&#105;&#108;to&#58;6&#54;&#107;e&#115;&#97;ra99&#64;&#103;m&#97;i&#108;&#46;co&#109;">
                <button className="rounded-full border-2 border-white w-12 h-12 xl:w-14 xl:h-14 transition ease-in-out hover:scale-125 mx-2">
                  <StaticImage
                    className="w-8"
                    src="../images/email.png"
                    alt="Email"
                    layout="constrained"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
