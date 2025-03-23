import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="2xl:max-w-[1440px] xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[768px] w-full mx-auto md:px-[65px] px-[30px]">
      {children}
    </div>
  );
};

export default Container;
