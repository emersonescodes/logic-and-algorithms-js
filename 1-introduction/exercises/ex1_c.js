// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja.
// Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

let productValue = Number(prompt('Informe o valor do produto'))

const inCash = productValue - (productValue * 0.1)
const installments = productValue / 3

alert(`Preço R$: ${productValue.toFixed(2)}\nÀ vista R$: ${inCash.toFixed(2)}\nOu 3x de R$: ${installments.toFixed(2)}`)