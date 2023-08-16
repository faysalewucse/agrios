import FeatureCard from "../../components/cards/FeatureCard";
import Container from "../../shared/Container";
import { FaTruckMonster } from "react-icons/fa";
import { LuPalmtree } from "react-icons/lu";
import { GiFarmer } from "react-icons/gi";

const Features = () => {
  return (
    <div className="">
      <Container>
        <div className="p-8 md:flex-row flex flex-col md:gap-5 gap-20">
          <FeatureCard icon={<FaTruckMonster />} />
          <FeatureCard icon={<LuPalmtree />} />
          <FeatureCard icon={<GiFarmer />} />
        </div>
      </Container>
    </div>
  );
};

export default Features;
