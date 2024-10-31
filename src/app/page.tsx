import LinkButton from "./_components/link-button";
import TiltingProfile from "./_components/tilting-profile";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 h-screen pointer-events-none">
      <div className="flex h-screen w-screen bg-black bg-opacity-10">
        <div className="flex flex-wrap justify-center m-auto">
          <div className="pointer-events-auto">
            <TiltingProfile />
          </div>
          <div className="my-auto mx-9 pointer-events-auto">
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
              Full Stack Web Developer
            </h2>
            <div className="flex justify-around mt-2 lg:mt-4 xl:mt-6">
              <LinkButton
                href="https://github.com/66kesara99"
                src="/images/github.png"
                alt="Github profile"
              />
              <LinkButton
                href="https://www.linkedin.com/in/66kesara99"
                src="/images/linkedin.png"
                alt="Linkedin profile"
              />
              <LinkButton
                href="https://www.hackerrank.com/66kesara99"
                src="/images/hackerrank.png"
                alt="Hackerrank profile"
              />
              <LinkButton
                href="tel:+94774473379"
                src="/images/call.png"
                alt="Contact number"
                width="w-5"
              />
              <LinkButton
                href="m&#97;&#105;&#108;to&#58;6&#54;&#107;e&#115;&#97;ra99&#64;&#103;m&#97;i&#108;&#46;co&#109;"
                src="/images/email.png"
                alt="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
