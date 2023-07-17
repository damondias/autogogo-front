import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';

async function enviarEmail(email, assunto, mensagem) {

    // Função para enviar email!
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
