import PageBanner from "../components/PageBanner";
import Container from "../shared/Container";
import Services from "./home/Services";

const ServicesPage = () => {
  return (
    <div>
      <PageBanner title={"SERVICES"} path={`HOME / NEWS / SERVICES`} />
      <Services />
      <div className="mb-60"></div>
    </div>
  );
};

export default ServicesPage;
