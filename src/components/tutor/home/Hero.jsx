import tutorHero from "../../../assets/tutorHero.png";
const Hero = () => {
  return (
    <div className="mt-6 w-full max-w-[1292px] max-md:max-w-full">
      <h1 className="text-6xl font-bold text-center mt-28 text-midnightBlue max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Become a Tutor
      </h1>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto text-center md:text-left text-gray-950 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-bold max-md:max-w-full">
              Share Your Knowledge <br />
              and Inspire Learners
            </h2>
            <p className="mt-8 text-lg leading-7 max-md:max-w-full">
              We believe in the power of education to transform lives. Our
              platform connects passionate educators with students eager to
              learn and grow. By becoming a tutor with us, you have the
              opportunity to make a meaningful impact and share your expertise
              with learners from around the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={tutorHero}
            className="w-full max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
