
const params = new URLSearchParams(window.location.search);
const  id = params.get("id", "setor");
const  ticker = params.get("ticker");
const  grupo = params.get("grupo");
const  quantidade = params.get("quantidade");
const  preco = params.get("preco");
const  setor = params.get("setor");

document.querySelector("#ticker").value = ticker;
document.querySelector("#grupo").value = grupo;
document.querySelector("#quantidade").value = quantidade;
document.querySelector("#preco_medio").value = preco;
document.querySelector("#setor").value = setor;

document.querySelector("h2").innerHTML = `Remover ativo ${ticker}`;

const excluir = async()=> {
    try {
        const requestOptions = {
            method: "DELETE",
            follow: "redirect",
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
            
            
        };
        
        const resposta = await fetch(`http://localhost:4000/carteira/${id}`, requestOptions);
        alert(`${ticker} Removido com sucesso!`);
        window.location = "./carteira.html";

        
    } catch (error) {
        alert(`Falha ao remover ${ticker}`);
        window.location = "./carteira.html";

        console.log(error);
    }
}