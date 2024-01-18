const frm = document.querySelector("form")
const outPrice = document.querySelector('#outPrice')

frm.addEventListener("submit", (e) => {
    const price = frm.inPrice.value
    const weight = frm.inWeight.value

    const gram = weight / 1000

    outPrice.innerText = `Valor a pagar R$: ${(price * gram).toFixed(2)}`
    e.preventDefault()
})