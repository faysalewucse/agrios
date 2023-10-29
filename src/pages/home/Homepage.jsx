import Banner from "./Banner";
import FarmBenifits from "./FarmBenifits";
import Features from "./Features";
import Info from "./Info";
import Introductions from "./Introductions";
import NewsArticle from "./NewsArticle";
import Partners from "./Partners";
import Projects from "./Projects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Video from "./Video";

const Homepage = () => {
  return (
    <div className="bg-dark/5">
      <Banner />
      <Features />
      <Introductions />
      {/* <Services /> */}
      {/* <Info /> */}
      {/* <Video /> */}
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      {/* <FarmBenifits /> */}
      {/* <NewsArticle /> */}
      {/* <Partners /> */}
    </div>
  );
};

export default Homepage;
