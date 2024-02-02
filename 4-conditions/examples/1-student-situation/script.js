const frm = document.querySelector("form");
const outGrade = document.querySelector("h3");
const finalMessage = document.querySelector("h4");

frm.addEventListener("submit", (e)=> {
  e.preventDefault()
  const name = frm.inName.value
  const grade1 = Number(frm.inGrade1.value)
  const grade2 = Number(frm.inGrade2.value)
  const media = (grade1 + grade2) / 2
  outGrade.innerText = `Média das notas: ${media}`

  if(media >= 7) {
    finalMessage.innerText = `Parabéns ${name}! Você foi aprovado`
    finalMessage.style.color = "Green"
  } else {
    finalMessage.innerText = `Ops ${name}... Você foi reprovado`
    finalMessage.style.color = "Red"
  }
})
