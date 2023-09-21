const earlyAcessForm = document.querySelector(".earlyaccess__form")

const emailValidation = (event) => {
  event.preventDefault()
  const email = earlyAcessForm.earlyaccess__email
  const feedbackElement = email.nextSibling.nextSibling
  const isValidEmail = email.validity.valid
  
  if(!isValidEmail){
    console.log(feedbackElement)
    feedbackElement.style = "opacity:1;"
    return
  }

  alert("Cadastrado.")
  feedbackElement.style = "opacity:0;"
}

earlyAcessForm.addEventListener("submit", emailValidation)