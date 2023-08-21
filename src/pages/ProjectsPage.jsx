import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.jpg";
import img3 from "../assets/slider3.jpg";
import PageBanner from "../components/PageBanner";
import ProjectCard from "../components/cards/ProjectCard";
import Container from "../shared/Container";

const ProjectsPage = () => {
  return (
    <div>
      <PageBanner title={"PROJECTS"} path={"HOME / PROJECTS"} />
      <Container>
        <div className="grid grid-cols-2 md:p-10 p-5 lg:p-20 gap-10">
          <ProjectCard
            image={img3}
            projectName={"Ecological Farming"}
            shortDesc={
              "orem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, voluptatum."
            }
          />
          <ProjectCard
            image={img1}
            projectName={"Ecological Farming"}
            shortDesc={
              "orem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, voluptatum."
            }
          />
          <ProjectCard
            image={img1}
            projectName={"Ecological Farming"}
            shortDesc={
              "orem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, voluptatum."
            }
          />
          <ProjectCard
            image={img2}
            projectName={"Ecological Farming"}
            shortDesc={
              "orem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, voluptatum."
            }
          />
          <ProjectCard
            image={img1}
            projectName={"Ecological Farming"}
            shortDesc={
              "orem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, voluptatum."
            }
          />
          <ProjectCard
            image={img3}
            projectName={"Ecological Farming"}
            shortDesc={
              "orem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, voluptatum."
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default ProjectsPage;
