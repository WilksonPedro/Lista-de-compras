const addItem = document.getElementById("itemList");
const form = document.querySelector("form");
const insertList = document.querySelector("ul");

// Capturando o evento de input no campo de texto
addItem.addEventListener("input", () => {
  const hasNumber = /[^a-zA-Z\s]/g;
  // Este regex permite apenas letras e espaços. O ^ é uma negação, ou seja, tudo
  // que não for a-z ou A-Z ou espaço será substituído por nada
  addItem.value = addItem.value.replace(hasNumber, "");
});

// Criar um evento de submit no formulário
form.onsubmit = (event) => {
  event.preventDefault();

  const itemText = addItem.value;
  // trim é um método de string que remove espaços em branco no início e no final
  if (itemText.trim() !== "") {
    // Se o input estiver diferente de vazio
    addItemToList(itemText);
    addItem.value = ""; // Limpar o campo de texto após adicionar o item
  }
};

const addItemToList = (itemText) => {
  // Capturando o elemento li do HTML
  const li = document.createElement("li");
  // Adicionando a classe flex ao elemento li
  li.classList.add("flex");

  // Criando a primeira div para o checkbox e o texto
  const div1 = document.createElement("div");
  div1.classList.add("checkbox-container"); // Adicionando a classe para espaçamento

  const checkbox = document.createElement("input");
  // O input será do tipo checkbox
  checkbox.type = "checkbox";
  // O id e o value do checkbox será o texto do item
  checkbox.id = itemText;
  checkbox.value = itemText;

  const label = document.createElement("label");
  label.htmlFor = itemText;
  label.textContent = itemText;

  div1.appendChild(checkbox);
  div1.appendChild(label);

  // Criando a segunda div para o ícone de deletar
  const div2 = document.createElement("div");
  div2.id = "delet";

  const img = document.createElement("img");
  img.src = "assets/icons/delete-02-stroke-rounded.svg";
  img.alt = "";

  div2.appendChild(img);

  li.appendChild(div1);
  li.appendChild(div2);

  insertList.appendChild(li);
};