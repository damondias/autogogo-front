import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function enviarEmail(email, assunto, mensagem) {
    const data = {email: email, assunto: assunto, mensagem: mensagem}
    axios.post(import.meta.env.VITE_API_URL+'/send-mail', data).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err.response.data)
    })
    
}

const modalEmail = () => {
    
    const html = `
        <div class="containerEmail">
        
        </div>
    `;

    Swal.fire({
        title: "Entre em contato conosco para mais informações",
        html:'<input id="swal-input1" class="swal2-input" placeholder="Seu e-mail">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Assunto">' +
        '<textarea id="swal-input3" placeholder="Mensagem"></textarea>',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Enviar Email',
        confirmButtonColor: '#D57C00',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#6E7881',
        allowEscapeKey: false,
        allowOutsideClick: false,
        preConfirm: () => {
            const email = Swal.getPopup().querySelector('#swal-input1').value;
            const assunto = Swal.getPopup().querySelector('#swal-input2').value;
            const mensagem = Swal.getPopup().querySelector('#swal-input3').value;
            enviarEmail(email, assunto, mensagem);
          },
    });

};

export default modalEmail;
