const addItem = document.getElementById("itemList");
const form = document.querySelector("form");
const insertList = document.querySelector("ul");
// capturando o evento de input no campo de texto
addItem.addEventListener("input", () => {
  const hasNumber = /[^a-zA-Z\s]/g;
  // este regex permiti apenas letras e espaços. o ^ é uma negação ou seja tudo
  // que não for a-z ou A-Z ou espaço será substituido por nada
  addItem.value = addItem.value.replace(hasNumber, "");
});

insertList.clas;

// criar um evento de submit ou click no botão
form.onsubmit = (event) => {
  event.preventDefault();

  const itemText = addItem.value;
  // trim é um metodo de string que remove espaços em brancos no inicio e no final
  if (itemText.trim() !== "") {
    // se o input estive for diferente de vazio

    insertList.innerHTML += `
        <li class="flex">
                        <div>
                            <input type="checkbox" id="itemText" value="${itemText}">
                            <label for="item1">${itemText}</label>
                        </div>
                        <div id="${delet}">
                            <img src="assets/icons/delete-02-stroke-rounded.svg" alt="">
                        </div>
        </li>
        `;
    addItem.value = ""; // Limpar o campo de texto após adicionar o item
  }
};
