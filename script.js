

function abrir(src){

let popup = document.getElementById("popup")
let imagem = document.getElementById("imagemGrande")

popup.style.display = "flex"
imagem.src = src

}

function fechar(){
document.getElementById("popup").style.display = "none"
}

function toggle(card){

let allCards = document.querySelectorAll(".card")

allCards.forEach(c => {
if(c !== card){
c.classList.remove("active")
}
})

card.classList.toggle("active")

}

function scrollContato(){
document.getElementById("contato").scrollIntoView({
behavior:"smooth"
})
}
function enviarWhats(event){

event.preventDefault();

let nome = document.getElementById("nome").value;
let telefone = document.getElementById("telefone").value;
let matricula = document.getElementById("matricula").value;
let servico = document.getElementById("servico").value;
let data = document.getElementById("data").value;

let mensagem = `Olá, Gostava de agendar para:%0A
Data: ${data}%0A
Serviço: ${servico}%0A
Matrícula: ${matricula}%0A
Telefone: ${telefone}%0A
Nome: ${nome}%0A`;


let numero = "351937652463"; // teu número

let url = `https://wa.me/${numero}?text=${mensagem}`;

window.open(url, "_blank");

}
function marcarServico(servico){

let numero = "351937652463";

let mensagem = `Pedido de Agendamento 🚗%0A
Serviço: ${servico}`;

let url = `https://wa.me/${numero}?text=${mensagem}`;

window.open(url, "_blank");

}

function abrirImagem(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("imgGrande").src = img.src;
}

function fecharImagem() {
  document.getElementById("lightbox").style.display = "none";
}