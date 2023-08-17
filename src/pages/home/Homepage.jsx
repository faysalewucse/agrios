import Features from "./Features";
import Info from "./Info";
import Introductions from "./Introductions";
import Services from "./Services";
import Video from "./Video";

const Homepage = () => {
  return (
    <div className="bg-dark/5">
      <Features />
      <Introductions />
      <Services />
      <Info />
      <Video />
    </div>
  );
};

export default Homepage;
