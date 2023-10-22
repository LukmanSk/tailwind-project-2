import Card from "../utils/Card";
import carpentyImg from "../assets/carpenty.png";

/* eslint-disable react/prop-types */
const Services = ({ heading }) => {
  return (
    <section className="services bg-colorDark text-white">
      <div className="wrapper">
        <div className="section__heading py-14 text-center font-titillium text-[36px] font-bold">
          <h2>{heading}</h2>
        </div>
        <div className="grid-container">
          {[...new Array(1)].map((_, i) => (
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
