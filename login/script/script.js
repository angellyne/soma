function login() {
    let email, senha;
    email = document.getElementById("email").value;
    senha = document.getElementById("password").value; 

    if (senha == "123456" && email == "user@example.com") {
    
        document.getElementById("message").textContent = "login efetuado com sucesso!";
        document.getElementById("message").style.color = "#28a745";
        document.getElementById("message").className = "message success";
    } else {
        
        document.getElementById("message").textContent = "senha ou email incorretos!";
        document.getElementById("message").style.color = "#dc3545";
        document.getElementById("message").className = "error";
    }
}

function soma(...termos) {
    let resultado = 0;
    for (let i = 0; i < termos.length; i++) {
        resultado += termos[i];
    }
    return resultado;
}

function mostrarHora() {
    let date = new Date();
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

mostrarHora();