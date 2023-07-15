import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import createModalAnnoun from "./modais/modalAnnoun";
import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function SideBar(props){
    return (
        <>
            <SCSidebar sidebar={props.sidebarOpen || false}>
                <ul>
                    <li><button onClick={createModalAnnoun} id="btnAnnoun">Crie seu Anúncio!</button></li>
                    <li><button onClick={() => {console.log(arrayCarros)}} id="btnPoint">Pontos</button></li>
                </ul>
            </SCSidebar>
        </>
    )
}

const SCSidebar = styled.div`
    width: 140px;
    min-height: 100vh;
    height: auto;
    background-color: #7a4500;
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
    
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    li {
        display: ${props => (!props.sidebar ? 'none' : 'block')};
        margin-bottom: 0.5rem;
        width: 100%;
    }

    button {
        cursor: pointer;
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