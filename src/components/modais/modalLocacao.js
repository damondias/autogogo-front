import axios from 'axios';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';


export default function modalLocacao(carInfo, setCarrosSelecionados ){

    const html = `
        <div class="containerModalLocacao">
            <img src="${carInfo.img}" alt="${carInfo.titulo}"/>
            <h2>O ${carInfo.titulo}, marca ${carInfo.marca}, é do ano ${carInfo.ano} e foram rodados ${carInfo.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}km com ele. Ele se encontra no ${carInfo.localizacao}.</h2>
            <div class="campoValor"><h1>Valor Diária</h1> <h1 id="valorModalLocacao"><b>R$${Number(carInfo.diaria).toFixed(2).replace('.', ',')}</b></h1></div>
        </div>
    `
    Swal.fire({
        title: `Aluguel ${carInfo.titulo}`,
        text: carInfo._id,
        html: html,
        width: '50vw',
        confirmButtonColor: '#D57C00',
        cancelButtonColor: "#eb6b3d",
        confirmButtonText: 'Finalizar Compra',
        showCancelButton: true,
        cancelButtonText: 'Adicionar ao Carrinho',
        focusConfirm: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showCloseButton: true,
        focusDeny: false,
        focusCancel: false,
        willClose: () => {
            Swal.showLoading();
        },
    }).then(res => {
        if ( res.isDismissed || res.isConfirmed ) setCarrosSelecionados((carrosAntigos) => [...carrosAntigos, carInfo]);
        // pode fazer mais algo
    })

    
}

