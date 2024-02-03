const frm = document.querySelector('form')
const result = document.querySelector('h3')

frm.addEventListener("submit", (e)=>{
  e.preventDefault()

  const name = frm.inName.value
  const male = frm.inMale.checked
  const height = Number(frm.inHeight.value)

  const peso = male ? 22 * Math.pow(height, 2) : 21 * Math.pow(height, 2);

  result.innerText = `${name}, seu peso ideal é: ${peso.toFixed(2)} kg.`
})