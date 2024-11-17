import Education from "./_components/education";
import Experience from "./_components/experience";
import Footer from "./_components/footer";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <div className="container flex flex-col gap-10">
      <Hero />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}
