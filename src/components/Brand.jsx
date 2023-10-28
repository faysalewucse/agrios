import brand from "../assets/logo.jpg";
import brandW from "/brandW.webp";

const Brand = ({ white }) => {
  return (
    <img
      className={white ? "w-52" : "w-24"}
      src={white ? brandW : brand}
      alt="brand"
    />
  );
};

export default Brand;
