import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import createModalAnnoun from "./modais/modalAnnoun";
import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function SideBar(props){
    return (
        <>
            <SCSidebar sidebar={props.sidebarOpen || false}>
                <button onClick={createModalAnnoun} id="btnAnnoun">Crie seu Anúncio!</button>
                <button onClick={() => {console.log(arrayCarros)}} id="btnPoint">Pontos</button>
            </SCSidebar>
        </>
    )
}

const SCSidebar = styled.div`
    width: 140px;
    min-height: 100vh;
    height: auto;
    background-color: #633c15;
    position: fixed;
    top: 0;
    left: ${props => (props.sidebar ? '0' : '-200px')};
    transition: left 0.3s ease-in-out;
    padding-top: 7rem; 
    padding-left: ${props => (!props.sidebar ? 0 : '2rem')}; 
    padding-right: ${props => (!props.sidebar ? 0 : '2rem')};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    button {
        display: ${props => (!props.sidebar ? 'none' : 'block')};
        cursor: ${props => (!props.sidebar ? 'none' : 'pointer')};
        border-radius: 5px;
        width: 100%;
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