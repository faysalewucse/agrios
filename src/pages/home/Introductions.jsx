import img from "../../assets/slider1.jpg";
import img2 from "../../assets/rounded2.png";
import Container from "../../shared/Container";
import Button from "../../components/Button";

const Introductions = () => {
  return (
    <Container>
      <div className="p-5 my-10 flex md:flex-row md:justify-center items-center flex-col gap-5">
        <div className="relative flex-1">
          <img
            src={img}
            alt="rounded"
            className="rounded-full lg:w-[600px] lg:h-[600px] h-96 w-96 mx-auto"
          />
          <img
            className="absolute lg:-left-20 left-0 top-1/2 -translate-y-1/2 lg:w-80 w-40"
            src={
              "https://tplabs.co/agrios/wp-content/uploads/2022/07/plants-02.svg"
            }
            alt=""
          />
          <img
            className="absolute left-10 bottom-0 md:-bottom-10 rounded-full object-cover border-8 border-white lg:w-80 lg:h-80 h-40 w-40"
            src={img2}
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <h5 className="font-cursive text-secondary">Our Introductions</h5>
          <h4 className="font-semibold lg:text-5xl mt-2 mb-5">
            Agriculture & Organic Product Farm
          </h4>
          <h5 className="text-primary font-semibold">
            Agrios is the largest global organic farm.
          </h5>
          <p className="my-5 leading-normal">
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected humor
            or random word which don’t look even.
          </p>
          <Button style="text-white">Discover More</Button>
        </div>
      </div>
    </Container>
  );
};

export default Introductions;
