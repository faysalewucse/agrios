import React from "react";
import { clsx } from "clsx";

const Button = ({ children, clickEvent, type, style }) => {
  return (
    <button
      type={type}
      onClick={clickEvent}
      className={clsx(
        "text-white bg-primary w-fit py-4 px-8 rounded-md",
        style
      )}
    >
      {children}
    </button>
  );
};

export default Button;
