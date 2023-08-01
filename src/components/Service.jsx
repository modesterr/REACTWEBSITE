import React from 'react'
import { styled } from 'styled-components'
import How from "../img/how.png"
import MiniCard from './MiniCard';
import Play from "../img/play.png"
import Nls from "../vid/nls.mp4"
import { useState } from 'react';


const Container= styled.div`
display: flex;
height: 100%;

@media only screen and (max-width: 480px) {
   flex-direction:column;
  }
`;

const Left= styled.div`
width: 50%;
position: relative;

@media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image=styled.img`
display: ${(props) => props.open && "none"};
height: 100%;
margin-left: -20%;
`;

const Video = styled.video`
display: ${(props) => !props.open && "none"};
height: 300px;
width: 400px;
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 10%;
margin: auto;

@media only screen and (max-width: 480px) {
    width: 100%;
    height: 70%;
    left: 0;
}
`;


const Right= styled.div`
width: 50%;

@media only screen and (max-width: 480px) {
    width: 100%;
    /* height: 100%; */
  }
`;

const Wrapper= styled.div`
padding: 50px;
display: flex;
flex-direction: column;

@media only screen and (max-width: 480px) {
    padding: 20px;
    
  }
`;

const Title= styled.h1``;

const Desc = styled.p`
  font-size:20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button= styled.button`
width: 180px;
border: none;
border-radius: 10px;
background-color: darkblue;
color: white;
font-size: 20px;
padding: 15px;
margin-top: 50px;
cursor: pointer;
display: flex;
align-items: center;

@media only screen and (max-width: 480px) {
    margin-top: 25px;
    align-self: center;
    padding: 12px;
}   
`;

const Icon=styled.img`
width: 20px;
margin-right: 10px;
`;

const Modal = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
left: 0;
top: 0;
background-color: rgba(0,0,0,0.5);
`;

const CloseButton = styled.button`
font-weight: bold;
position: absolute;
background-color: white;
padding: 5px;
border: none;
border-radius: 5px;
right: 18px;
top: 11%;
`;

function Service() {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container>
      <Left>
        <Image open={open} src={How} />
        <Video open={open} autoPlay loop controls src={Nls} />
      </Left>
      <Right>
        <Wrapper>
        <Title> Simple process to start</Title>
        <Desc>This tool was created because we wanted random text for our web designs.
        When we show a design to a client we want to have some text that doesn't mean
         anything in particular just to indicate that "here is where the text will be".
          So why shouldn't we just copy-paste a single sentence and get a block of text?
         
        </Desc>
        <CardContainer>
          <MiniCard /> <MiniCard /> <MiniCard />
        </CardContainer>
        <Button onClick = {() => setOpen(true)}>
          <Icon src={Play} /> How it works

        </Button>
        
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video 
          open={open} 
          autoPlay 
          loop 
          controls 
          src={Nls} />
          <CloseButton onClick={()=>(setOpen(false))}>close</CloseButton>
        </Modal>
      )}

    </Container>
  )
}

export default Service