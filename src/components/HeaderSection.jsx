const HeaderSection = ({ smallTitle, bigTitle }) => {
  return (
    <div className="text-center">
      <h5 className="font-cursive text-secondary">{smallTitle}</h5>
      <h2 className="font-bold">{bigTitle}</h2>
    </div>
  );
};

export default HeaderSection;
