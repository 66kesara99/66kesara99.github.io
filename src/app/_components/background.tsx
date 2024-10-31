import Particles from "@/ui/particles";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Background({ children }: Props) {
  return (
    <div className="relative flex py-10 min-h-screen w-full flex-col items-center justify-center rounded-lg bg-background md:shadow-xl">
      <span className="z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text dark:from-white dark:to-slate-900/10">
        {children}
      </span>
      <Particles
        className="fixed inset-0"
        quantity={1000}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </div>
  );
}
