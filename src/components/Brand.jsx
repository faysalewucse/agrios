import brand from "/brand.png";
import brandW from "/brandW.webp";

const Brand = ({ white }) => {
  return (
    <img
      className={white ? "w-52" : "w-40"}
      src={white ? brandW : brand}
      alt="brand"
    />
  );
};

export default Brand;
