import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import axios from 'axios';
import { IoInformationCircleOutline } from 'react-icons/io5';
import modalLocacao from '../../components/modais/modalLocacao';
import SideBar from '../../components/SideBar';
import CarrosContext from '../../contexts/CarrosContext';

export default function HomePage(props) {

    const [arrayCarros, setArrayCarros] = useState([]);
    const { carrosSelecionados, setCarrosSelecionados } = useContext(CarrosContext)
    const {sidebarOpen, setSidebarOpen} = props;
    const deleteCar = (info) => {
        console.log(info)
    }

    useEffect(() => {
        const getCarros = async () => {
        axios.get('http://localhost:5000/').then((res) => {
            setArrayCarros(res.data);
        }).catch((err) => {
            console.error(err.response);
            alert(err.response);
        })
    }

        getCarros()
    }, [arrayCarros])


    return (
        <Container>
            <SideBar sidebarOpen={sidebarOpen}/>
            <CardContainer>{arrayCarros.length > 0 && arrayCarros.map((element, i) => {
              return (
                    <Card key={i}>
                            <img onClick={() => {console.log(carrosSelecionados)}} src={element.img} alt="" /> 
                            <h2>Modelo: {element.titulo}</h2>
                            <h3>Marca: {element.marca}</h3>
                            <h3>KM: {element.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}km</h3>
                            <h2>Diária: R${Number(element.diaria).toFixed(2)}</h2>
                            <FooterCard>
                                <button onClick={() => {modalLocacao(element, setCarrosSelecionados)}} >Alugar</button>
                                <IoInformationCircleOutline cursor={'pointer'} size={24} />
                            </FooterCard>
                    </Card>
                    )
            })}</CardContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 70vw;
    background-color: #fdc589;
    /* height: 80vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding-bottom: 2rem;
    padding-top: 2rem;
    margin-top: 6rem;
`;

const CardContainer = styled.div`
    width: 70%;
    /* height: 100%; */
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    align-items: start;
`;


const Card = styled.div`
    background-color: #fcf1e1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    height: 16em;
    width: 14em;
    border-radius: 10px;
    img {
        margin:auto;
        width: 13em;
        height: 7em;
        border-radius: 5px;
  }
`;

const Button = styled.button`
    position: fixed;
    top: 4rem;
    left: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 999;
    opacity: ${props => (!props.sidebar ? '1' : '0')};
    transition: opacity 0.3s ease-in-out;
`;



const FooterCard = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`