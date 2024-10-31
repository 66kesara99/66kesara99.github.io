import Image from "next/image";

interface Props {
  href: string;
  src: string;
  alt: string;
  width?: string;
}

export default function LinkButton({ href, src, alt, width = "w-8" }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className="flex items-center justify-center rounded-full border-2 border-white w-12 h-12 xl:w-14 xl:h-14 transition ease-in-out hover:scale-125 mx-2">
        <Image className={width} src={src} alt={alt} width={10} height={10} />
      </button>
    </a>
  );
}
