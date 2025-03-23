import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  position: fixed; /* Fixed position to cover the entire screen */
  top: 0;
  left: 0;
  z-index: 9999; /* High z-index to overlay other components */
  background-color: white;
`;

const Spinner = styled.div`
  position: relative;
  width: 64px;
  height: 64px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-top-color: #0096db;
    border-radius: 50%;
    animation: spin 1.2s linear infinite;
  }

  &::before {
    animation-delay: 0.2s;
  }

  &::after {
    animation-delay: 0.4s;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

export default Loader;
