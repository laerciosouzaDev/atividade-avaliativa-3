import leia from "readline-sync"

var produtoVenda = leia.questionInt("Valor do produto: ")

var valorComp = leia.question("digite o valor da compra: ")

if(valorComp < 20){
    var lucro = valorComp * 0.45
    console.log("seu lucro foi de: " + lucro + "%")
}else{
    var lucro = valorComp * 0.30
    console.log("seu lucro foi: " + lucro + "%")
}

