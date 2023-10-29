import { FaLeaf, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Brand from "./Brand";
import SocialMedia from "./SocialMedia";
import UnderLine from "./UnderLine";
import img from "../assets/logo_bg.jpg";

import { Link } from "react-router-dom";
import { BsSend } from "react-icons/bs";
import Container from "../shared/Container";

const Footer = () => {
  const items = [
    {
      label: "About",
      path: "/",
    },
    {
      label: "Services",
      path: "/",
    },
    {
      label: "Our Projects",
      path: "/",
    },
    {
      label: "Meet the Farmers",
      path: "/",
    },
    {
      label: "Latest News",
      path: "/",
    },
    {
      label: "Contact",
      path: "/",
    },
  ];

  return (
    <div className="bg-dark text-white">
      <Container>
        <div className="p-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <Brand white />
            <p className="my-5 text-sm">
              © 2023 FARMS All Rights Reserved. Designed & Developed By Bartholomew Development LLC
            </p>
            <div className="text-dark">
              <SocialMedia />
            </div>
          </div>

          {/* explore */}
          {/* <div>
            <h6 className="font-semibold mb-2">Explore</h6>
            <UnderLine />
            <ul className="mt-5">
              {items.map((item) => (
                <div className="mb-2 flex items-center gap-1 text-cream/50 hover:text-cream transition-300">
                  <FaLeaf />
                  <Link to={item.path}>{item.label}</Link>
                </div>
              ))}
            </ul>
          </div> */}

          {/* news */}
          {/* <div>
            <h6 className="font-semibold mb-2">News</h6>
            <UnderLine />
            <div>
              <div className="mt-5 flex items-center gap-3">
                <img className="w-20 h-20 rounded-lg" src={img} alt="news" />
                <div className="flex-1">
                  <p className="text-lg font-semibold">
                    Bringing Food Production Back To Cities
                  </p>
                  <p className="text-secondary">July 5, 2022</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <img className="w-20 h-20 rounded-lg" src={img} alt="news" />
                <div className="flex-1">
                  <p className="text-lg font-semibold">
                    Bringing Food Production Back To Cities
                  </p>
                  <p className="text-secondary">July 5, 2022</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* news */}
          <div>
            <h6 className="font-semibold mb-2">Website</h6>
            <UnderLine />
            <div>
              <a target="_blank" href="https://bartholomewdevelopment.com/" className="mt-5 flex items-center gap-3">
                <img className="w-20 h-20 rounded-lg object-cover" src={img} alt="news" />
                <div className="flex-1">
                  <p className="text-lg font-semibold">
                    Bartholomew Development LLC
                  </p>
                  <p className="text-secondary">July 5, 2022</p>
                </div>
              </a>
            </div>
          </div>
          {/* Contact  */}
          <div>
            <h6 className="font-semibold mb-2">Contact</h6>
            <UnderLine />
            <p className="text-secondary mt-5 flex items-center gap-2">
              <FaPhoneAlt />
              801-380-6649
            </p>
            <p className="text-secondary mt-5 flex items-center gap-2">
              <MdEmail className="" />
              <p className="w-40">joseph@bartholomewdevelopment.com</p>
            </p>
            {/* <div className="flex items-center mt-5">
              <input
                type="text"
                className="p-3 rounded-l-xl w-full"
                placeholder="Your Email Address"
              />
              <button className="bg-primary p-4 rounded-r-xl">
                <BsSend />
              </button>
            </div> */}
          </div>
        </div>
      </Container>
      <div className="text-center md:text-left bg-dark2 p-5 md:flex items-center justify-between ">
        <p>© All Copyright 2023 by Bartholomew</p>
        <div className="flex items-center gap-1 justify-center md:justify-start">
          <Link className="text-cream/50 hover:text-cream">Terms of Use</Link>
          <hr className="border border-cream/50 h-4 w-0" />
          <Link className="text-cream/50 hover:text-cream">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
