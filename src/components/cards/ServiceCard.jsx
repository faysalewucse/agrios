import Button from "../Button";

const OfferCard = ({ image, hover, afterHover }) => {
  return (
    <div className={`${hover} relative bg-white`}>
      <img
        className="rounded-lg hover:scale-105 transition-300 w-full h-full object-cover"
        src={image}
        alt="service"
      />
      <div className="bg-white absolute rounded-lg -bottom-10 left-1/2 -translate-x-1/2 p-5 shadow-lg">
        Agriculture Products
      </div>
      <Button style={`${afterHover} text-white mt-0 transition-300`}>
        Read More
      </Button>
    </div>
  );
};

export default OfferCard;
