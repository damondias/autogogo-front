import React, { useState, useEffect, useContext } from 'react';
import { Container, IconsContainer, MiniLogo, SideBarHeader } from "./HeaderStyle";
import logo from '../../assets/logo.png'
import { IoPersonSharp, IoCartSharp, IoMenu } from "react-icons/io5";
import { BiExit } from "react-icons/bi";
import modalCarrinho from "../modais/modalCarrinho";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CarrosContext from '../../contexts/CarrosContext';
import SideBar from '../SideBar';


export default function Header(props) {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const paths = ['/login', '/cadastro'];
    const { carrosSelecionados, setCarrosSelecionados, total, setTotal } = useContext(CarrosContext);
    const { setSidebarOpen, sidebarOpen } = props;
    const [contadorCarrinho, setContadorCarrinho] = useState(0);
  
    useEffect(() => {
        const novoTotal = carrosSelecionados.reduce((accumulator, carro) => {
            return accumulator + Number(carro.diaria);
        }, 0);
        setTotal(novoTotal);
    }, [carrosSelecionados]);

    useEffect(() => {
        setContadorCarrinho(carrosSelecionados.length);
    }, [carrosSelecionados]);

    if (paths.includes(location.pathname)) {
        return null;
    }

    return (
        <Container>
            <SideBarHeader>
                <IoMenu size={30} color='#fafafa' onClick={() => setSidebarOpen(!sidebarOpen)} />
            </SideBarHeader>
            <MiniLogo src={logo} alt="AutoGoGo" onClick={() => navigate("/")} />
            {user == null ? (
                <IconsContainer>
                    <b onClick={() => navigate("/login")}>
                        {" "}
                        <IoPersonSharp size={25} color='#fafafa' />{" "}
                    </b>
                    <div>
                        <IoCartSharp
                            color='#fafafa'
                            cursor={'pointer'}
                            size={25}
                            onClick={() => {
                                modalCarrinho(carrosSelecionados, setCarrosSelecionados, total, setTotal, navigate);
                            }}
                        />
                        {contadorCarrinho > 0 && (
                            <span className="contador-carrinho">{contadorCarrinho}</span>
                        )}
                    </div>

                </IconsContainer>
            ) : (
                <IconsContainer>
                    <h2> Bem vindo, {user.name}</h2>
                    <div>
                        <IoCartSharp 
                            color='#fafafa' 
                            cursor={'pointer'} 
                            size={25} 
                            onClick={() => {
                                modalCarrinho(carrosSelecionados, setCarrosSelecionados, total, setTotal, navigate);
                            }}
                        />
                        {contadorCarrinho > 0 && (
                            <span className="contador-carrinho">{contadorCarrinho}</span>
                        )}
                    </div>
                    <BiExit color='#fafafa' cursor={'pointer'} size={25} onClick={() => logOut()} />

                </IconsContainer>
            )}
        </Container>
    );
}
