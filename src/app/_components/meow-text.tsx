import { Meow_Script } from "next/font/google";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const meowScript = Meow_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function MeowText({ children }: Props) {
  return <span className={meowScript.className}>{children}</span>;
}
