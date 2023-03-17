const ingressoComprado = document.querySelector(".ingresso__texto-container");

const dados = JSON.parse(localStorage.getItem("comprador"));

ingressoComprado.innerHTML = `
<h3 class="ingresso__titulo">${dados.nome}</h3>
<p class="ingresso__texto">Ingresso ${dados.tipoIngresso}</p>
<p class="ingresso__texto">Setor: ${dados.setor}</p>
<p class="ingresso__texto">Data: ${dados.dataEvento}</p>
<p class="ingresso__texto">Local: São Paulo-SP</p>
`;
