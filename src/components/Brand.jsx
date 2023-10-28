import brand from "../assets/logo.jpg";
import brandW from "../assets/logo.png";

const Brand = ({ white }) => {
  return (
    <img
      className={white ? "w-20" : "w-24"}
      src={white ? brandW : brand}
      alt="brand"
    />
  );
};

export default Brand;
