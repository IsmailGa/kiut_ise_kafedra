import Image from "next/image";
import SectionOne from "./sections/1/SectionOne";

export default function Home() {
  return (
    <>
      <div className="bg-black/50">
        <SectionOne />
      </div>
    </>
  );
}
