import Features from "./Features";
import Introductions from "./Introductions";
import Services from "./Services";

const Homepage = () => {
  return (
    <div className="bg-dark/5">
      <Features />
      <Introductions />
      <Services />
    </div>
  );
};

export default Homepage;
