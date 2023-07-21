import React from "react";
import styled from "styled-components";
import App from "../img/app.png";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
`;

const Title = styled.span``;
const SubTitle = styled.span``;
const Desc = styled.p``;
const Button = styled.button``;

function Feature() {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business</SubTitle>
        <Desc>
          We know that good design means good business.We know that good design
          means good business. We know that good design means good business that
          good design means good business
        </Desc>
        <Button>Learn more</Button>
      </Right>
    </Container>
  );
}

export default Feature;
