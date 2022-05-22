
const ticker = document.querySelector("#ticker");
const grupo = document.querySelector("#grupo");
const quantidade = document.querySelector("#quantidade");
const preco_medio = document.querySelector("#preco_medio");
const setor = document.querySelector("#setor");
const btnCriar = document.querySelector("#btnCriar");
let resposta = document.querySelector("#resposta");

const cadastrar = async () => {
  try {
    if (
      !ticker.value ||
      !grupo.value ||
      !quantidade.value ||
      !preco_medio.value ||
      !setor.value
    ) {
      resposta.innerHTML = `Preencha os campos e tente novamente!`;
      return;
    }

    let raw = {
      ticker: ticker.value,
      grupo: grupo.value,
      quantidade: +quantidade.value,
      preco_medio: +preco_medio.value,
      investido: (quantidade.value * preco_medio.value),
      setor: setor.value,
    };

    const requestOptions = {
        method: "POST",
        follow: "redirect",
        body: JSON.stringify(raw),
        headers:{
        "Authorization": `Bearer ${localStorage.getItem("token")}`, 
        "Content-Type": "application/json"
        }
    };

    const resposta = await fetch("http://localhost:4000/carteira", requestOptions);
    const conteudo = await resposta.json();

    console.log(conteudo);

    window.location = "./carteira.html";

  } catch (error) {
    alert("Falha ao cadastrar ativo");
    console.log(error);
  }
};
