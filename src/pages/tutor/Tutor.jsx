import Hero from "../../components/tutor/home/Hero";
import Services from "../../components/tutor/home/Services";
import StartJourney from "../../components/tutor/home/Start";

const Tutor = () => {
  return (
    <main className="max-w-[1400px] mx-auto">
      <Hero />
      <Services />
      <StartJourney />
    </main>
  );
};

export default Tutor;
