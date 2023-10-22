/* eslint-disable react/no-unescaped-entities */
import whatsappIcon from "../assets/whatsapp-icon.png";
import chatIcon from "../assets/chat-icon.png";
const Contact = () => {
  return (
    <section className="contact bg-[#1a1a1a]">
      <div className="wrapper container mx-auto  py-14 px-4 text-center">
        <div className=" text-white flex flex-col lg:flex-row  gap-4 ">
          <div className="item w-full flex flex-col justify-end | px-4 py-10 ">
            <h4 className="text-[30px] font-bold font-titillium capitalize">
              Email Us
            </h4>
            <p className="text-[18px] mt-[20px]">
              Email us using our simple form and we'll respond within 10 working
              days.
            </p>
            <form className="flex flex-col gap-4 mt-[20px]">
              <input
                className="bg-[#e5e5e5] py-[15px] px-[12px]"
                type="email"
                placeholder="Enter Your Email"
              />
              <button className="py-[15px] bg-colorPrimary text-black uppercase font-bold tracking-wider text-[16px]">
                Submit
              </button>
            </form>
          </div>
          <div className="item w-full justify-end | px-4 py-10 flex flex-col items-center ">
            <div className="icon">
              <img src={whatsappIcon} alt="" />
            </div>
            <h4 className="mt-[15px] | text-[30px] font-bold font-titillium capitalize">
              Whatsapp Support
            </h4>
            <p className="text-[18px] mt-[20px]">
              Add us on WhatsApp & send queries for instant reply.
            </p>

            <button className="py-[15px] w-[80%] mt-[20px] bg-colorPrimary text-black uppercase font-bold tracking-wider text-[16px]">
              +12-345-678-89089
            </button>
          </div>
          <div className="item w-full justify-end | px-4 py-10 flex flex-col items-center  ">
            <div className="icon">
              <img src={chatIcon} alt="" />
            </div>
            <h4 className="mt-[15px] | text-[30px] font-bold font-titillium capitalize">
              Live Chat
            </h4>
            <p className="text-[18px] mt-[20px]">
              The fastest way to get in touch with an Expert
            </p>

            <button className="py-[15px] w-[80%] mt-[20px] bg-colorPrimary text-black uppercase font-bold tracking-wider text-[16px]">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
