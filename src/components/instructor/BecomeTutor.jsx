import Button from "../button/Button";
import tutorImg from "../../assets/become tutor.jpeg";
const BecomeTutor = () => {
  return (
    <div className="relative grid items-center grid-cols-2 gap-16 py-4">
      <div className="">
        <h2 className="text-[40px] font-bold text-midnightBlue">
          Become an Instructor
        </h2>
        <div className="mt-6 text-xl leading-9 text-gray-600">
          Join us in shaping the future of education and become part of a
          supportive network of educators dedicated to empowering learners
          worldwide. Together, let's create an engaging and transformative
          learning experience.
        </div>
        <div className="mt-16">
          <Button value="Start Your Teaching Journey Now" to="/tutor" />
        </div>
      </div>
      <div>
        <img
          src={tutorImg}
          className="h-[550px] transform scale-x-[-1] object-cover rounded-r-full"
        />
      </div>
    </div>
  );
};

export default BecomeTutor;
