import React from 'react';
import styled from 'styled-components';

export default function HomePage() {
  const renderizaAleatorio = () => {
    const cards = [];
    for (let i = 0; i < 30; i++) {
      cards.push(
        <Card key={i}>
          <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960" alt="" />
        </Card>
      );
    }
    return cards;
  };

  return (
    <Container>
      <CardContainer>{renderizaAleatorio()}</CardContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 70vw;
  background-color: yellow;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding-bottom: 2rem; padding-top: 2rem;
`;

const CardContainer = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: start;
  align-items: start;
`;

const Card = styled.div`
    background-color: #cacaca;
    padding: 1rem;
    height: 100px;
    border-radius: 10px;
    img {
        width: 80px;
        border-radius: 5px;
    }

`;
