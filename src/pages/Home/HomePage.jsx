import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IoInformationCircleOutline } from 'react-icons/io5';
import modalLocacao from '../../components/modais/modalLocacao';
import SideBar from '../../components/SideBar';
import CarrosContext from '../../contexts/CarrosContext';
import useAuth from '../../hooks/useAuth';
import modalEmail from '../../components/modais/modalEmail';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function HomePage(props) {
    const [arrayCarros, setArrayCarros] = useState([]);
    const [filtro, setFiltro] = useState('');
    const { carrosSelecionados, setCarrosSelecionados } = useContext(CarrosContext);
    const { sidebarOpen, setSidebarOpen } = props;
    const { user } = useAuth();
    const [redirect, setRedirect] = useState(false)
    const navigate = useNavigate();
  
    const ordenarCarros = (opcao) => {
        let novoArrayCarros = [...arrayCarros];
        if (opcao === 'menor') {
            novoArrayCarros.sort((a, b) => Number(a.diaria) - Number(b.diaria));
        } else if (opcao === 'maior') {
            novoArrayCarros.sort((a, b) => Number(b.diaria) - Number(a.diaria));
        }
        setArrayCarros(novoArrayCarros);
    };
  
    useEffect(() => {
        const getCarros = async () => {
            try {
            const response = await axios.get(import.meta.env.VITE_API_URL);
            setArrayCarros(response.data);
            } catch (error) {
            console.error(error.response);
            alert(error.response);
            }
        };
  
        getCarros();
    }, []);
  
    useEffect(() => {
        ordenarCarros(filtro);
    }, [filtro]);

    // const checkoutRedirect = () => {

    // }

    // useEffect(() => {

    // })
  

    return (
        <>
            <SideBar sidebarOpen={sidebarOpen} />
            <Container>
                <h1>Carros Disponíveis</h1>
                <SecContainer>
                <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                    <option value="">Ordenar por:</option>
                    <option value="menor">Menor Preço</option>
                    <option value="maior">Maior Preço</option>
                </select>
                </SecContainer>
                <CardContainer>
                {arrayCarros.length > 0 &&
                    arrayCarros.map((element, i) => (
                    <Card key={i}>
                        <img onClick={() => console.log(user)} src={element.img} alt="" />
                        <h2>Modelo: {element.titulo}</h2>
                        <h3>Marca: {element.marca}</h3>
                        <h3>KM: {element.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}km</h3>
                        <h2>Diária: R${Number(element.diaria).toFixed(2)}</h2>
                        <FooterCard>
                        <button onClick={() => modalLocacao(element, carrosSelecionados, setCarrosSelecionados, user, navigate)}>Alugar</button>
                        <IoInformationCircleOutline 
                            cursor="pointer" 
                            onClick={() => {modalEmail()}}
                            size={24} 
                            title="Envie um email e nos informe caso tenha algo de errado no anúncio!" 
                        />
                        </FooterCard>
                    </Card>
                    ))}
                </CardContainer>
            </Container>
        </>
    );
}

const SecContainer = styled.section`
    position: absolute;
    left: 30px;
    top: 30px;
    select{
        padding: 0.25em;
        border-radius: 20px;
        border: 0;
        font-style:'Lexend Deca',sans-serif;
        font-size: 16px;
    }
`

const Container = styled.div`
    width: 70vw;
    background-color: #fe860c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding-bottom: 2rem;
    padding-top: 2rem;
    margin-bottom: 3rem;
    margin-top: 6rem;
    font-family: 'Lexend Deca', sans-serif;
    position: relative;

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