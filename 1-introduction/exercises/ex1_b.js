// Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.

let pizzaValue = Number(prompt('Digite o valor da conta:'))
let clientNum = Number(prompt('Digite o número de clientes:'))

const clientValue = pizzaValue / clientNum
alert(`Valor da conta: R$ ${pizzaValue.toFixed(2)}\nNúmero de clientes: ${clientNum}\nValor por cliente: R$ ${clientValue.toFixed(2)}`)