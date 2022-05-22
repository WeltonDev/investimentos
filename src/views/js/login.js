const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const btnEntrar = document.querySelector(".btn-primary");
let respostaDom = document.querySelector(".resposta");
// localStorage.removeItem("token");

const entrar = async(event)=>{
    event.preventDefault();
    try {

        if(!email.value || !senha.value){
            respostaDom.style.display = "block";
            respostaDom.innerHTML = `Preencha os campos e tente novamente`;
            return
        }

        const raw = {
            email: email.value,
            senha: senha.value
        };

        const requestOptions = {
            method: "POST",
            redirect: "follow",
            body: JSON.stringify(raw),
            headers: {
                "Content-Type": "application/json"
            }
        };

        const resposta = await fetch("http://localhost:4000/login", requestOptions);
        const conteudo = await resposta.json();
        if(conteudo == "Usuário não encontrado!" || conteudo == "Senha inválida!"){
            respostaDom.innerHTML = conteudo;
            return;
        }

        if(conteudo){
            localStorage.setItem('token', conteudo);
            window.location = "./carteira.html"
        }
    } catch(error){
        console.log(error);
    }
}

btnEntrar.addEventListener("click", entrar);