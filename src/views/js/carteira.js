const carteira = async () => {
  try {
    reqOptions = {
      method: "GET",
      follow: "redirect",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const resposta = await fetch("http://localhost:4000/carteira", reqOptions);
    const conteudo = await resposta.json();

    if(conteudo.length === 0){
      document.querySelector(".empty").style.display = "block";
      document.querySelector(".loading").style.display = "none";
    }

    console.log(conteudo);

    main = document.querySelector(".login");
    tabela = document.createElement("table");
    tabela.innerHTML = `
    <thead>
        <tr><th colspan="7"><h2 class="total">Carteira</h2></th></tr>
        <tr>
            <th>Ticker</th>
            <th>Grupo</th>
            <th>Quantidade</th>
            <th>Preço Médio (R$)</th>
            <th>Investido (R$)</th>
            <th>Setor</th>
            <th>Editar</th>
        </tr>
        <tbody id="conteudo">
        </tbody>
    </thead>`;

    conteudo.forEach((element) => {
      tr = document.createElement("tr");
      tr.classList.add("transition")
      tr.innerHTML = `
            <td class="row"><strong>${element.ticker}</strong></td>
            <td class="row">${element.grupo}</td>
            <td class="row">${element.quantidade}</td>
            <td class="row">${element.preco_medio.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</td>
            <td class="row investimento">${(element.preco_medio * element.quantidade).toFixed(2)}</td>
            <td class="row">${element.setor.toUpperCase()}</td>
            <td class="row editar">
            <a href="./editar.html?id=${element.id}&ticker=${element.ticker}&grupo=${element.grupo}&quantidade=${element.quantidade}&preco=${element.preco_medio}&setor=${element.setor}" class="btnEditar">Editar</a>
            <a href="./excluir.html?id=${element.id}&ticker=${element.ticker}&grupo=${element.grupo}&quantidade=${element.quantidade}&preco=${element.preco_medio}&setor=${element.setor}" class="btnRemover">Excluir</a>
            </td>
            `;
      tabela.appendChild(tr);//
      main.appendChild(tabela);
      document.querySelector(".loading").style.display = "none";
      render();
    });
  } catch (error) {
    alert("Falha ao acessar carteira");
    window.location = "./login.html";
  }
};




const sair = async () => {
  await localStorage.removeItem("token");

  window.location = "./login.html";
};

carteira();

const total = async()=>{
  soma = []
  let investimentos = document.querySelectorAll(".investimento");
  await investimentos.forEach((valor)=> resultado = soma.push(Number(valor.textContent)));
  }
total();

const render = ()=>{
  total();
  let valor = soma.reduce((ac, va)=> ac + va);
  let resultado = valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
  document.querySelector(".total").innerHTML =  
  `Carteira ${resultado}`;
}


