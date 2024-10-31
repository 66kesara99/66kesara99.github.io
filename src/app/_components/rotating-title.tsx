"use client";

import HyperText from "@/ui/hyper-text";
import { useEffect, useState } from "react";

const TITLES = ["Full Stack Developer", "UI Designer", "Photographer"];

export default function RotatingTitle() {
  const [title, setTitle] = useState(TITLES[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTitle(TITLES[index]);
      index = (index + 1) % TITLES.length;
    }, 2000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-xl lg:text-2xl xl:text-3xl mt-2 lg:mt-4">
      <HyperText text={title} className="text-black bg-white" />
    </div>
  );
}
