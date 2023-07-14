import axios from 'axios';
import Swal from 'sweetalert2';
import styled from 'styled-components';

export default function modalLocacao(carInfo){
    const html = `
        <div class="containerModalLocacao">
            <img src="${carInfo.img}" alt="${carInfo.titulo}"/>
            <h2>O ${carInfo.titulo}, marca ${carInfo.marca}, é do ano ${carInfo.ano} e foram rodados ${carInfo.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}km com ele. Ele se encontra no ${carInfo.localizacao}.</h2>
            <div class="campoValor"><h1>Valor Diária</h1> <h1 id="valorModalLocacao"><b>R$${Number(carInfo.diaria).toFixed(2).replace('.', ',')}</b></h1></div>
        </div>
    `
    // carInfo.map((info, i) => {

    // })
    console.log(carInfo)
    Swal.fire({
        title: `Aluguel ${carInfo.titulo}`,
        text: carInfo._id,
        html: html,
        width: '50vw',
        confirmButtonColor: '#D57C00',
        confirmButtonText: 'Adicionar ao Carrinho',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        focusConfirm: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        willClose: () => {
            Swal.showLoading();
        }
    })

    
}

