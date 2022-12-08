var aluno = prompt("Informe o seu nome")
var nota1 = parseInt(prompt( aluno + ", informe a sua nota do 1° Bimestre "))
var nota2 = parseInt(prompt(aluno + ", informe a sua nota do 2° Bimestre "))
var nota3 = parseInt(prompt(aluno + ", informe a sua nota do 3° Bimestre"))
var nota4 = parseInt(prompt(aluno + ", informe a sua nota do 4° Bimestre"))

var médiaFinal = (nota1 + nota2 + nota3 + nota4) 
/ 4
var notaFixada = médiaFinal.toFixed(1)

if(médiaFinal < 7){
  alert("Que pena " + aluno  + "! " + "Você foi reprovado(a)!")
  
}else{
  alert("Parabéns " + aluno + "! " + "Você foi aprovado(a)!")
}

console.log(" A sua média foi " + notaFixada + ".")