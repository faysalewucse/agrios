import { Link } from "react-router-dom";

const SocialMediaIcon = ({ children }) => {
  return (
    <Link
      to="/"
      className="cursor-pointer bg-cream p-3 rounded-full hover:bg-primary hover:text-white transition-all text-lg duration-200"
    >
      {children}
    </Link>
  );
};

export default SocialMediaIcon;
