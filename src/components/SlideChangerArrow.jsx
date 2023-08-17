import React from "react";

const SlideChangerArrow = ({ icon, clickEvent, hover, afterHover }) => {
  return (
    <div
      onClick={clickEvent}
      className={`${hover} text-2xl border-2 p-4 rounded-full border-white/40 hover:border-white hover:text-white text-white/40 transition-200`}
    >
      <div className={`${afterHover}`}>{icon}</div>
    </div>
  );
};

export default SlideChangerArrow;
