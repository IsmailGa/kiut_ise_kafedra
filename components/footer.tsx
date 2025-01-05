import Image from "next/image";
import logo from "@/public/assets/logo_black.png";
import React from "react";
import Container from "./container";

const Footer = () => {
  return (
    <header className="">
      <Container>
        <Image src={logo} alt="logo" />
      </Container>
    </header>
  );
};

export default Footer;
