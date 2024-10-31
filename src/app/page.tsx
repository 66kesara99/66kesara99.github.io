import { cn } from "@/lib/utils";
import LinkButton from "./_components/link-button";
import RotatingTitle from "./_components/rotating-title";
import TiltingProfile from "./_components/tilting-profile";

import { Meow_Script } from "next/font/google";

const meowScript = Meow_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col justify-center m-auto gap-8">
      <div className="flex justify-center">
        <TiltingProfile />
      </div>
      <div className="my-auto mx-9 flex flex-col">
        <h3
          className={cn(
            "text-left text-3xl md:text-4xl xl:text-5xl text-slate-300",
            meowScript.className
          )}
        >
          Hi, I&apos;m
        </h3>
        <div className="ml-10">
          <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white flex mt-1 md:mt-4">
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
          <RotatingTitle />
        </div>

        <div className="flex justify-around mt-6 lg:mt-10 xl:mt-12">
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
  );
}
