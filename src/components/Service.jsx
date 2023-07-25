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
`;

const Left= styled.div`
width: 50%;
position: relative;
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
`;


const Right= styled.div`
width: 50%;
`;

const Wrapper= styled.div`
padding: 50px;
display: flex;
flex-direction: column;
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
`;

const Icon=styled.img`
width: 20px;
margin-right: 10px;
`;
function Service() {
  const [open, setOpen] = useState(false);
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
    </Container>
  )
}

export default Service