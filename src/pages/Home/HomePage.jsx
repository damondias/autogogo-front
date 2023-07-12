import React from 'react';
import styled from 'styled-components';


export default function HomePage() {
  return (
    <Container>
      <CardContainer>
        <Card> testando</Card>
        <Card>testando</Card>
        <Card></Card> 
        <Card></Card>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
    background-color: yellow;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardContainer = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const Card = styled.div`
    width: 20px;
    height: 70px;
    
`;

