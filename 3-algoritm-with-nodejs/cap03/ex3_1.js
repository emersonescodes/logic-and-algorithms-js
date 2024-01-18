const prompt = require("prompt-sync")() // Add packages for data entry
const num1 = Number(prompt("1º Número: "))  // Read numbers
const num2 = Number(prompt("2º Número: "))
const soma = num1 + num2    // sum
console.log(`Soma é: ${soma}`)  // display result