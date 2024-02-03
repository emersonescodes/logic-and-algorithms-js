const frm = document.querySelector('form')
const result = document.querySelector('h3')

frm.addEventListener("submit", (e)=>{
  e.preventDefault()

  const name = frm.inName.value
  const male = frm.inMale.checked
  const height = Number(frm.inHeight.value)

  let peso
  if(male) {
    peso = 22 * Math.pow(height, 2)
  } else {
    peso = 21 * Math.pow(height, 2)
  }

  result.innerText = `${name}, seu peso ideal é: ${peso.toFixed(2)} kg.`
})