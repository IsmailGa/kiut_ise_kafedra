"use client"
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Container from "@/components/container";
import Banner from "./components/NewsBanner";
import NewsList from "./components/NewsList";

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar />
      <Banner onSearch={handleSearch} />
      <Container>
        <NewsList searchQuery={searchQuery} />
      </Container>
    </>
  );
};

export default News;