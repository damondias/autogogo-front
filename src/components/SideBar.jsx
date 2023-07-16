import { useContext } from "react";
import CarrosContext from '../contexts/CarrosContext';
import styled from "styled-components";
import createModalAnnoun from "./modais/modalAnnoun";
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import useAuth from '../hooks/useAuth';

export default function SideBar(props){
    const {sidebarOpen, setSidebarOpen} = props;
    const { carrosSelecionados, setCarrosSelecionados } = useContext(CarrosContext);
    const {user} = useAuth();

    return (
        <SCContainer>
            <SCSidebar sidebar={sidebarOpen}>
                <img src={logo} />
                <button onClick={createModalAnnoun} id="btnAnnoun">Anuncie!</button>
                <button onClick={() => {console.log(carrosSelecionados)}} id="btnPoint">Pontos</button>
            </SCSidebar>
        </SCContainer>
    )
}

const SCContainer = styled.div`
    display: flex;
    width: 100%;
`

const SCSidebar = styled.div`
    display: flex;
    opacity: ${props => (!props.sidebar ? 0 : 1)};
    width: 10%;
    min-height: 100vh;
    height: auto;
    background-color: #eb841d;
    position: absolute;
    top: 0;
    left: ${props => (props.sidebar ? '0' : '-200px')};
    transition: left 0.3s ease-in-out;
    padding-top: 3.5rem; 
    padding-left: ${props => (!props.sidebar ? 0 : '2rem')}; 
    padding-right: ${props => (!props.sidebar ? 0 : '2rem')};
    flex-direction: column;
    gap: 1rem;

    button {
        display: ${props => (!props.sidebar ? 'none' : 'block')};
        cursor: ${props => (!props.sidebar ? 'none' : 'pointer')};
        border-radius: 5px;
        width: 120%;
        margin-left: -10px;
        border: none;
        font-size: 18px;
        padding: 0.4rem;
        background-color: #fafafa;
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

    img {
        width: 8rem;
        height: 1.5rem;
    }
`;