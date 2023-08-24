import React from "react";
import { clsx } from "clsx";

const Button = ({ children, clickEvent, type, style, small }) => {
  return (
    <button
      type={type}
      onClick={clickEvent}
      className={clsx(
        `text-white hover:bg-secondary transition-300 bg-primary w-fit rounded-md ${
          small ? "py-2 px-4 text-xs" : "py-4 px-8"
        }`,
        style
      )}
    >
      {children}
    </button>
  );
};

export default Button;
