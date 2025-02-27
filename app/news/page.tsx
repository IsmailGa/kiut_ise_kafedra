import Navbar from "@/components/navbar2";
import NewsList from "./components/NewsList";
import React from "react";
import Container from "@/components/container";
import Banner from "./components/NewsBanner"

const News = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Container>
        <NewsList />
      </Container>
    </>
  );
};

export default News;
