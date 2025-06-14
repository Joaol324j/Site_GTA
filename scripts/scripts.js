const botaoMostrarFormulario = document.getElementById("mostrar-formulario");
const formulario = document.getElementById("formulario-compra");

botaoMostrarFormulario.addEventListener("click", () => {
	formulario.classList.toggle("ativo");
});

const saudacao = document.createElement("p");
const hora = new Date().getHours();
let mensagem = "";
if (hora < 12) mensagem = "Bom dia";
else if (hora < 18) mensagem = "Boa tarde";
else mensagem = "Boa noite";
saudacao.textContent = `${mensagem}, bem-vindo ao site do GTA V!`;
document.querySelector(".informacoes").prepend(saudacao);

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const plataforma = document.getElementById("plataforma").value;
    if (nome && email && cpf && telefone && plataforma) {
        alert("Compra finalizada com sucesso!");
        formulario.reset();
        formulario.classList.remove("ativo");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});