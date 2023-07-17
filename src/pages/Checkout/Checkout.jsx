import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IoInformationCircleOutline } from 'react-icons/io5';
import modalLocacao from '../../components/modais/modalLocacao';
import SideBar from '../../components/SideBar';
import CarrosContext from '../../contexts/CarrosContext';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';


function Checkout(props) {
    const { carrosSelecionados,total } = useContext(CarrosContext);
    const { user } = useAuth();
    const { sidebarOpen, setSidebarOpen } = props;
    const navigate = useNavigate();

    // useEffect(() => {
    //     const storedSelectedCars = localStorage.getItem("selectedCars");
    //     if (storedSelectedCars) {
    //         setCarrosSelecionados(JSON.parse(storedSelectedCars)); // Converte a string de volta para um array
    //     }
    // }, []);

    return (
        <>
        <SideBar sidebarOpen={sidebarOpen}/>
        <SCContainer>
            <SCPessoal>
                <SCH1>Checkout</SCH1>
                <p>Nome do Locatário: <span>{user?.name}</span></p>
                <p>Email do Locatário: <span>{user?.email}</span></p>
            </SCPessoal>
            <SCCar>
                <h2>Informações do Carro:</h2>
                
                <SCCardPanel>
                    {carrosSelecionados.map((carro, i) => {
                        return (
                            <SCCard key={i}>
                                <p>Modelo: {carro.titulo}</p>
                                <p>Marca: {carro.marca}</p>
                                <p>Ano: {carro.ano}</p>
                                <p>Km: {carro.km}</p>
                                <p>Diária: R${Number(carro.diaria).toFixed(2).replace('.',',')}</p>
                                <img src={carro.img} alt={carro.titulo} />
                            </SCCard>
                        )
                    })}
                    
                </SCCardPanel>
                <SCTotal>TOTAL: <b id="valorTotal">R${total.toFixed(2).replace('.',',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</b></SCTotal>
                <SCP>Para remover um carro, entre no carrinho e remova o de interesse.</SCP>

            </SCCar>
            <SCButton onClick={() => {
                api.createReserve(user?.token, carrosSelecionados, total)
                navigate('/');
            }}>
              Finalizar
            </SCButton>
        </SCContainer>
        </>
    );
}
const SCTotal = styled.section`
    position: absolute;
    bottom: -50px;
    right: 0;
    font-size: 20px;
    #valorTotal{
        color: #0d0080;
        font-weight: 700;
    }
`

const SCP = styled.p`
    padding-top: 2rem;
`

const SCContainer = styled.div`
    width: 60vw;
    background-color: #fe860c;
    /* height: 80vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: flex-start; */
    border-radius: 50px;
    padding-bottom: 2rem;
    padding-top: 1.5rem;
    padding-left: 5rem;
    margin-top: 3.5rem;
    gap: 0.5rem;
    height: 100%;
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 700;
    }

    span {
        font-weight: 500;
    }
`;

const SCPessoal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    gap: 0.5rem;
`

const SCH1 = styled.h1`
    width: 100%;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 60px;
    font-weight: bold;
    color: #fafafa;
    margin-bottom: 2rem;
`

const SCCar = styled.div`
    position: relative;
    margin-top: 1.5rem;
    height: 100%;
    width: 100%;
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -3rem;
    h2 {
        font-weight: 700;
        position: relative;
        color: #fafafa;
        font-size: 20px;
        margin-bottom: 1rem;
    }

`

const SCCardPanel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`

const SCCard = styled.div`
    background-color: #fcf1e1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    height: 13em;
    width: 11em;
    border-radius: 10px;
    img {
        margin:auto;
        width: 11em;
        height: 6em;
        border-radius: 5px;
  }
`
const SCButton = styled.button`
    align-self: center;
    width: 180px;
    height: 45px;
    margin-left: -6.5rem;
    margin-top: 0.5rem;
    background-color: #fafafa;
    border: none;
    border-radius: 5px;
`

export default Checkout;