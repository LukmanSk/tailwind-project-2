import heroBg from "../assets/hero-bg.jpg";
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero bg-colorPrimary">
      <div className="mx-auto flex flex-col md:flex-row lg:container">
        <div className="col order-2 md:order-1 w-full flex items-end">
          <img className="h-full w-full object-cover" src={heroBg} alt="" />
        </div>
        <div className="col order-1 w-full  py-10 px-4 flex items-center">
          <div className="text-content px-[30px] ">
            <h2 className="font-titillium text-[30px] font-bold leading-[30px] md:leading-[1] md:text-[48px]">
              Reliable, Trusted, and Professional Services
            </h2>
            <p className="img-credit mt-[30px]">
              Image from <span className="underline">Freepik</span>
            </p>
            <div className="list grid grid-cols-1 gap-3 md:grid-cols-2 py-[30px]">
              <div className="flex items-center gap-2">
                <FaCheckCircle />
                <h6>Office</h6>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle />
                <h6>Office</h6>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle />
                <h6>Office</h6>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle />
                <h6>Office</h6>
              </div>
            </div>
            <button className="py-[17px] px-[60px] uppercase border border-[transparent] bg-[#000] text-white inline-block |  hover:border hover:border-black hover:text-black hover:bg-transparent">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
