console.log("mail")

let emailTot = []
let newEmail = prompt("Inserisci la tua email")
console.log("Email utente:" + newEmail)

const isPresent = emailTot.includes(newEmail)

if (isPresent === true) {
  console.log("L'utente è presente")
}

else {
  console.log ("L'utente non è registrato")
}