import Card from "../utils/Card";
import carpentyImg from "../assets/carpenty.png";

/* eslint-disable react/prop-types */
const Services = ({ heading }) => {
  return (
    <section className="services  text-white | bg-colorDark | ">
      <div className="wrapper container mx-auto">
        <div className="section__heading px-4 py-14 text-center font-titillium text-[36px] font-bold">
          <h2>{heading}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 px-5 pb-14 gap-4">
          {[...new Array(4)].map((_, i) => (
            <Card
              key={i}
              title="Carpentry"
              description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
              image={carpentyImg}
              buttonText="more"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
