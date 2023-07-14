import axios from 'axios';
import Swal from 'sweetalert2';
import styled from 'styled-components';

export default function modalLocacao(carInfo){
    const html = `
        <div class="containerModalLocacao">
            OIi
        </div>
    `
    Swal.fire({
        title: "modal locação!",
        text: carInfo._id,
        html: html,
        confirmButtonColor: '#D57C00',
        confirmButtonText: 'Alugar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        focusConfirm: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
    })

    
}

