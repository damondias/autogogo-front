import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import axios from 'axios'

export default function HomePage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [arrayCarros, setArrayCarros] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/');
          setArrayCarros(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    };

    const renderizaAleatorio = () => {
        const cards = [];
        for (let i = 0; i < 100; i++) {
        cards.push(
            <Card id={`carro-${i+1}`} key={i}>
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
            <Sidebar sidebar={sidebarOpen ? sidebarOpen : undefined}>
                <button>Carrinho</button>
                <button>Pontos</button>
            </Sidebar>
            <Button onClick={toggleSidebar}>
                <FiMenu size={20} />
            </Button>
            <CardContainer>{arrayCarros.map((element, i) => {
              return <Card key={i}>
                  <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960" alt="" />
                  <h2>Modelo: {element.data.nome} {element.data.modelo}</h2>
                  <h3>Marca: {element.data.marca}</h3>
                  <h3>KM: {element.data.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}km</h3>
                  <h2>Diária: R${element.data.valor.toFixed(2).replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h2>
              </Card>
            })}</CardContainer>
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
  /* margin-top: 20rem; */
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
    left: ${props => (props.sidebar ? '0' : '-200px')};
    transition: left 0.3s ease-in-out;
    padding-top: 4rem; 
    padding-left: ${props => (!props.sidebar ? 0 : '2rem')}; 
    padding-right: ${props => (!props.sidebar ? 0 : '2rem')};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    button{
        display: ${props => (!props.sidebar ? 'none' : 'normal')};
        cursor:pointer;
        border-radius: 5px;
        border: 0.5px solid grey;
        font-size: 16px;
        padding: 0.4rem;
    }

`;

