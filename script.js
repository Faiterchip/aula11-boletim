function calculo(){
    var numero1 = parseFloat(document.getElementById('num1').value)
    var numero2 = parseFloat(document.getElementById('num2').value)
    var numero3 = parseFloat(document.getElementById('num3').value)
    var numero4 = parseFloat(document.getElementById('num4').value)
    var resultado = numero1 + numero2 + numero3 + numero4
    var resultado = resultado /4
    document.getElementById('result').innerHTML = resultado

    if (resultado >= 7){
       alert("aprovado")
    }
    else if (resultado <= 5){
        alert("reprovado")
    }
    else {
        alert("recuperaçao")
    }
}