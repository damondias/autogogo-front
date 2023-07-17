import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';

const modalCarrinho = (carrosSelecionados, setCarrosSelecionados, total, setTotal) => {
    
    const deleteCar = (carroId, diaria) => {
        const asnw = confirm("Deseja remover o carro?");
        if (asnw) {
            const storedSelectedCars = localStorage.getItem("selectedCars");
            if (storedSelectedCars) {
                const selectedCars = JSON.parse(storedSelectedCars)
                const updatedCars = selectedCars.filter((carroSelecionado) => carroSelecionado._id !== carroId)
                setCarrosSelecionados(updatedCars);
                localStorage.setItem("selectedCars", JSON.stringify(updatedCars))
            }
    
            document.querySelector(`tr[id="${carroId}"]`).remove()
            setTotal(total - diaria);
            document.getElementById('total').innerHTML = 'R$' + (total - diaria) + '/ dia'
        }
    }
    const html = carrosSelecionados.map((carro) => {
         
        return `
        <tr id="${carro._id}">
            <td><img src="${carro.img}" id="imgCar" alt="${carro.titulo}" /></td>
            <td>${carro.titulo}</td>
            <td class="linhaValorCarro">
                <h4>R${Number(carro.diaria).toFixed(2)}</h4>
                <button class="delete-btn" data-info="${carro._id}" data-price="${carro.diaria}" id="delete-btn"><ion-icon name="trash-bin-outline"></ion-icon></button>
            </td>
        </tr>
        `;
    });


    const htmlTotal = `
        <div class="containerCarrinho">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th class="marginBot">Item</th>
                    <th class="marginBot">Valor Diária</th>
                </tr>
            </thead>
            <tbody>
            ${html.join("")}
            <tr>
                <td></td>
                <td>TOTAL</td>
                <td id="total">R$${total.toFixed(2)}/ dia</td>
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
        allowEscapeKey: carrosSelecionados.length > 0 ? false : true,
        allowOutsideClick: carrosSelecionados.length > 0 ? false : true,
    });
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const info = button.dataset.info;
            deleteCar(info, button.dataset.price);
        });
    });
};

export default modalCarrinho;
