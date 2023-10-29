const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="relative bg-white rounded-lg text-center py-8 px-8 shadow-lg">
      <h5 className="font-cursive text-secondary">{title}</h5>
      <h6 className="w-[100%] mx-auto font-semibold text-sm mb-10">
        {description}
      </h6>
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-7xl bg-primary text-white mx-auto p-3 rounded-xl">
        {icon}
      </div>
    </div>
  );
};

export default FeatureCard;
