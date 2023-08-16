import Button from "../Button";

const OfferCard = ({ image }) => {
  return (
    <div className="relative bg-white">
      <img
        className="rounded-lg hover:scale-105 transition-300 w-full h-full object-cover"
        src={image}
        alt="service"
      />
      <div className="bg-white absolute rounded-lg -bottom-10 mx-5 p-5 shadow-lg">
        Agriculture Products
      </div>
      <Button>Read More</Button>
    </div>
  );
};

export default OfferCard;
