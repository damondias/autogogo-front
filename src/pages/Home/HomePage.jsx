import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi'; // Importe o ícone de menu hambúrguer do React-icons

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen)
  };

  const renderizaAleatorio = () => {
    const cards = [];
    for (let i = 0; i < 50; i++) {
      cards.push(
        <Card key={i}>
          <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960" alt="" />
          <h3>Descrição</h3>
          <h4>Preço</h4>
        </Card>
      );
    }
    return cards;
  };

  return (
    <Container>
        <Sidebar sidebarOpen={sidebarOpen}>
            <button>Carrinho</button>
            <button>Pontos</button>
        </Sidebar>
        <Button onClick={toggleSidebar}>
            <FiMenu size={20} />
        </Button>
        <CardContainer>{renderizaAleatorio()}</CardContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 70vw;
  background-color: #ffcb5c;
  /* height: 80vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin-top: 20rem;
`;

const CardContainer = styled.div`
  width: 70%;
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: start;
  align-items: start;
`;


const Card = styled.div`
  background-color: #ffdfaf;
  padding: 1rem;
  /* height: 100px; */
  border-radius: 10px;
  img {
    width: 80px;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 999;
`;

const Sidebar = styled.div`
    width: 200px;
    height: 100vh;
    background-color: #7a4500;
    position: absolute;
    top: 0;
    left: ${props => (props.sidebarOpen ? '0' : '-200px')};
    transition: left 0.3s ease-in-out;
    padding-top: 4rem; 
    padding-left: ${props => (!props.sidebarOpen ? 0 : '2rem')}; 
    padding-right: ${props => (!props.sidebarOpen ? 0 : '2rem')};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    button{
        display: ${props => (!props.sidebarOpen ? 'none' : 'normal')};
        cursor:pointer;
        border-radius: 5px;
        border: 0.5px solid grey;
        font-size: 16px;
        padding: 0.4rem;
    }

`;

