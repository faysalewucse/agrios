import React from "react";
import { clsx } from "clsx";

const Button = ({ children, clickEvent, type, style }) => {
  return (
    <button
      type={type}
      onClick={clickEvent}
      className={clsx("bg-primary w-fit py-2 px-6 rounded-md", style)}
    >
      {children}
    </button>
  );
};

export default Button;
