let email = document.getElementById("email");
let usuario = document.getElementById("usuario");
let senha = document.getElementById("senha");
let confsenha = document.getElementById("conf-senha");
let cadastrar = document.getElementById("cadastrar");
let alerta = document.getElementById("alerta");

cadastrar.addEventListener("click", (a) => {
    a.preventDefault();
    if (email.value === "" || usuario.value === "" || senha.value === "" || confsenha.value === ""){
        alerta.textContent = "⚠️ Preencha os campos em vazio.";
        alerta.classList.remove("alerta-sucesso");
        alerta.classList.add("alerta-erro");
    }else{
        alerta.textContent = "✅ Cadastro realizado!";
        alerta.classList.remove("alerta-erro");
        alerta.classList.add("alerta-sucesso");
    }
})