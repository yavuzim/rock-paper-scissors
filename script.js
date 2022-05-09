
let gameResult = document.querySelector("#result")
gameResult.style.display = "none"
let p1Field = document.querySelector(".player1")
let p2Field = document.querySelector(".player2")
let resultMessage = document.querySelector(".result-message")
let scoreP1 = document.querySelector(".sPlayer1")
let scoreP2 = document.querySelector(".sPlayer2")
let imgP1, imgP2, p1Src, p2Src
let score1 = 0, score2 = 0
scoreP1.textContent = score1
scoreP2.textContent = score2
const createElement = (path, i1, i2) => {
    if (p1Field.children.length < 1 || p2Field.children < 1) {
        imgP1 = document.createElement("img")
        p1Src = path
        imgP1.src = p1Src
        p1Field.appendChild(imgP1)
        imgP2 = document.createElement("img")
        p2Src = path
        p2Field.appendChild(imgP2)
    }
    imgP1.src = path + arr[i1].image
    imgP2.src = path + arr[i2].image
    if ((arr[i1].imageID == "1") && (arr[i2].imageID == "2")) {
        resultMessage.textContent = `Kağıt Taşı Sarar!`
        score1++
        scoreP1.textContent = score1
    }
    if ((arr[i1].imageID == "2") && (arr[i2].imageID == "1")) {
        resultMessage.textContent = `Kağıt Taşı Sarar!`
        score2++
        scoreP2.textContent = score2
    }
    if ((arr[i1].imageID == "1") && (arr[i2].imageID == "3")) {
        resultMessage.textContent = `Makas Kağıdı Keser!`
        score2++
        scoreP2.textContent = score2
    }
    if ((arr[i1].imageID == "3") && (arr[i2].imageID == "1")) {
        resultMessage.textContent = `Makas Kağıdı Keser!`
        score1++
        scoreP1.textContent = score1
    }
    if ((arr[i1].imageID == "2") && (arr[i2].imageID == "3")) {
        resultMessage.textContent = `Taş Makası Kırar!`
        score1++
        scoreP1.textContent = score1
    }
    if ((arr[i1].imageID == "3") && (arr[i2].imageID == "2")) {
        resultMessage.textContent = `Taş Makası Kırar!`
        score2++
        scoreP2.textContent = score2
    }
    if ((arr[i1].imageID == "1") && (arr[i2].imageID == "1") || (arr[i1].imageID == "2") && (arr[i2].imageID == "2") || (arr[i1].imageID == "3") && (arr[i2].imageID == "3")) {
        resultMessage.textContent = `Berabere`
    }
    if (score1 === 5 || score2 === 5) {
        gameResult.style.display = "block"
        if (score1 === 5 && score2 < 5) {
            document.querySelector(".message").innerHTML = "Kullanıcı 1 Kazandı!"
        }
        if (score2 === 5 && score1 < 5) {
            console.log("Kullanıcı 2 Kazandı");
            document.querySelector(".message").innerHTML = "Kullanıcı 2 Kazandı!"
        }
    }
}

let arr = [{
    "imageID": "1",
    "image": "paper.png"
}, {
    "imageID": "2",
    "image": "rock.png"
}, {
    "imageID": "3",
    "image": "scissors.png"
}
]

const btnClick = () => {
    let randomNumber1, randomNumber2
    randomNumber1 = Math.floor(Math.random() * 3)
    randomNumber2 = Math.floor(Math.random() * 3)
    createElement("images/", randomNumber1, randomNumber2)
}
const restart = () => {
    gameResult.style.display = "none"
    score1 = 0, score2 = 0
    scoreP1.textContent = score1
    scoreP2.textContent = score2
    p1Field.removeChild(imgP1)
    p2Field.removeChild(imgP2)
    resultMessage.textContent = ""
}
let startButton = document.querySelector(".game-btn")
startButton.addEventListener("click", btnClick)
let restartButton = document.querySelector(".restart-btn")
restartButton.addEventListener("click", restart)