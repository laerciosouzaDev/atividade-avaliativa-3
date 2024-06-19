import leia from "readline-sync"

var nota1 = leia.questionInt("Digite a primeira nota: \n")

var nota2 = leia.questionInt("Digite a segunda nota: \n")

var nota3 = leia.questionInt("Digite a terceira nota: \n")

var peso1 = leia.questionInt("peso nota 1: \n")

var peso2 = leia.questionInt("peso nota 2: \n")

var peso3 = leia.questionInt("peso nota 3: \n")

var mediapond = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)/ (peso1 + peso2 + peso3)

console.log("media do Aluno e: " + mediapond)