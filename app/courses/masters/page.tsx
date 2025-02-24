import Navbar from "@/components/navbar2";
import React from "react";
import MainSection from "./sections/1/Main";
import Container from "@/components/container";
import SecondSection from "./sections/2/SecondSection";
import ThirdSection from "./sections/3/ThirdSection";
import FourthSection from "./sections/4/FourthSection";
import FifthSection from "./sections/5/FifthSection";
import SixthSection from "./sections/6/SixthSection";
import SeventhSection from "./sections/7/SeventhSection";

const BachelorsPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center bg-gradient-to-br from-[#8EA9EC50] to-[#85C8ED50]">
        <Container>
          <MainSection />
        </Container>
      </div>
      <Container>
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
      </Container>
    </>
  );
};

export default BachelorsPage;
