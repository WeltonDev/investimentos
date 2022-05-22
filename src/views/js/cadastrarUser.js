const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const btnCriar = document.querySelector("#btnCriar");
const resposta = document.querySelector(".resposta");

const cadastrar = async()=>{
    try {
        let raw = {
            nome: nome.value,
            email: email.value,
            senha: senha.value
        }

        const requestOptions = {
            method: "POST",
            redirect: "follow",
            body: JSON.stringify(raw),
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem("token")}`,
                "Content-Type" : "application/json"
            }
        }

        const data  = await fetch(`http://localhost:4000/usuarios`, requestOptions);
        const conteudo = await data.json();
        console.log(conteudo)
        
        if(!nome.value || !email.value || !senha.value){
            resposta.textContent = `Preencha os campos corretamente e tente novamente.`;
            return;
        };
        if(conteudo == "Email já cadastrado!"){
            resposta.textContent = `${conteudo}`;
            return;
        };
        resposta.style.display = "none";
        alert("Usuário cadastrado com sucesso!");
        window.location = "./login.html";
    } catch (error) {
        alert("Falha ao cadastrar usuário" + error);
    }
}

btnCriar.addEventListener("click", cadastrar);