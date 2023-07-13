import { Container, Avatar, MiniLogo } from "./HeaderStyle";
import logo from "../../assets/logo.png";
import profilePicture2 from "../../assets/react.svg"

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
      <Avatar src={profilePicture2} alt="default profile" onClick={() => user? logOut() : navigate("/login")}/>
    </Container>
  );
}

export default Header;