import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLista(){

    if(inputItem.value === ""){
        alert("Não é possível adicionar um item de nome vazio");
        return;
    }

    const itemDaLista = document.createElement("li");

    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
 
    inputCheckBox.addEventListener ("click", function() {
        if (inputCheckBox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.classList.add("texto-data");
    itemData.innerText = dataCompleta;

    itemDaLista.appendChild(itemData);

    return itemDaLista

}