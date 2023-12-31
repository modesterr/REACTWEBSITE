import React from "react";
import styled from "styled-components";

const Square = styled.div`
  height: 60px;
  width: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Rect = styled.div`
  height: 100px;
  width: 50px;
  background-color: #669966;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  animation: rect 25s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

function AnimatedShapes() {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
    </>
  );
}

export default AnimatedShapes;
