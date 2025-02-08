import React from 'react'
import Container from "@/components/container";
import Banner from "./Banner"
import Catalog from './Catalog';


const Teachers = () => {
  return (
    <>
      <div className="bg-black/50">
        <Container>
          <Banner/>
        </Container>
      </div>
      <Container>
        <Catalog/>
      </Container>
    </>
  )
}

export default Teachers