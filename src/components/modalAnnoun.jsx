import Swal from 'sweetalert2';

export default createModalAnnoun = () => {
    Swal.fire({
        title: 'Criar Anúncio',
        html: `
            <input type="text" placeholder="Título" id="titulo" class="swal2-input">
            <input type="text" placeholder="Descrição" id="descricao" class="swal2-input">
            <input type="text" placeholder="Preço" id="preco" class="swal2-input">
            <input type="text" placeholder="Localização" id="localizacao" class="swal2-input">
            <input type="text" placeholder="Contato" id="contato" class="swal2-input">
        `,
        showCancelButton: true,
        confirmButtonText: 'Criar',
        cancelButtonText: 'Cancelar',
        focusConfirm: false,
        preConfirm: () => {
            const titulo = Swal.getPopup().querySelector('#titulo').value;
            const descricao = Swal.getPopup().querySelector('#descricao').value;
            const preco = Swal.getPopup().querySelector('#preco').value;
            const localizacao = Swal.getPopup().querySelector('#localizacao').value;
            const contato = Swal.getPopup().querySelector('#contato').value;

            // tratativa dos dados inputados
            console.log(titulo, descricao, preco, localizacao, contato);
        }
    });
  };
