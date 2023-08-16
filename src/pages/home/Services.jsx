import service1 from "../../assets/services/service-01.webp";
import service2 from "../../assets/services/service-02.webp";
import service3 from "../../assets/services/service-03.webp";
import service4 from "../../assets/services/service-04.webp";
import Container from "../../shared/Container";
import ServiceCard from "../../components/cards/ServiceCard";

const Services = () => {
  return (
    <div className=" bg-secondary/5 p-20 text-center">
      <Container>
        <h5 className="text-secondary font-cursive">Our Services</h5>
        <h3 className="font-semibold">What We Offer</h3>
        <div className="-mb-48 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center lg:gap-5 md:gap-24  gap-32">
          <ServiceCard
            image={service1}
            hover={"group/service1"}
            afterHover={"group-hover/service1:translate-y-10"}
          />
          <ServiceCard
            image={service2}
            hover={"group/service2"}
            afterHover={"group-hover/service2:translate-y-10"}
          />
          <ServiceCard
            image={service3}
            hover={"group/service3"}
            afterHover={"group-hover/service3:translate-y-10"}
          />
          <ServiceCard
            image={service4}
            hover={"group/service4"}
            afterHover={"group-hover/service4:translate-y-10"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Services;
