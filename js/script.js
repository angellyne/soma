function soma() {
    let primeironumb, segundonumb, terceironumb, resultado;
    
    primeironumb = Number(document.getElementById("primeironumb").value);
    segundonumb = Number(document.getElementById("segundonumb").value);
    terceironumb = Number(document.getElementById("terceironumb").value); 
    
    resultado = (primeironumb + segundonumb + terceironumb); 
    
    document.getElementById("resposta").innerHTML = "o resultado é " + resultado;
    console.log(resultado);
    
    document.getElementById("primeironumb").value = "";
    document.getElementById("segundonumb").value = "";
    document.getElementById("terceironumb").value = "";
}