

let p1Field = document.querySelector(".player1")
let p2Field = document.querySelector(".player2")
let imgP1, imgP2, p1Src, p2Src
const createElement = (path) => {
    console.log("p1Field.children.length : " + p1Field.children.length);
    console.log("path : " + path);
    if (p1Field.children.length < 1 && p2Field.children < 1) {
        console.log("oluştu");
        imgP1 = document.createElement("img")
        p1Src = imgP1.src = "images/"
        imgP1.src = p1Src
        p1Field.appendChild(imgP1)
        imgP2 = document.createElement("img")
        p2Src = imgP2.src = "images/"
        p2Field.appendChild(imgP2)
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
    createElement("images/")
    let randomNumber1, randomNumber2
    randomNumber1 = Math.floor(Math.random() * 3)
    randomNumber2 = Math.floor(Math.random() * 3)
    p1Src += arr[randomNumber1].image
    p2Src += arr[randomNumber2].image
    imgP1.src = p1Src
    imgP2.src = p2Src
}

let button = document.querySelector(".game-btn")
button.addEventListener("click", btnClick)