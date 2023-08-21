import PageBanner from "../components/PageBanner";
import Container from "../shared/Container";
import img from "../assets/project1.webp";
import SocialMedia from "../components/SocialMedia";
import { BsArrowRight } from "react-icons/bs";
import HeaderSection from "../components/HeaderSection";
import Projects from "./home/Projects";

const ProjectDetails = () => {
  const project = {
    services: "Healthy Food",
    farmerName: "Mike Hardsone",
    duration: 4.5,
    location: "Broklyn, New York",
  };
  return (
    <div className="bg-dark/5">
      <PageBanner title={"PROJECT DETAILS"} path={"HOME / HEALTHY FOOD"} />
      <Container>
        <div className="lg:p-20 md:p-10 p-5">
          <img className="rounded-lg" src={img} alt="service" />
          <div className="my-10 bg-white p-10 rounded-xl border-t-4 border-secondary shadow-md">
            <p className="text-dark/80">Services:</p>
            <p className="text-dark font-semibold mb-5">{project.services}</p>
            <p className="text-dark/80">Farmer:</p>
            <p className="text-dark font-semibold mb-5">{project.farmerName}</p>
            <p className="text-dark/80">Duration:</p>
            <p className="text-dark font-semibold mb-5">{project.duration}</p>
            <p className="text-dark/80">Location:</p>
            <p className="text-dark font-semibold mb-5">{project.location}</p>
            <SocialMedia />
          </div>
          <h4 className="font-semibold">{project.services}</h4>
          <p className="my-5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            magnam, vel suscipit ad ratione saepe numquam perferendis dolor
            voluptatum deserunt quidem facere voluptates ex tempora dolorem
            dignissimos vitae assumenda maiores illo! Blanditiis, libero
            doloribus aperiam suscipit, delectus illo dolor modi odio deleniti
            velit optio odit, quo ratione a distinctio possimus rerum quas esse
            maxime ab ullam sequi laudantium amet reprehenderit. Atque ratione
            dolore, quam necessitatibus inventore cumque autem quisquam esse
            possimus! Libero aspernatur maiores earum nihil dolorum ipsam sequi
            odio maxime quo odit repellat sint assumenda, iure omnis corporis,
            error accusamus. Quis ullam voluptas, esse quasi voluptatum ducimus
            et obcaecati.
          </p>

          <h4 className="font-semibold">Challanges</h4>
          <ul className="my-5">
            <b className="flex items-center gap-3">
              <BsArrowRight className="bg-secondary rounded-full text-xl p-1 text-white" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </b>
            <b className="flex items-center gap-3">
              <BsArrowRight className="bg-secondary rounded-full text-xl p-1 text-white" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </b>
            <b className="flex items-center gap-3">
              <BsArrowRight className="bg-secondary rounded-full text-xl p-1 text-white" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </b>
            <b className="flex items-center gap-3">
              <BsArrowRight className="bg-secondary rounded-full text-xl p-1 text-white" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </b>
          </ul>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            vel! Quos ab corrupti dolore, minima recusandae facere voluptates
            odio qui unde mollitia, incidunt, voluptatem deserunt vitae
            possimus. Possimus, magni sunt!
          </p>
        </div>

        {/* <HeaderSection
          smallTitle={"Recently Completed"}
          bigTitle={"Similar Projects"}
        /> */}

        <div className="my-10">
          <Projects />
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
