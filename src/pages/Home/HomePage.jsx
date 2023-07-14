import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import axios from 'axios';
import Swal from 'sweetalert2';
import { IoInformationCircleOutline } from 'react-icons/io5';
import modalLocacao from '../../components/modalLocacao';


export default function HomePage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [arrayCarros, setArrayCarros] = useState([]);


    useEffect(() => {
        const getCarros = async () => {
        axios.get('http://localhost:5000/').then((res) => {
            setArrayCarros(res.data);
        }).catch((err) => {
            console.error(err.response);
            alert(err.response);
        })
    }

        getCarros()
    }, [arrayCarros])

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.pageX;
            const threshold = 100

            if (mouseX <= threshold) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        }
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const toggleSidebar = () => {
            setSidebarOpen(!sidebarOpen);
    };

    const createModalAnnoun = () => {
        let titulo, marca, km, ano, diaria, localizacao, img, infoExtra;
        Swal.fire({
            title: 'Criar Anúncio',
            html: `
                <form>
                    <input type="text" placeholder="Modelo" id="modelo" class="swal2-input">
                    <input type="text" placeholder="Marca" id="marca" class="swal2-input">
                    <input type="number" placeholder="KM Rodados" id="km" class="swal2-input">
                    <input type="number" placeholder="Ano" id="ano" class="swal2-input">
                    <input type="text" placeholder="Faixa de Valor Diária" id="diaria" class="swal2-input">
                    <input type="text" placeholder="Localização" id="localizacao" class="swal2-input">
                    <input type="url" required placeholder="URL de uma Foto" id="img" class="swal2-input">
                    <input type="text" placeholder="Informações Extras" id="infoExtra" class="swal2-input">
                </form>
            `,
            showCancelButton: true,
            confirmButtonText: 'Criar',
            confirmButtonColor: '#D57C00',
            cancelButtonText: 'Cancelar',
            focusConfirm: false,
            onBeforeOpen () {
                Swal.showLoading()
            },
            preConfirm: () => {
                titulo = Swal.getPopup().querySelector('#modelo').value
                marca = Swal.getPopup().querySelector('#marca').value
                km = Swal.getPopup().querySelector('#km').value
                ano = Swal.getPopup().querySelector('#ano').value
                diaria = Swal.getPopup().querySelector('#diaria').value
                localizacao = Swal.getPopup().querySelector('#localizacao').value
                img = Swal.getPopup().querySelector('#img').value
                infoExtra = Swal.getPopup().querySelector("#infoExtra").value
    
                if (!titulo) return Swal.showValidationMessage("O título deve ser preenchido.")
                else if (!marca) return Swal.showValidationMessage("A descrição deve ser preenchida.")
                else if (!km) return Swal.showValidationMessage("Os KMs Rodados devem ser preenchidos.")
                else if (!ano) return Swal.showValidationMessage("O ano do carro não foi preenchido.")
                else if (!diaria) return Swal.showValidationMessage("A Faixa de Valor para Diária não foi preenchida.")
                else if (!localizacao) return Swal.showValidationMessage("A localidade deve ser preenchida.")
                else if (!img) return Swal.showValidationMessage("O URL da foto deve ser inserido.")
            }
        }).then(res => {
            if(res.isConfirmed){
                console.log("Confirmou!")
                console.log(titulo, marca, km, ano, diaria, localizacao, img, infoExtra)
                enviarDados(titulo, marca, km, ano, diaria, localizacao, img, infoExtra)
            }
        })
    };

    const enviarDados = (titulo, marca, km, ano, diaria, localizacao, img, infoExtra) => {
        const data = { titulo, marca, km, ano, diaria, localizacao, img, infoExtra }
        axios.post('http://localhost:5000/', data).then(response => {
            console.log('Dados enviados com sucesso:', response.data);
        }).catch(error => {
            console.error('Erro ao enviar os dados:', error);
        })
    }

    return (
        <Container>
            <Sidebar sidebar={sidebarOpen || false}>
                <ul>
                    <li><button onClick={createModalAnnoun} id="btnAnnoun">Crie seu Anúncio!</button></li>
                    <li><button onClick={() => {console.log(arrayCarros)}} id="btnPoint">Pontos</button></li>
                </ul>
            </Sidebar>
            <Button onClick={toggleSidebar}>
                <FiMenu size={20} />
            </Button>
            <CardContainer>{arrayCarros.length > 0 && arrayCarros.map((element, i) => {
              return (
                    <Card key={i}>
                            <img src={element.img} alt="" /> 
                            <h2>Modelo: {element.titulo}</h2>
                            <h3>Marca: {element.marca}</h3>
                            <h3>KM: {element.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}km</h3>
                            <h2>Diária: R${Number(element.diaria).toFixed(2)}</h2>
                            <FooterCard>
                                <button onClick={() => {modalLocacao(element)}} >Alugar</button>
                                <IoInformationCircleOutline cursor={'pointer'} size={24} />
                            </FooterCard>
                    </Card>
                    )
            })}</CardContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 70vw;
    background-color: #D99537;
    /* height: 80vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding-bottom: 2rem;
    padding-top: 2rem;
    margin-top: 6rem;
`;

const CardContainer = styled.div`
    width: 70%;
    /* height: 100%; */
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    align-items: start;
`;


const Card = styled.div`
    background-color: #fcf1e1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    height: 16em;
    width: 14em;
    border-radius: 10px;
    img {
        margin:auto;
        width: 13em;
        height: 7em;
        border-radius: 5px;
  }
`;

const Button = styled.button`
    position: fixed;
    top: 1rem;
    left: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 999;
`;

const Sidebar = styled.div`
    width: 140px;
    min-height: 100vh;
    height: auto;
    background-color: #7a4500;
    position: fixed;
    top: 0;
    left: ${props => (props.sidebar ? '0' : '-200px')};
    transition: left 0.3s ease-in-out;
    padding-top: 4rem; 
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

const FooterCard = styled.div`
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        cursor: pointer;
        border-radius: 5px;
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
`