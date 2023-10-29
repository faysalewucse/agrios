import FeatureCard from "../../components/cards/FeatureCard";
import Container from "../../shared/Container";
import { FaTractor, FaHandshake } from "react-icons/fa";
import {AiOutlineAreaChart} from "react-icons/ai"

const Features = () => {
  return (
    <div className="">
      <Container>
        <div className="p-8 md:flex-row flex flex-col md:gap-5 gap-20">
          <FeatureCard 
          title="Manage Your Assets Seamlessly"
          description="From livestock and land to buildings and inventory, get a bird's eye view of all your assets in one place. Make data-driven decisions for better profitability." 
          icon={<FaTractor />}
           />
          <FeatureCard 
          title="Labor and Relationship Management"
          description="Handle everything from employee workloads to vendor relations under one roof. Keep track of labor costs, manage work orders, and maintain all your important contacts effortlessly." 
          icon={<FaHandshake />}
           />
          <FeatureCard
          title="Unbeatable Financial Insights"
          description="Automated Purchase Orders, real-time Profit & Loss reports, and an extensive chart of accounts to keep your financials in check. Never miss out on an opportunity to cut costs and increase your bottom line." 
          icon={<AiOutlineAreaChart />} 
          />
        </div>
      </Container>
    </div>
  );
};

export default Features;
