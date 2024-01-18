const frm = document.querySelector('form');
const outPrice = document.getElementById("outPrice")
const outPromo = document.getElementById("outPromo")

frm.addEventListener("submit", (e)=> {
    const price = Number(frm.inPrice.value)
    const product = frm.inProduct.value
    const discount = price * 0.5

    const promo = (price * 3) - discount

    outPrice.innerText = `${product} - Promoção: Leve 3 por R$: ${promo.toFixed(2)}`
    outPromo.innerText = `O 3º produto custa apenas R$: ${discount.toFixed(2)}`
    e.preventDefault()
})
