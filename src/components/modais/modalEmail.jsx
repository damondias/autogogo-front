import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
// import nodemailer from 'nodemailer';


async function enviarEmail(email, assunto, mensagem) {

    const transporter = nodemailer.createTransport({
      // Preencha com as configurações do seu servidor de e-mail
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'seu-email@example.com',
        pass: 'sua-senha',
      },
    });
  
    // Configuração do e-mail a ser enviado
    const mailOptions = {
      from: 'seu-email@example.com',
      to: 'destinatario@example.com',
      subject: assunto,
      text: mensagem,
    };
  
    try {
      // Envio do e-mail
      await transporter.sendMail(mailOptions);
         Swal.fire('E-mail enviado!', 'O e-mail foi enviado com sucesso.', 'success');
    } catch (error) {
        Swal.fire('Erro ao enviar e-mail', 'Ocorreu um erro ao enviar o e-mail.', 'error');
    }
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
