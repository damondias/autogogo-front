import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IoInformationCircleOutline } from 'react-icons/io5';
import modalLocacao from '../../components/modais/modalLocacao';
import SideBar from '../../components/SideBar';
import CarrosContext from '../../contexts/CarrosContext';
import useAuth from '../../hooks/useAuth';

function Checkout() {
    const { carrosSelecionados, setCarrosSelecionados } = useContext(CarrosContext);
    const {user} = useAuth();
    console.log(carrosSelecionados);
    return (
        <SCContainer>
            <SCH1>Checkout</SCH1>
            <p>Nome do Locatário: {user.name}</p>
            <p>Email do Locatário: {user.email}</p>
        </SCContainer>
    );
}

const SCContainer = styled.div`
    width: 60vw;
    background-color: #fdc589;
    /* height: 80vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 50px;
    padding-bottom: 2rem;
    padding-top: 1.5rem;
    padding-left: 5rem;
    margin-top: 8rem;
    gap: 0.5rem;
`;

const SCH1 = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 60px;
    font-weight: bold;
    color: #fafafa;
    align-self: center;
    margin-left: -5rem;
    margin-bottom: 2rem;
    
`

export default Checkout;