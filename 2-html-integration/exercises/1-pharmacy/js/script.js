const frm = document.querySelector("form")
const outPromo = document.getElementById('outPromo')
const outPrice = document.getElementById('outPrice')

frm.addEventListener("submit", (e)=> {
    const price = Number(frm.inPrice.value)
    const discount = Math.floor(price * 2)
    const promo = frm.inMedication.value

    outPromo.innerText = `Promoção de ${promo}`
    outPrice.innerText = `Leve 2 por apenas R$: ${discount.toFixed(2)}`
    e.preventDefault()
})