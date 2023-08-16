import service1 from "../../assets/services/service-01.webp";
import service2 from "../../assets/services/service-02.webp";
import service3 from "../../assets/services/service-03.webp";
import service4 from "../../assets/services/service-04.webp";
import Container from "../../shared/Container";
import OfferCard from "../../components/cards/OfferCard";

const Services = () => {
  return (
    <div className="relative bg-secondary/5 p-20 text-center">
      <Container>
        <h5 className="text-secondary font-cursive">Our Services</h5>
        <h3 className="font-semibold">What We Offer</h3>
        <div className="-mb-48 mt-10 flex gap-5">
          <OfferCard image={service1} />
          <OfferCard image={service2} />
          <OfferCard image={service3} />
          <OfferCard image={service4} />
        </div>
      </Container>
    </div>
  );
};

export default Services;
