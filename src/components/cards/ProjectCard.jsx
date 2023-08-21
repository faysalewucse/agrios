import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ image, projectName, shortDesc }) => {
  const navigate = useNavigate();

  return (
    <div className="group/project relative h-[70vh]">
      <img
        className="rounded-2xl h-full object-cover"
        src={image}
        alt="project"
      />
      <div className="rounded-2xl absolute top-0 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute font-semibold bottom-5 left-5 text-white flex flex-col gap-3">
        <h3 className="w-1/2 transition-300 group-hover/project:opacity-100 mb-5">
          {projectName}
        </h3>
        <p className="opacity-0 transition-300 group-hover/project:opacity-100 group-hover/project:mb-5 -mb-16 text-white text-xs font-normal">
          {shortDesc}
        </p>
      </div>
      <BsArrowRight
        onClick={() => navigate("/project/projectId")}
        className="group-hover/project:opacity-100 transition-300 opacity-0 absolute top-5 right-5 bg-white text-6xl p-5 rounded-full"
      />
    </div>
  );
};

export default ProjectCard;
