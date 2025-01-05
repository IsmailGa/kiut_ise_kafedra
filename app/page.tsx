import Container from "@/components/container";
import Image from "next/image";
import SectionOne from "./sections/1/SectionOne";
import SectionTwo from "./sections/2/SectionOne";

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
      </Container>
    </>
  );
}
