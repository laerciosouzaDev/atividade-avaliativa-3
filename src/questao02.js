import leia from "readline-sync"

var qtdHoras = leia.questionInt("quantas horas trabalhou: ")

var horaTrab = leia.questionInt("Valor da hora trabalhada")

var percentual = leia.questionFloat("Digite o valor da porcentagem")

var vb = (qtdHoras * horaTrab)

var desc = vb * (percentual/100)

var salarioLiq = vb - desc

console.log("Valor do salario bruto e R$: " + vb +  "Total Descontos: "  + desc +  "Salario liquido R$: " + salarioLiq)











// percentual de desc pd = vp/100
// desc = vb * pd
// Vbruto= ht * vph
// Vl = bruto - desc