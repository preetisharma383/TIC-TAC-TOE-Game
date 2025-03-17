let boxes = document.querySelectorAll(".box");//to acess the button of class box
let resetBtn = document.querySelector("#reset-btn");//accessing the rest-btn
let newGameBtn = document.querySelector(".new-btn");//acess new button
let msg = document.querySelector("#msg");//display the winner accesing paragraph tag
let msgContainer = document.querySelector(".msg-container");//acess the div which has display none
let turn0 = true;//playerX,player0

const winningPattern = [//winnig pattern in which eiher xxx or 000
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {//to refer all the box
    box.addEventListener("click", () => {//adding event listenerto each box


        if (turn0) {//turn0 if true make box text as 0
            box.innerText = "0";
            box.style.color="red";
            turn0 = false;//update to false to remove duplicate

        }
        else {
            box.innerText = "X";//false box text is X
            box.style.color="black";
            turn0 = true;//again change the value true
        }
        box.disabled = true;//help if given input one time cannot change again
        checkWinner();//calls the function checkwinner
    });
});


const disableBtn = () => {//the button will not take further input
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBtn = () => {//ready to get clicked by user for input
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {//reset button function msgbox will be hidden all btn will be enabled
    turn0 = true;
    enableBtn();
    msgContainer.classList.add("hide");
};
//function will print the winner of the game
const printWinner = (winner) => {
    msg.innerText = `Congratulations The Winner is:${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
};

//function will try tomatch the winning pattern
const checkWinner = () => {
    for (let pattern of winningPattern)//it will return the array
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;//it will return the box value 0 or X
        let pos2Val = boxes[pattern[1]].innerText;//based on index from 3 rows 
        let pos3Val = boxes[pattern[2]].innerText;//0,1,2 its 1,2,3
        if (pos1Val != "" && pos2Val != "" && pos3Val != "")//it should not be empty to be a winner
        {
            if (pos1Val == pos2Val && pos2Val == pos3Val)//check the value of all three buttons
            {
                //console.log("Winner",pos1Val);//print winner
                printWinner(pos1Val);
            }
            else if (pos1Val != pos2Val && pos2Val != pos3Val) {//if it is not matching the winning pattern
                msg.innerText = "Draw Game is Over!";

            };
        }
    }
};


resetBtn.addEventListener("click", resetGame);//on click of reset-button
newGameBtn.addEventListener("click", resetGame);//on click of new-Game button
