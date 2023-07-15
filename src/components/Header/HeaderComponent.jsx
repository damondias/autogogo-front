import React, { useState, useEffect, useContext } from 'react';
import { Container, IconsContainer, MiniLogo } from "./HeaderStyle";
import logo from '../../assets/logo.png'
import { IoPersonSharp, IoCartSharp } from "react-icons/io5";
import { BiExit } from "react-icons/bi";
import modalCarrinho from "../modais/modalCarrinho";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CarrosContext from '../../contexts/CarrosContext';
import SideBar from '../SideBar';
import { FiMenu } from 'react-icons/fi';

function Header() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const paths = ['/login', '/cadastro'];
  const { carrosSelecionados, setCarrosSelecionados } = useContext(CarrosContext);

  const [contadorCarrinho, setContadorCarrinho] = useState(0);

  useEffect(() => {
        setContadorCarrinho(carrosSelecionados.length);
  }, [carrosSelecionados]);

  if (paths.includes(location.pathname)) {
        return null;
  }

  return (
    <Container>
        <SideBar src={FiMenu} />
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
                        modalCarrinho(carrosSelecionados);
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
