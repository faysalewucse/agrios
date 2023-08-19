import img from "../assets/bg-field.webp";

const PageBanner = ({ path, title }) => {
  return (
    <div className="relative">
      <img src={img} alt="banner" className="h-64 w-full object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 text-white text-center">
        <p>{path}</p>
        <h3 className="font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default PageBanner;
