import React from "react";

const Sidebar = () => {
  return (
    <div
      className={`min-h-screen md:relative md:left-0 absolute bottom-0 transition-all duration-200 lg:block dark:bg-slate-950 w-80 bg-white dark:text-white dark:shadow-none dark:border-none shadow-lg border-r-[1px]`}
    >
      <div className="p-10">Sidebar</div>
    </div>
  );
};

export default Sidebar;
