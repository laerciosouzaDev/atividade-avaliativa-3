import leia from "readline-sync"

var nota1 = leia.questionFloat("Digite a primeira nota: \n")

var nota2 = leia.questionFloat("Digite a segunda nota: \n")

var nota3 = leia.questionFloat("Digite a terceira nota: \n")

var peso1 = leia.questionFloat("peso nota 1: \n")

var peso2 = leia.questionFloat("peso nota 2: \n")

var peso3 = leia.questionFloat("peso nota 3: \n")

var mediapond = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)/ (peso1 + peso2 + peso3)

console.log("media do Aluno e: " + mediapond)

if(mediapond >= 9.0){
    console.log("Tirou Nota A.")
}

if(mediapond >= 8.0){
    console.log("Tirou Nota B.")
}

if(mediapond >= 7.0){
    console.log("Tirou Nota C.")
}

if(mediapond >= 6.0){
    console.log("Tirou Nota D.")
}else (mediapond < 6)
    console.log("Tirou Nota F.")
    
