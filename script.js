console.log("Hello");
let turn = "X";
let boxes = document.querySelectorAll(".box");
let flag = false;
let count = 0;
//Turn
function myTurn() {
    return turn === "X" ? "O" : "X";
}


//Win
const checkWin = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach((e) => {
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText !== '')) {
            document.querySelector(".game-info").innerText = boxes[e[0]].innerText + "  Win....!!!"
            // console.log(boxes[e[0]].innerText);
            count--;
            document.querySelector("img").style.width = "7rem"
            flag = true;
        }
    })

}

// Game Logic

Array.from(boxes).forEach((e) => {
    e.addEventListener("click", () => {
        if (e.innerText === "") {
            e.innerText = turn;
            count++;
            turn = myTurn();
            checkWin();

            if (!flag) {
                document.querySelector(".game-info").innerText = "Its " + turn + " Turn..."
            } 
        }
        if (count == 9) {
            document.querySelector(".game-info").innerText = "DRAW......"
        }
    })

})

//Reset

document.querySelector(".reset").addEventListener("click", () => {
    document.querySelector("img").style.width = "0"
    boxes.forEach((e) => {
        e.innerText = ""
    })
    document.querySelector(".game-info").innerText = "Its X Turn..."
    turn = "X";
    count = 0;

})