import { Container, IconsContainer, MiniLogo } from "./HeaderStyle";
import logo from "../../assets/logo.png";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { BiExit } from "react-icons/bi";

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Header() {
  const { user, logOut} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const paths = ['/login', '/cadastro'];

  if (paths.includes(location.pathname)) {
    return null;
  }

  return (
    <Container>
      <MiniLogo src={logo} alt="AutoGoGo" onClick={() => navigate("/")} />
      {
          user == null?
          <IconsContainer >
            <b onClick={() => navigate("/login")}> Login <IoPersonOutline size={20}/> </b>
            <IoCartOutline size={20} onClick={() => navigate("/carrinho")}/>
          </IconsContainer>
          
          :
          <IconsContainer >
            <h2>Bem vindo,{user.name}</h2>
            <div>
              <IoCartOutline size={20} onClick={() => navigate("/carrinho")}/>  
              <BiExit size={20} onClick={() => logOut()}/>
            </div>
            
          </IconsContainer>      
      }
        
    </Container>
  );
}

export default Header;