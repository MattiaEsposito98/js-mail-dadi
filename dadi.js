console.log("Dadi")
let randomNumberUser = Math.floor(Math.random() * 6) + 1
let randomNumber = Math.floor(Math.random() * 6) + 1
console.log(`Numero generato per l'utente: ${randomNumberUser}`)
console.log(`Numero generato per il pc: ${randomNumber}`)

if (randomNumberUser > randomNumber) {
  console.log("Ha vinto l'utente")
}

else {
  console.log("Ha vinto il pc")
}
