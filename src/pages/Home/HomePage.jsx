import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import axios from 'axios'
import Swal from 'sweetalert2';

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

    const createModalAnnoun = () => {
        Swal.fire({
            title: 'Criar Anúncio',
            html: `
                <input type="text" placeholder="Modelo" id="modelo" class="swal2-input">
                <input type="text" placeholder="Marca" id="marca" class="swal2-input">
                <input type="text" placeholder="KM Rodados" id="km" class="swal2-input">
                <input type="text" placeholder="Ano" id="ano" class="swal2-input">
                <input type="text" placeholder="Faixa de Valor Diária" id="diaria" class="swal2-input">
            `,
            showCancelButton: true,
            confirmButtonText: 'Criar',
            cancelButtonText: 'Cancelar',
            focusConfirm: false,
            preConfirm: () => {
                const titulo = Swal.getPopup().querySelector('#titulo').value;
                const descricao = Swal.getPopup().querySelector('#descricao').value;
                const preco = Swal.getPopup().querySelector('#preco').value;
                const localizacao = Swal.getPopup().querySelector('#localizacao').value;
                const contato = Swal.getPopup().querySelector('#contato').value;
    
                // tratativa dos dados inputados
                console.log(titulo, descricao, preco, localizacao, contato);
            }
        });
      };

    return (
        <Container>
            <Sidebar sidebarOpen={sidebarOpen}>
                <ul>
                    <li><button onClick={createModalAnnoun} id="btnAnnoun">Crie seu Anúncio!</button></li>
                    <li><button id="btnPoint">Pontos</button></li>
                </ul>
            </Sidebar>
            <Button onClick={toggleSidebar}>
                <FiMenu size={20} />
            </Button>
            <CardContainer>{arrayCarros.map((element, i) => {
              return (
                    <Card key={i}>
                            <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960" alt="" />
                            <h2>Modelo: {element.data.nome} {element.data.modelo}</h2>
                            <h3>Marca: {element.data.marca}</h3>
                            <h3>KM: {element.data.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}km</h3>
                            <h2>Diária: R${element.data.valor.toFixed(2).replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h2>
                    </Card>
                    )
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
    left: ${props => (props.sidebarOpen ? '0' : '-200px')};
    transition: left 0.3s ease-in-out;
    padding-top: 4rem; 
    padding-left: ${props => (!props.sidebarOpen ? 0 : '2rem')}; 
    padding-right: ${props => (!props.sidebarOpen ? 0 : '2rem')};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li {
        display: ${props => (!props.sidebarOpen ? 'none' : 'block')};
        margin-bottom: 0.5rem;
    }

    button {
        cursor: pointer;
        border-radius: 5px;
        border: 0.5px solid grey;
        font-size: 16px;
        padding: 0.4rem;
        background-color: #fff;
        color: #000;
        &:hover {
            background-color: #000;
            color: #fff;
        }
        &:active {
            background-color: #333;
            color: #fff;
        }
    }
`;
