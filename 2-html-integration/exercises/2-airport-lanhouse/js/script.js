const frm = document.querySelector('form')
const outPrice = document.getElementById('outPrice')

frm.addEventListener("submit", (e)=>{
    const price = Number(frm.inPrice.value)
    const time = Number(frm.inUseTime.value)

    const pay = Math.ceil(time / 15) * price 

    
    outPrice.innerText = `Valor a pagar R$ ${pay.toFixed(2)}`
    e.preventDefault()
})