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
    <Container sidebarOpen={sidebarOpen}>
      <Sidebar sidebarOpen={sidebarOpen}>
        oi
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
  background-color: yellow;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin-left: ${props => (props.sidebarOpen ? '200px' : '0')}; // Adiciona uma margem esquerda para acomodar a sidebar
  transition: margin-left 0.3s ease-in-out;
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
  width: ${props => (props.sidebarOpen ? '200px' : '0')};
  height: 100vh;
  background-color: #f0f0f0;
  position: absolute;
  top: 0;
  left: 0;
  transition: margin-left 0.3s ease-in-out;
  display: ${props => (props.sidebarOpen ? 'flex' : 'none')};
  
`;

