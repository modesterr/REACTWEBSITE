import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
height: 90%;
/* background: url("../img/pattern.jpg"); */
background-color: pink;
`;

const Wrapper = styled.div`
height: 100%;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
`;

const FormContainer = styled.div`
width: 50%;
`;

const Form = styled.form`
height: 250px;
display: flex;
align-items: center;
justify-content: center;
`;

const LeftForm = styled.form`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-right: 20px;
`;

const RightForm = styled.form`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Input = styled.input`
width: 200px;
padding: 20px;
`;

const TextArea = styled.textarea`
width: 200px;
height: 60%;
padding: 20px;

`;

const Button = styled.button`
border: none;
color: white;
background-color: darkblue;
border-radius: 10px;
padding: 15px;
font-size: 16px;
font-weight: bold;
cursor: pointer;
`;


const AddressContainer = styled.div`
width: 50%;
`;

function Contact() {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Form>
          <LeftForm>
            <Input placeholder='Your Name'/>
            <Input placeholder='Your Email'/>
            <Input placeholder='Subject'/>
          </LeftForm>
          <RightForm>
            <TextArea placeholder='Your Message'/>
            <Button>Send</Button>
          </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>a</AddressContainer>
      </Wrapper>
    </Container>
  )
}

export default Contact