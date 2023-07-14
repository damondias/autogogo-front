import styled from "styled-components";

const Container = styled.header`
  width: 100vw;
  height: 40px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;

  background: #f88e1df3;;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  & > img {
    cursor: pointer;
   
  }
`;

const MiniLogo = styled.img`
  display: block;
  padding: 0px 18px;
  width: 97px;
  height: 35px;
`;

const IconsContainer = styled.div`
  display: flexbox;
  width: 20vw;
  height: 100%;
 
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
 
`

export {
  Container,
  MiniLogo,
  IconsContainer ,
  
};