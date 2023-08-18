import React from "react";
import Container from "../../shared/Container";
import Button from "../../components/Button";
import TestimonialCard from "../../components/cards/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="bg-secondary/5 p-10">
      <Container>
        <h4 className="font-cursive text-secondary">Our Testimonials</h4>
        <h2 className="font-semibold">What They're Talking About Agrios</h2>
        <p className="my-5">
          There are many variations of passages of available but the majortity
          have sufferred alteration in some form by injected humor or random
          word which don't look even.
        </p>
        <Button style="text-white">View All Testimonials</Button>

        <div className="my-5">
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
