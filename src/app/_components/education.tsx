import Image from "next/image";
import MeowText from "./meow-text";

export default function Education() {
  return (
    <div className="mx-9 flex flex-col gap-6 mt-10">
      <h1 className="text-left text-5xl text-slate-300">
        <MeowText>Education</MeowText>
      </h1>
      <div className="flex items-center gap-4">
        <Image
          height={100}
          width={100}
          src="/images/education/peradeniya.png"
          alt="university of peradeniya"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">M.Sc. in Computer Science</h2>
          <p>
            Postgraduate Institute of Science (PGIS), University of Peradeniya
          </p>
          <p className="text-sm">GPA: 3.89/4.00</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Image
          height={100}
          width={100}
          src="/images/education/peradeniya.png"
          alt="university of peradeniya"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">B.Sc. in Computer Engineering</h2>
          <p>Faculty of Engineering, University of Peradeniya</p>
          <p className="text-sm">GPA: 3.90/4.00</p>
        </div>
      </div>
    </div>
  );
}
