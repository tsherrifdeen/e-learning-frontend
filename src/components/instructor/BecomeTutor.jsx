import Button from "../button/Button";
import becomeTutor from "../../assets/becomeTutor.png";
const BecomeTutor = () => {
  return (
    <div className="pl-16 bg-white max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-bold text-midnightBlue max-md:max-w-full">
              Become an Instructor
            </h2>
            <p className="my-8 text-2xl leading-9 text-gray-600 max-md:max-w-full">
              Join us in shaping the fut \ure of education and become part of a
              supportive network of educators dedicated to empowering learners
              worldwide. Together, let's create an engaging and transformative
              learning experience.
            </p>
            <Button
              value="
              Start Your Teaching Journey Now"
              url="/tutor"
            ></Button>
          </div>
        </div>
        <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={becomeTutor}
            className="grow w-full aspect-[1.11] fill-[url(<path-to-image>)_lightgray_172.939px_113px_/_96.551%_76.691%_no-repeat] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeTutor;
