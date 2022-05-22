const ticker = document.querySelector("#ticker");
const grupo = document.querySelector("#grupo");
const quantidade = document.querySelector("#quantidade");
const preco_medio = document.querySelector("#preco_medio");
const setor = document.querySelector("#setor");
const btnAtualizar = document.querySelector("#btnAtualizar");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
ticker.value = params.get("ticker");
grupo.value = params.get("grupo");
quantidade.value = params.get("quantidade");
preco_medio.value = params.get("preco");
setor.value = params.get("setor");

const atualizar = async () => {
  try {
    let raw = {
      ticker: ticker.value,
      grupo: grupo.value,
      quantidade: quantidade.value,
      preco_medio: preco_medio.value,
      setor: setor.value,
    };

    const requestOptions = {
      method: "PUT",
      body: JSON.stringify(raw),
      headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    const resposta = await fetch(
      `http://localhost:4000/carteira/${id}`,
      requestOptions
    );
    const conteudo = await resposta.json();
      if(conteudo != "Ativo atualizado!"){
        return alert("Falha ao atualizar ativo!");
      }
      alert("Ativo atualizado com sucesso");
      window.location = "./carteira.html";
  } catch (error) {
    console.log("deu ruim" + error);
  }
};

btnAtualizar.addEventListener("click", atualizar);
