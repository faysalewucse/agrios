import farmer from "../../assets/farmer.webp";
import martin from "../../assets/martin-luther-king.svg";
import Container from "../../shared/Container";
import { BsCheckLg, BsTriangleFill } from "react-icons/bs";
import Button from "../../components/Button";

const FarmBenifits = () => {
  return (
    <div className="p-10 relative">
      <Container>
        <div className="lg:flex items-center gap-16">
          <div className="relative md:w-1/2">
            <div className="absolute -z-10 -left-5 top-1/2 -translate-y-1/2 h-3/4 bg-primary w-40"></div>
            <div className="absolute -right-10 top-1/2 -translate-y-1/6 bg-secondary flex md:w-4/6 p-5 rounded-md">
              <img className="w-24" src={martin} alt="martin" />
              <h6 className="text-white">Agriculture Professional Leader</h6>
              <BsTriangleFill className="rotate-180 text-secondary absolute text-4xl -bottom-7 right-0" />
            </div>
            <img className="rounded-xl" src={farmer} alt="farmer" />
          </div>
          <div className="lg:mt-0 mt-10 flex-1">
            <h5 className="font-cursive text-secondary">Our Farm Benefits</h5>
            <h2 className="font-semibold">Why Choose Agrios Market</h2>
            <p className="my-5 text-dark/60">
              There are many variations of passages of available but the
              majortity have sufferred alteration in some form by injected humor
              or random word which don't look even.
            </p>

            <ul className="flex flex-col gap-5 my-10">
              <div className="flex items-center gap-5">
                <BsCheckLg className="bg-primary text-5xl p-2 rounded-full text-white" />
                <div className="flex-1">
                  <h5 className="font-semibold">Quality Organic Food</h5>
                  <p className="text-dark/60">
                    There are variation You need to be sure there is anything
                    hidden in the middle of text.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <BsCheckLg className="bg-secondary text-5xl p-2 rounded-full text-white" />
                <div className="flex-1">
                  <h5 className="font-semibold">Quality Organic Food</h5>
                  <p className="text-dark/60">
                    There are variation You need to be sure there is anything
                    hidden in the middle of text.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <BsCheckLg className="bg-lime-400 text-5xl p-2 rounded-full text-white" />
                <div className="flex-1">
                  <h5 className="font-semibold">Quality Organic Food</h5>
                  <p className="text-dark/60">
                    There are variation You need to be sure there is anything
                    hidden in the middle of text.
                  </p>
                </div>
              </div>
            </ul>

            <Button style="my-5">Discover More</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FarmBenifits;
