// Elaborar um programa que leia um número. Calcule e informe os seus vizinhos, ou seja o número anterior e posterior.

let num = Number(prompt('Digite um número'))
let previousNum = num - 1;
let nextNum = num + 1;

alert(`Número: ${num}\nVizinhos: ${previousNum} e ${nextNum}`)