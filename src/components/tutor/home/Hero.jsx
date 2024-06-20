const Hero = () => {
  return (
    <section className="my-12">
      <h1 className="mb-8 text-4xl font-bold text-center text-midnightBlue">
        Become a Tutor
      </h1>

      <div className="flex items-center justify-between gap-6">
        <div className="">
          <div className="text-3xl font-bold text-gray-950">
            Share Your Knowledge <br />
            and Inspire Learners
          </div>
          <p className="text-gray-950 text-lg font-normal font-['Poppins'] leading-[27px]">
            We believe in the power of education to transform lives. Our
            platform connects passionate educators with students eager to learn
            and grow. By becoming a tutor with us, you have the opportunity to
            make a meaningful impact and share your expertise with learners from
            around the world.
          </p>
        </div>
        <div>
          <img
            src="https://www.figma.com/file/HFruRPr296qjhAr2VDSxnY/image/31a94590b6b8fd65db33f538b2257f94aa7966de"
            alt="tutor img"
            className="shadow-inner"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
