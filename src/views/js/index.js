const listarAtivos = async()=>{
    const resposta = await fetch("http://localhost:4000/carteira");
    const conteudo = await resposta.json();
    
    console.log(conteudo);
};

listarAtivos();