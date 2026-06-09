 
function soma() {
    let primeironumb, segundonumb, resultado;
   
    primeironumb = Number(document.getElementById("primeironumb").value);
    segundonumb = Number(document.getElementById("segundonumb").value);
    
    
    resultado = (primeironumb + segundonumb) ;
  
    document.getElementById("resposta").innerHTML = "o resultado é " + resultado;
    
   
    console.log(resultado);
    

    document.getElementById("primeironumb").value = "";
    document.getElementById("segundonumb").value = "";
}