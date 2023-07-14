import Swal from 'sweetalert2';
import axios from 'axios'

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

export default createModalAnnoun;