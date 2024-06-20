import { useState } from "react";
import amico from "../../assets/amico.png";
import Button from "../button/Button";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = {};
  return (
    <section className="py-12">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <img src={amico} alt="subscribe" className="" />
        </div>
        <div className="w-1/2">
          <div className="mb-8">
            <h2 className="text-2xl mb-4 font-semibold">
              Join Our Learning Community
            </h2>
            <p className="text-gray-500 text-lg">
              Be a part of our vibrant learning community by subscribing to our
              newsletter, and stay updated with the latest news, course/product
              releases, and exclusive offers.
            </p>
          </div>
          <div className="flex justify-between border rounded-full p-3">
            <input type="text" placeholder="Your Email" value={email} />
            <Button value="subscribe" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
