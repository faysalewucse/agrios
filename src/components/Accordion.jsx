import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div key={index}>
          <div
            className="flex justify-between items-center bg-cream py-2 pl-4 rounded-md cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h6 className="font-semibold">
              World’s hottest destinations for vegans
            </h6>
            <div className="bg-primary p-2 rounded-md text-4xl text-white">
              <BiChevronRight
                className={` transform ${
                  activeIndex === index ? "rotate-90" : "rotate-0"
                } transition-transform duration-300`}
              />
            </div>
          </div>
          <p
            className={`p-4 text-dark/70 ${
              activeIndex !== index
                ? "max-h-0 opacity-0"
                : "max-h-[200px] opacity-100"
            } transition-max-height duration-1000`}
          >
            {item.children}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
