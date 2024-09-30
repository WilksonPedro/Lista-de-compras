const addItem = document.getElementById("#itemList");
const form = document.querySelector("form");
// capturando o evento de input no campo de texto
addItem.addEventListener("input", () => {
    const hasNumber = /[^a-zA-Z\s]/g; 
    // este regex permiti apenas letras e espaços. o ^ é uma negação ou seja tudo 
    // que não for a-z ou A-Z ou espaço será substituido por nada
    addItem.value = addItem.value.replace(hasNumber, "");
})

