import Container from "@/components/container";
import SectionOne from "./sections/1/SectionOne";
import SectionTwo from "./sections/2/SectionOne";
import SectionThree from "./sections/3/SectionThree";
// import SectionFour from "./sections/4/SectionFour";
import SectionFive from "./sections/5/SectionFive";
import SectionSix from "./sections/6/SectionSix";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/assets/banner-hero.png')] bg-cover bg-center h-screen">
        <Container>
          <SectionOne />
        </Container>
      </div>
      <Container>
        <SectionTwo />
        <SectionThree />
        {/* <SectionFour /> */}
        <SectionFive />
        <SectionSix />
      </Container>
    </>
  );
}
