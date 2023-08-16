const FeatureCard = ({ feature, description, icon }) => {
  return (
    <div className="relative bg-white rounded-lg text-center p-10 shadow-lg">
      <h5 className="font-cursive text-secondary">Feature</h5>
      <h6 className="w-1/2 mx-auto font-semibold mb-10">
        We're using a new technology{" "}
      </h6>
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-7xl bg-primary text-white mx-auto p-3 rounded-xl">
        {icon}
      </div>
    </div>
  );
};

export default FeatureCard;
