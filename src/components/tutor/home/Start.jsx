import start from "../../../assets/StartJourney.svg";
import Button from "../../common/button/Button.jsx";
const StartJourney = () => {
  return (
    <div className="flex gap-5 mt-32 mb-24 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
          <div className="text-3xl font-bold text-black max-md:max-w-full">
            Ready to embark on an exciting <br />
            journey as an online tutor?
          </div>
          <p className="mt-5 mb-8 text-lg leading-7 text-gray-950 max-md:max-w-full">
            Sign up to complete our application process and join our community
            of dedicated educators. Our team will review your qualifications and
            guide you through the next steps.
          </p>
          <Button width="w-fit" value="Get Started" />
        </div>
      </div>
      <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src={start}
          className="grow w-full aspect-[1.69] fill-[url(<path-to-image>)_lightgray_-237.363px_-37px_/_140.425%_134.031%_no-repeat] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default StartJourney;
