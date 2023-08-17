import grass from "../../assets/services/grass.png";
import Container from "../../shared/Container";

const Info = () => {
  return (
    <div className="mt-52 p-10">
      <Container>
        <div className="relative bg-primary p-16 rounded-lg grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-16">
          <img
            className="absolute bottom-0 opacity-30"
            src={grass}
            alt="grass"
          />
          <div className="text-white text-center">
            <h1 className="font-cursive tracking-wider">6420</h1>
            <h6 className="mt-2">Agriculture Product</h6>
          </div>
          <div className="text-white text-center">
            <h1 className="font-cursive tracking-wider">8800</h1>
            <h6 className="mt-2">Project Completed</h6>
          </div>
          <div className="text-white text-center">
            <h1 className="font-cursive tracking-wider">9280</h1>
            <h6 className="mt-2">Satisfied Clients</h6>
          </div>
          <div className="text-white text-center">
            <h1 className="font-cursive tracking-wider">1800</h1>
            <h6 className="mt-2">Expert Farmers</h6>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Info;
