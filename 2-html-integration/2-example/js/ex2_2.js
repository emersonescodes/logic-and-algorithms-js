const frm = document.querySelector("form")
const outTitle = document.querySelector("h3")
const outDuration = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const title = frm.inTitle.value
    const duration = Number(frm.inDuration.value)
    
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60
    
    outTitle.innerText = title
    outDuration.innerText = `${hours} hora(s) e ${minutes} minuto(s)`

    e.preventDefault()
})