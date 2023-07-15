import Swal from 'sweetalert2';
import GarbageIcoon from '../garbageIcon';
import { IoTrashOutline } from 'react-icons/io5';

const modalCarrinho = (carrosSelecionados) => {
    const deletarCarro = () => {
        console.log('deletou')
    }

    const html = carrosSelecionados.map((carro) => {
        return `
        <tr>
            <td>${carro.titulo}</td>
            <td class="linhaValorCarro">
                <h4>R$${Number(carro.diaria).toFixed(2)}</h4>
                <button class="delete-btn" onclick="${deletarCarro}">${IoTrashOutline()}</button>
            </td>
        </tr>
        `;
    });

    const total = carrosSelecionados.reduce((accumulator, carro) => {
        return accumulator + Number(carro.diaria);
    }, 0);

    
    const htmlTotal = `
        <div class="containerCarrinho">
        <table>
            <thead>
                <tr>
                    <th class="marginBot">Item</th>
                    <th class="marginBot">Valor Diária</th>
                </tr>
            </thead>
            <tbody>
            ${html.join("")}
            <tr>
                <td>TOTAL</td>
                <td>R$${total.toFixed(2)}</td>
            </tr>
            </tbody>
        </table>
        </div>
    `;

    Swal.fire({
        title: "Carrinho de Compras",
        html: carrosSelecionados.length > 0 ? htmlTotal : "<h1>Nenhum carro foi adicionado ao carrinho ainda!</h1>",
        showCancelButton: true,
        showConfirmButton: carrosSelecionados.length > 0 ? true : false,
        confirmButtonText: 'Finalizar',
        confirmButtonColor: '#D57C00',
        cancelButtonText: carrosSelecionados.length > 0 ? 'Cancelar' : 'Voltar a Loja',
        cancelButtonColor: carrosSelecionados.length > 0 ? '#6E7881' : '#eb6b3d',
    });
};

export default modalCarrinho;
