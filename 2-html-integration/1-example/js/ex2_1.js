//cria referência ao dorm e ao elemento h3

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Cria um ouvinte de evento, adicionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value  // recebe o valor digitado no form
    resp.innerText = `Olá ${nome}`  // insere e exibe a resposta do form
    e.preventDefault()  // evita o envio do form
})