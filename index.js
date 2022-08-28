function playGame() {

    const submitButton = document.querySelector('.submit')

    let setComputerScore = 0
    let setHumanScore = 0

    submitButton.addEventListener("click", function (e) {
        e.preventDefault()

        const playerOption = document.querySelector(".input")
        const spaceToWrite = document.querySelector(".text-space")
        const computerPlay = document.querySelector(".computer-play")
        const computerScore = document.querySelector(".computer-score")
        const humanScore = document.querySelector(".human-score")
        const poupWin = document.querySelector("#win")
        const poupLose = document.querySelector("#lose")

        const playerOptionLowerCase = playerOption.value.toLowerCase()

        const pedra = { pedra: 1 }
        const papel = { papel: 2 }
        const tesoura = { tesoura: 3 }



        if (playerOptionLowerCase !== "pedra" && playerOptionLowerCase !== "papel" && playerOptionLowerCase !== "tesoura") {
            playerOption.value = ''
            spaceToWrite.innerText = "Argumento inválido, digite pedra, papel ou tesoura."
        }

        if (playerOptionLowerCase === "pedra") {
            let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1

            if (randomNumber === pedra.pedra) {
                spaceToWrite.innerText = "jogo empatado"
                computerPlay.innerText = "Pedra"
                playerOption.value = ''
            } else if (randomNumber === papel.papel) {
                spaceToWrite.innerText = "Você perdeu"
                computerPlay.innerText = "Papel"
                setComputerScore++
                playerOption.value = ''
                computerScore.innerText = setComputerScore
            } else if (randomNumber === tesoura.tesoura) {
                spaceToWrite.innerText = "Você ganhou"
                computerPlay.innerText = "Tesoura"
                setHumanScore++
                humanScore.innerText = setHumanScore
                playerOption.value = ''
            } else {
                spaceToWrite = "Algo deu errado! :("
            }
        }

        if (playerOptionLowerCase === "papel") {
            let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1

            if (randomNumber === pedra.pedra) {
                spaceToWrite.innerText = "Você ganhou"
                computerPlay.innerText = "Pedra"
                setHumanScore++
                humanScore.innerText = setHumanScore
                playerOption.value = ''
            } else if (randomNumber === papel.papel) {
                spaceToWrite.innerText = "Jogo empatado"
                computerPlay.innerText = "Papel"
                playerOption.value = ''
            } else if (randomNumber === tesoura.tesoura) {
                spaceToWrite.innerText = "Você perdeu"
                computerPlay.innerText = "Tesoura"
                setComputerScore++
                computerScore.innerText = setComputerScore
                playerOption.value = ''
            } else {
                spaceToWrite = "Algo deu errado! :("
            }
        }

        if (playerOptionLowerCase === "tesoura") {
            let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1

            if (randomNumber === pedra.pedra) {
                spaceToWrite.innerText = "Você perdeu"
                computerPlay.innerText = "Pedra"
                setComputerScore++
                computerScore.innerText = setComputerScore
                playerOption.value = ''
            } else if (randomNumber === papel.papel) {
                spaceToWrite.innerText = "Você ganhou"
                computerPlay.innerText = "Papel"
                setHumanScore++
                humanScore.innerText = setHumanScore
                playerOption.value = ''
            } else if (randomNumber === tesoura.tesoura) {
                spaceToWrite.innerText = "Jogo empatado"
                computerPlay.innerText = "Tesoura"
                playerOption.value = ''
            } else {
                spaceToWrite = "Algo deu errado! :("
            }
        }

        if (setComputerScore === 5) {
            return poupLose.style.display = "block"
        }

        if (setHumanScore === 5) {
            return poupWin.style.display = "block"
        }
    })

}

playGame()