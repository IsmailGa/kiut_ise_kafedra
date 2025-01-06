import Container from "@/components/container";
import SectionOne from "./sections/1/SectionOne";
import SectionTwo from "./sections/2/SectionOne";
import SectionThree from "./sections/3/SectionThree";

export default function Home() {
  return (
    <>
      <div className="bg-black/50">
        <Container>
          <SectionOne />
        </Container>
      </div>
      <Container>
        <SectionTwo />
        <SectionThree />
      </Container>
    </>
  );
}
