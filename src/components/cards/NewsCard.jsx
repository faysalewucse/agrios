import { BsChatDotsFill, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { cover, publishedDate, writer, comments, title } = news;
  return (
    <div className="shadow-xl hover:scale-105 transition-200">
      <div className="group/project relative h-80">
        <img
          className="rounded-t-2xl h-full object-cover"
          src={cover}
          alt="project"
        />
        <h6 className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white w-fit mx-auto py-2 px-6 rounded-md">
          {publishedDate}
        </h6>
      </div>
      <div className="p-10 text-center">
        <div className="mb-5 flex items-center justify-center gap-5">
          <div className="flex items-center gap-1">
            <BsPersonCircle className="bg-secondary text-white text-lg p-1 rounded-full" />
            <small>{writer}</small>
          </div>
          <div className="flex items-center gap-1">
            <BsChatDotsFill className="text-secondary text-2xl p-1 rounded-full" />
            <small>{comments} Comment</small>
          </div>
        </div>
        <Link
          to="/news/newsId"
          className="hover:text-primary text-3xl font-semibold"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
