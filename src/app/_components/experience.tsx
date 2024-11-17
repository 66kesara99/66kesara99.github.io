import Image from "next/image";
import MeowText from "./meow-text";

export default function Experience() {
  return (
    <div className="mx-9 flex flex-col gap-6">
      <h1 className="text-left text-5xl text-slate-300">
        <MeowText>Experience</MeowText>
      </h1>
      <div className="flex items-center gap-4">
        <Image
          height={100}
          width={100}
          src="/images/experience/rhino-partners.png"
          alt="rhino partners"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Rhino Partners</h2>
          <p>Technical Lead</p>
          <p className="text-sm">June 2021 - Present</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Image
          height={100}
          width={100}
          src="/images/experience/sph-logo.png"
          alt="singapore press holdings"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Singapore Press Holdings</h2>
          <p>Frontend Engineer - Contract</p>
          <p className="text-sm">October 2023 - Present</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Image
          height={100}
          width={100}
          src="/images/experience/accenture.png"
          alt="accenture"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Accenture (Singapore)</h2>
          <p>Frontend Lead - Contract</p>
          <p className="text-sm">June 2021 - October 2023</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Image
          height={100}
          width={100}
          src="/images/experience/zone-24x7.png"
          alt="zone24x7"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Zone 24x7</h2>
          <p>Software Engineer</p>
          <p className="text-sm">March 2019 - June 2021</p>
        </div>
      </div>
    </div>
  );
}
