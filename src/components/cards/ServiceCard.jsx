import Button from "../Button";

const OfferCard = ({ image, icon, hover, afterHover }) => {
  return (
    <div className={`${hover} relative`}>
      <div
        className={`relative flex items-center justify-center overflow-hidden h-96 rounded-xl`}
      >
        <img className="zoom-image" src={image} alt="service" />
      </div>
      <div className="bg-white absolute rounded-lg -bottom-10 left-1/2 -translate-x-1/2 p-5 shadow-lg w-3/4 font-bold">
        <img
          className="w-1/2 bg-primary p-3 rounded-md mx-auto -mt-20 mb-5"
          src={icon}
          alt="icon_logo"
        />
        Agriculture Products
      </div>
      <Button
        style={`-z-10 absolute left-1/2 md:-translate-x-3 lg:-translate-x-5 -translate-x-2 translate-y-0 ${afterHover} text-white transition-300`}
      >
        Read More
      </Button>
    </div>
  );
};

export default OfferCard;
