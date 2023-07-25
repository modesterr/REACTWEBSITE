// import { css } from "styled-components";
import styled from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/service";


const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

// const Shape: css`
// width: 100%;
// height: 100%;
// position: absolute;
// top: 0;
// left: 0;
// z-index: -1;
// `;


const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
  z-index: -1;
`;


const FeatureShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
  background-color: pink;
  z-index: -1;
`;


const ServiceShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
  background-color: #f88497;
  z-index: -1;
`;

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape/>
      </Container>
      <Container>
        <Service/>
        <ServiceShape />
      </Container>
    
    </>
  );
};

export default App;
