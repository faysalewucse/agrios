import Brand from "../Brand";
import paper from "../../assets/paper-bg.webp";
import { RiCloseLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { FiMail, FiPhoneCall } from "react-icons/fi";

import { BsCart3, BsMenuButton, BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SocialMedia from "../SocialMedia";
import Button from "../Button";
import { useAuth } from "../../contexts/AuthContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "News", path: "/news" },
  { label: "Shop", path: "/shop" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div
        className={`md:hidden absolute top-0 transition-300 bg-dark2 z-[999] ${
          sidebarOpen ? "w-[80vw]" : "w-0"
        }`}
      >
        {sidebarOpen && (
          <div className="p-10">
            <div className="">
              <RiCloseLine
                className="text-white text-4xl hover:text-primary transtion-200 ml-auto"
                onClick={() => setSidebarOpen(false)}
              />
              <div className="flex flex-col justify-between">
                <Brand white />
                <div className="mt-10 flex flex-col gap-5">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="text-white hover:text-white2 transition-all duration-200"
                    >
                      {item.label}
                      <hr className="border w-full border-dark mt-5" />
                    </Link>
                  ))}
                </div>
              </div>
              <p className="my-5 text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis cumque culpa ex modi obcaecati nobis.
              </p>
              <SocialMedia />
            </div>
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto md:p-8 p-5 flex items-center md:justify-between justify-center">
        <Brand />
        <div className="hidden md:block">
          <SocialMedia />
        </div>
        <div className="lg:flex gap-2 hidden">
          <div className="flex items-center gap-2">
            <FiPhoneCall className="text-primary text-4xl" />
            <div className="flex flex-col">
              <small>Call Anytime</small>
              <small>+98 000 9630</small>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-primary text-4xl" />
            <div className="flex flex-col">
              <small>Send Email</small>
              <small>ambed@agrios.com</small>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-primary text-4xl" />
            <div className="flex flex-col">
              <small>380 St Kilda Road</small>
              <small>Melbourne, Australia</small>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="z-30 absolute top-0 w-full flex items-center"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `Url(${paper})`,
          }}
        >
          <div className="max-w-7xl w-full px-5 mx-auto md:flex items-center justify-between pt-5 pb-8">
            <ul className="hidden md:flex items-center gap-5 text-white2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="hover:text-dark transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
            <div className="text-2xl text-dark/80 gap-3 flex items-center justify-between px-5">
              <hr className="hidden md:block border border-dark/20 w-4 rotate-90" />
              <BsSearch className="cursor-pointer" />
              <BsMenuButton
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden cursor-pointer"
              />
              <div className="relative">
                <BsCart3 className="cursor-pointer" />
                <p className="absolute -top-1 -right-1 text-xs bg-primary text-white w-4 h-4 flex items-center justify-center rounded-full">
                  1
                </p>
              </div>
              {currentUser ? (
                <Button style={"bg-red-500"} small clickEvent={logout}>
                  Logout
                </Button>
              ) : (
                <Button small clickEvent={() => navigate("/login")}>
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
