import { BsQuote, BsStarFill } from "react-icons/bs";
import avatar from "../../assets/avatar-02.webp";

const TestimonialCard = () => {
  return (
    <div className="flex px-10 py-14 bg-white rounded-xl mt-5">
      <div className="flex-1">
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi,
          ducimus incidunt qui sapiente perferendis similique a assumenda
          inventore praesentium!
        </h6>
        <div className="flex items-center justify-between mt-5">
          <h4>John Doe</h4>
          <div className="text-secondary flex items-center gap-1">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-36 border-2 border-orange-400 border-dashed p-2 h-36 rounded-full object-cover"
          src={avatar}
          alt="avatar"
        />
        <BsQuote className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-white text-5xl p-3 rounded-full bg-primary rotate-180" />
      </div>
    </div>
  );
};

export default TestimonialCard;
