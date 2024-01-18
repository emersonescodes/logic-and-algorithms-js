// Elaborar um programa que leia duas notas de um aluno em uma disciplina.
// Calcule e informe a média das notas.

let firstGrade = Number(prompt('Digite a primeira nota:'))
let secGrade = Number(prompt('Digite a segunda nota:'))

const gradeAverage = (firstGrade + secGrade) / 2

alert(`Nota 1: ${firstGrade.toFixed(1)}\nNota 2: ${secGrade.toFixed(1)}\nMédia: ${gradeAverage.toFixed(1)}`)