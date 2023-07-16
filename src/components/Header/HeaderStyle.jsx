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

    background: #fe860c;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    & > img {
        cursor: pointer;
    
    }
`;

const MiniLogo = styled.img`
    display: block;
    padding: 0px 18px;
    width: 140px;
    height: 40px;
`;

const IconsContainer = styled.div`
    display: flex;
    width: 20vw;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 1.2em;
    
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    
`

const SideBarHeader = styled.div`
    display: flex;
    width: 20vw;
    height: 100%;
    justify-content: left;
    align-items: center;
    margin-left: 5px;
`

export {
    Container,
    MiniLogo,
    IconsContainer ,
    SideBarHeader
  
};