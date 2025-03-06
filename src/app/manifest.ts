import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kesara Gamlath Portfolio",
    short_name: "Kesara Gamlath",
    description: "Kesara Gamlath. A Full Stack Web Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
