/* eslint-disable react/prop-types */
const Card = ({ title, buttonText, description, image }) => {
  return (
    <div>
      <div className="icon">
        <img src={image} alt="" />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default Card;
