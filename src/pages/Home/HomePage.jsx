import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IoInformationCircleOutline } from 'react-icons/io5';
import modalLocacao from '../../components/modais/modalLocacao';
import SideBar from '../../components/SideBar';
import CarrosContext from '../../contexts/CarrosContext';
import useAuth from '../../hooks/useAuth';

export default function HomePage(props) {

    const [arrayCarros, setArrayCarros] = useState([]);
    const { carrosSelecionados, setCarrosSelecionados } = useContext(CarrosContext);
    const {sidebarOpen, setSidebarOpen} = props;
    const {user} = useAuth();

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
        <>
        <SideBar sidebarOpen={sidebarOpen}/>
        <Container>
            <h1>Carros Disponíveis</h1>
            <CardContainer >{arrayCarros.length > 0 && arrayCarros.map((element, i) => {
              return (
                    
                    <Card key={i}>
                            <img onClick={() => {console.log(user)}} src={element.img} alt="" /> 
                            <h2>Modelo: {element.titulo}</h2>
                            <h3>Marca: {element.marca}</h3>
                            <h3>KM: {element.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}km</h3>
                            <h2>Diária: R${Number(element.diaria).toFixed(2)}</h2>
                            <FooterCard>
                                <button onClick={() => {modalLocacao(element, setCarrosSelecionados, user)}} >Alugar</button>
                                <IoInformationCircleOutline cursor={'pointer'} size={24} title="Envie um email e nos informe caso tenha algo de errado no anúncio!" />
                            </FooterCard>
                    </Card>
                    )
            })}</CardContainer>
        </Container>
        </>
    );
}

const Container = styled.div`
    width: 70vw;
    background-color: #fe860c;
    /* height: 80vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding-bottom: 2rem;
    padding-top: 2rem;
    margin-top: 6rem;
    font-family: 'Lexend Deca', sans-serif;

    h1 {
        font-weight: 700;
        position: relative;
        color: #fe860c;
        font-size: 20px;
        margin-bottom: 1rem;    
        background-color: #fafafa;
        text-align: center;
        padding-top: 10px;
        width: 250px;
        height: 30px;
        border-radius: 50px;
        font-size: 21px;
    }
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
    height: 15em;
    width: 12em;
    border-radius: 10px;
    img {
        margin:auto;
        width: 11em;
        height: 6em;
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
    width: 2rem;
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
        width: 5rem;
        font-size: 14px;
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