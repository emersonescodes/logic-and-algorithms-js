const prompt = require("prompt-sync")()
const pesoKg = Number(prompt("Peso da Ração (kg): "))
const consumo = Number(prompt("Consumo diário (g): "))

const pesoGrama = pesoKg * 1000
const duracao = Math.floor(pesoGrama / consumo)
const sobra = pesoGrama % consumo

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}g`)