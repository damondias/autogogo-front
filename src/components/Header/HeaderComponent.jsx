import React, { useState, useEffect, useContext } from 'react';
import { Container, IconsContainer, MiniLogo } from "./HeaderStyle";
import logo from "../../assets/logo.png";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { BiExit } from "react-icons/bi";
import modalCarrinho from "../modais/modalCarrinho";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CarrosContext from '../../contexts/CarrosContext';

function Header() {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const paths = ['/login', '/cadastro'];
    const { carrosSelecionados, setCarrosSelecionados, total, setTotal } = useContext(CarrosContext);
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
            <MiniLogo src={logo} alt="AutoGoGo" onClick={() => navigate("/")} />
            {user == null ? (
                <IconsContainer>
                <b onClick={() => navigate("/login")}>
                    {" "}
                    Login <IoPersonOutline size={20} />{" "}
                </b>
                    <div>
                        <IoCartOutline
                            cursor={'pointer'}
                            size={20}
                            onClick={() => {
                            modalCarrinho(carrosSelecionados, setCarrosSelecionados, total, setTotal);
                            }}
                        />
                        {contadorCarrinho > 0 && (
                            <span className="contador-carrinho">{contadorCarrinho}</span>
                        )}
                    </div>
                
                </IconsContainer>
            ) : (
                <IconsContainer>
                <h2>Bem vindo, {user.name}</h2>
                <div>
                    <IoCartOutline size={20} onClick={() => navigate("/carrinho")} />
                    <BiExit size={20} onClick={() => logOut()} />
                </div>
                {contadorCarrinho > 0 && (
                    <span className="contador-carrinho">{contadorCarrinho}</span>
                )}
                </IconsContainer>
            )}
        </Container>
    );
}



export default Header;
