const frm = document.querySelector("form")
const outModel = document.getElementById("outModel")
const outEntrance = document.getElementById('outEntrance')
const outInstallment = document.getElementById("outInstallment")

frm.addEventListener("submit", (e) => {
    const model = frm.inVehicle.value
    const price = frm.inPrice.value
    const year = frm.inYear.value
    const entrance = price / 2
    const installment = entrance / 12

    outModel.innerText = `Promoção: ${model} Ano: ${year}`
    outEntrance.innerText = `Entrada: R$ ${entrance.toFixed(2)}`
    outInstallment.innerText = `+ 12x de R$ ${installment.toFixed(2)}`
    e.preventDefault()
})