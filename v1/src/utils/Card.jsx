/* eslint-disable react/prop-types */
const Card = ({ title, buttonText, description, image }) => {
  return (
    <div className=" py-[30px] px-[20px] | bg-white text-[#111111] ">
      <div className=" w-[5rem] | icon bg-colorPrimary  p-4 rounded-[999px]">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <h4 className="font-montserrat text-[20px] font-bold mt-[23px]">
        {title}
      </h4>
      <p className="mt-[17px] ">{description}</p>
      <button className=" text-[14px] uppercase border-b border-b-colorPrimary mt-[16px]1">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
