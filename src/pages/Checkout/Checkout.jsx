import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IoInformationCircleOutline } from 'react-icons/io5';
import modalLocacao from '../../components/modais/modalLocacao';
import SideBar from '../../components/SideBar';
import CarrosContext from '../../contexts/CarrosContext';
import useAuth from '../../hooks/useAuth';

function Checkout(props) {
    const { carrosSelecionados, setCarrosSelecionados,  total, setTotal } = useContext(CarrosContext);
    const {user} = useAuth();
    const {sidebarOpen, setSidebarOpen} = props;

    console.log( carrosSelecionados, total)

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
                <h2 onClick={() => {console.log(carrosSelecionados)}}>Informações do Carro:</h2>
                
                <SCCardPanel>
                        <SCCard>
                            <p>Modelo</p>
                            <p>Marca</p>
                            <p>Ano</p>
                            <p>Km</p>
                            <p>Diária</p>
                        </SCCard>

                        <SCCard>
                            <p>Modelo</p>
                            <p>Marca</p>
                            <p>Ano</p>
                            <p>Km</p>
                            <p>Diária</p>
                        </SCCard>
                </SCCardPanel>

            </SCCar>
            <SCButton>Finalizar</SCButton>
        </SCContainer>
        </>
    );
}

const SCContainer = styled.div`
    width: 60vw;
    background-color: #fe860c;
    /* height: 80vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
    font-family: 'Lexend Deca', sans-serif;
    font-size: 60px;
    font-weight: bold;
    color: #fafafa;
    align-self: center;
    margin-left: 11rem;
    margin-bottom: 2rem;
    
`

const SCCar = styled.div`
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