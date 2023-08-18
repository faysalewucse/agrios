import FarmBenifits from "./FarmBenifits";
import Features from "./Features";
import Info from "./Info";
import Introductions from "./Introductions";
import NewsArticle from "./NewsArticle";
import Projects from "./Projects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Video from "./Video";

const Homepage = () => {
  return (
    <div className="bg-dark/5">
      <Features />
      <Introductions />
      <Services />
      <Info />
      <Video />
      <Projects />
      <Testimonials />
      <FarmBenifits />
      <NewsArticle />
    </div>
  );
};

export default Homepage;
