import axios from 'axios';
import Swal from 'sweetalert2';

export default function modalLocacao(carInfo){
    Swal.fire({
        title: "modal locação!",
        text: carInfo._id
    })
}