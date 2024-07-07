import reach from "../../../assets/reach.svg";
import earnings from "../../../assets/earnings.svg";
import schedule from "../../../assets/schedule.svg";
const Services = () => {
  return (
    <section className="px-5 mt-36 w-full max-w-[1312px] max-md:mt-10 max-md:max-w-full">
      <h2 className="mb-8 text-3xl font-bold text-center text-midnightBlue">
        Why Tutor With Us?
      </h2>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center text-center grow max-md:mt-10">
            <div className="flex flex-col items-center pt-10 pb-16 bg-white border border-gray-300 border-solid px-11 rounded-3xl max-md:px-5">
              <img
                loading="lazy"
                src={schedule}
                className="aspect-square w-[72px]"
              />
              <div className="mt-8 text-2xl font-bold text-gray-950">
                Flexible Schedule
              </div>
              <div className="self-stretch text-lg leading-7 text-gray-700 mt-7">
                Set your own hours and work from anywhere, as long as you have
                an internet connection.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center text-center grow max-md:mt-10">
            <div className="flex flex-col bg-white border border-gray-300 border-solid px-14 py-9 rounded-3xl max-md:px-5">
              <img
                loading="lazy"
                src={earnings}
                className="self-center aspect-square w-[72px]"
              />
              <div className="mt-8 text-2xl font-bold text-slate-950">
                Competitive Earnings
              </div>
              <div className="mt-5 text-lg leading-7 text-gray-700">
                Our competitive compensation model ensures you are fairly
                rewarded for your time and expertise.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center text-center grow max-md:mt-10">
            <div className="flex flex-col items-center px-6 bg-white border border-gray-300 border-solid py-9 rounded-3xl max-md:px-5">
              <img
                loading="lazy"
                src={reach}
                className="aspect-square w-[72px]"
              />
              <div className="mt-8 text-2xl font-bold text-gray-950">
                Global Reach
              </div>
              <div className="self-stretch text-lg leading-7 text-gray-700 mt-7">
                Connect with students from diverse backgrounds and cultures,
                expanding your network and enriching your teaching experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
