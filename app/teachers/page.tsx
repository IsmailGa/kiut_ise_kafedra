import React from "react";
import Container from "@/components/container";
import Banner from "./sections/Banner";
import Catalog from "./sections/Catalog";
import Navbar from "@/components/navbar";

const Teachers = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black/50">
        <Container>
          <Banner />
        </Container>
      </div>
      <Container>
        <Catalog />
      </Container>
    </>
  );
};

export default Teachers;
