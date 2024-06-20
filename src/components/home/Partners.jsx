import sigma from "../../assets/sigma partner.jpg";
const Partners = () => {
  return (
    <section className="py-10">
      <h2 className="mb-6 text-4xl font-bold text-center">
        <span className=" text-midnightBlue">Our </span>
        <span className="text-yellow">Partners</span>
      </h2>
      <div className="flex justify-center ">
        <div className="bg-zinc-300">
          <img
            src={sigma}
            alt="sigma"
            className="object-cover w-[202px] h-[116px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
