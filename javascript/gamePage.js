const board1 = [4, 8, 5, 9, 6, 1, 7, 3, 2,
    6, 7, 2, 3, 5, 4, 8, 9, 1,
    1, 9, 3, 2, 8, 7, 6, 4, 5,
    8, 1, 6, 4, 2, 3, 5, 7, 9,
    3, 5, 7, 1, 9, 8, 4, 2, 6,
    9, 2, 4, 6, 7, 5, 3, 1, 8,
    2, 3, 1, 8, 4, 6, 9, 5, 7,
    7, 6, 9, 5, 3, 2, 1, 8, 4,
    5, 4, 8, 7, 1, 9, 2, 6, 3
]

const board2 = [3, 9, 4, 1, 7, 2, 5, 8, 6,
    1, 5, 7, 3, 8, 6, 2, 4, 9,
    2, 8, 6, 9, 4, 5, 7, 1, 3,
    5, 3, 8, 7, 9, 4, 6, 2, 1,
    9, 4, 1, 2, 6, 3, 8, 7, 5,
    7, 6, 2, 8, 5, 1, 3, 9, 4,
    4, 1, 3, 5, 2, 8, 9, 6, 7,
    6, 2, 9, 4, 3, 7, 1, 5, 8,
    8, 7, 5, 6, 1, 9, 4, 3, 2
]

const board3 = [8, 6, 2, 7, 5, 1, 4, 9, 3,
    9, 3, 7, 6, 4, 8, 1, 2, 5,
    1, 5, 4, 2, 9, 3, 7, 8, 6,
    3, 4, 6, 1, 7, 2, 9, 5, 8,
    7, 9, 5, 4, 8, 6, 2, 3, 1,
    2, 1, 8, 9, 3, 5, 6, 7, 4,
    5, 2, 9, 8, 1, 4, 3, 6, 7,
    6, 8, 1, 3, 2, 7, 5, 4, 9,
    4, 7, 3, 5, 6, 9, 8, 1, 2
]

const board4 = [9, 2, 6, 1, 7, 8, 5, 4, 3,
    4, 7, 3, 6, 5, 2, 1, 9, 8,
    8, 5, 1, 9, 4, 3, 6, 2, 7,
    6, 8, 5, 2, 3, 1, 9, 7, 4,
    7, 3, 4, 8, 9, 5, 2, 6, 1,
    2, 1, 9, 4, 6, 7, 8, 3, 5,
    5, 6, 8, 7, 2, 4, 3, 1, 9,
    3, 4, 2, 5, 1, 9, 7, 8, 6,
    1, 9, 7, 3, 8, 6, 4, 5, 2
]
let boardGame = [];
let theCurrentBoard = [];
let counter = 0;

function numberOnly(id) {
    // Get element by id which passed as parameter within HTML element event
    let element = document.getElementById(id);
    // Use numbers only pattern, from 1 to 9
    let onlyThis = /[^1-9]/gi;
    // This removes any other character but numbers as entered by user
    ;
    element.value = element.value.replace(onlyThis, "");
}

function begginers() {

    //reset the counter

    // randomly choose one bord and apply it on the page
    document.querySelectorAll('input').values = '';
    let randomBoard = [board1, board2, board3, board4];
    boardGame = randomBoard[Math.floor(Math.random() * randomBoard.length)];
    for (let i = 0; i < boardGame.length; i++) {
        // fill the board
        document.getElementById('cell-' + i).value = boardGame[i];
        //remove any class that was added before
        document.getElementById('cell-' + i).classList.remove('wrong');
        document.getElementById('cell-' + i).classList.remove('correct');
    }
    document.getElementById('mistakes').innerHTML = 'Mistakes: 0/3';
    counter = 0;
    //send the bord to clearing
    begginersClear(boardGame);


}

function professionals() {
    counter = 0;
    document.getElementById('mistakes').innerHTML = 'Mistakes: 0/3';
    let randomBoard = [board1, board2, board3, board4];
    boardGame = randomBoard[Math.floor(Math.random() * randomBoard.length)];
    for (let i = 0; i < boardGame.length; i++) {
        document.getElementById('cell-' + i).value = boardGame[i];
        document.getElementById('cell-' + i).classList.remove('wrong');
        document.getElementById('cell-' + i).classList.remove('correct');
    }
    professionalsClear(boardGame);

}

function legendery() {
    counter = 0;
    document.getElementById('mistakes').innerHTML = 'Mistakes: 0/3';
    let randomBoard = [board1, board2, board3, board4];
    boardGame = randomBoard[Math.floor(Math.random() * randomBoard.length)];
    for (let i = 0; i < boardGame.length; i++) {
        document.getElementById('cell-' + i).value = boardGame[i];
        document.getElementById('cell-' + i).classList.remove('wrong');
        document.getElementById('cell-' + i).classList.remove('correct');
    }
    legenderyClear(boardGame);

}

function begginersClear(game) {
    let newArray = [];
    //save the board so we can use it later
    theCurrentBoard = [...game];
    //clening the bord by the difficulty that was choosen
    for (let i = 0; i < 20; i++) {
        //20 times
        let randomIndex = Math.floor(Math.random() * game.length);
        if (newArray.includes(randomIndex)) {
            //if i have the index find a new one
            let newNumber = notTheSame(newArray, randomIndex);
            document.getElementById('cell-' + newNumber).value = '';
            newArray.push(newNumber);
            //change the board on every empty index to 0 (for the reset)
            theCurrentBoard[newNumber] = 0
            continue;
            //continue because i wont to finish the first loop
            //befor going to the second one
        } else if (!newArray.includes(randomIndex)) {
            document.getElementById('cell-' + randomIndex).value = '';
            newArray.push(randomIndex);
            //change the board on every empty index to 0 (for the reset)
            theCurrentBoard[randomIndex] = 0
            continue;
        }
    }
    //disable the index that have value off number
    for (let i = 0; i < game.length; i++) {
        if (document.getElementById('cell-' + i).value !== '') {
            document.getElementById('cell-' + i).disabled = true;
            //able an index that have value off null
        } else if (document.getElementById('cell-' + i).value == '')
            document.getElementById('cell-' + i).disabled = false;
    }
}

function professionalsClear(game) {
    let newArray = [];

    theCurrentBoard = [...game];

    for (let i = 0; i < 40; i++) {

        let randomIndex = Math.floor(Math.random() * game.length);
        if (newArray.includes(randomIndex)) {
            let newNumber = notTheSame(newArray, randomIndex);
            document.getElementById('cell-' + newNumber).value = '';
            newArray.push(newNumber);
            theCurrentBoard[newNumber] = 0
            continue;

        } else if (!newArray.includes(randomIndex)) {
            document.getElementById('cell-' + randomIndex).value = '';
            newArray.push(randomIndex);
            theCurrentBoard[randomIndex] = 0
            continue;
        }
    }
    for (let i = 0; i < game.length; i++) {
        if (document.getElementById('cell-' + i).value !== '') {
            document.getElementById('cell-' + i).disabled = true;
        } else if (document.getElementById('cell-' + i).value == '')
            document.getElementById('cell-' + i).disabled = false;
    }
}

function legenderyClear(game) {
    let newArray = [];

    theCurrentBoard = [...game];

    for (let i = 0; i < 60; i++) {

        let randomIndex = Math.floor(Math.random() * game.length);
        if (newArray.includes(randomIndex)) {
            let newNumber = notTheSame(newArray, randomIndex);
            document.getElementById('cell-' + newNumber).value = '';
            newArray.push(newNumber);
            theCurrentBoard[newNumber] = 0
            continue;
        } else if (!newArray.includes(randomIndex)) {
            document.getElementById('cell-' + randomIndex).value = '';
            newArray.push(randomIndex);
            theCurrentBoard[randomIndex] = 0
            continue;
        }
    }
    for (let i = 0; i < game.length; i++) {
        if (document.getElementById('cell-' + i).value !== '') {
            document.getElementById('cell-' + i).disabled = true;
        } else if (document.getElementById('cell-' + i).value == '')
            document.getElementById('cell-' + i).disabled = false;
    }
}

//if the index in the array find a new one
function notTheSame(game, number) {
    while (game.includes(number)) {
        number = Math.floor(Math.random() * game.length + 1);
    }
    return number;
}


function addEvent(event) {
    debugger;

    //save the innerHtml of the value that we write
    let inputInnerHTML = Number(event.target.value);
    let i = Number(event.target.id.replace(/cell-/g, ''));
    //save the id of the input that we write in
    let index = 'cell-' + i;

    //if the original number is the same, the number will be black
    if (inputInnerHTML === 0) {

        // if the input is erased remove the classes
        document.getElementById(index).classList.remove('wrong');
        document.getElementById(index).classList.remove('correct');
    }
    if (boardGame[i] === inputInnerHTML) {
        document.getElementById(index).classList.add('correct');

    } else if (boardGame[i] !== inputInnerHTML && inputInnerHTML !== 0) {

        //if the number is not the same, the number will be red
        //and if we did not erase the number add red and count
        document.getElementById(index).classList.add('wrong');
        counter++
        if (counter === 1) {
            document.getElementById('mistakes').innerHTML = 'Mistakes: 1/3';
        }
        if (counter === 2) {
            document.getElementById('mistakes').innerHTML = 'Mistakes: 2/3';
        }
        if (counter === 3) {
            //go to you lose
            document.getElementById('mistakes').innerHTML = 'Mistakes: 3/3';
            counter = 0;
            youLose();

        }
    }

}

function youLose() {

    //get in only when the counter is 3 
    alert("You're lost, start over");
    //reset the paragraph
    document.getElementById('mistakes').innerHTML = 'Mistakes: 0/3';
    for (let i = 0; i < 81; i++) {
        //disable the board
        document.getElementById('cell-' + i).disabled = true;
    }
}

function reset() {

    counter = 0;
    //reset the paragraph
    document.getElementById('mistakes').innerHTML = 'Mistakes: 0/3';
    for (let i = 0; i < theCurrentBoard.length; i++) {
        //remove the classes
        document.getElementById('cell-' + i).classList.remove('wrong');
        document.getElementById('cell-' + i).classList.remove('correct');
        //
        if (theCurrentBoard[i] === 0) {
            //empty value instead of 0
            document.getElementById('cell-' + i).value = '';
            document.getElementById('cell-' + i).disabled = false;
        } else {
            //fill the numbers
            document.getElementById('cell-' + i).value = theCurrentBoard[i];
        }
    }
}

function newGame() {

    counter = 0;
    alert('Please choose difficulty');
    for (let i = 0; i <= 81; i++) {
        document.getElementById('cell-' + i).value = '';
    }
}

function finishGame() {

    let countcheck = 0;
    for (let i = 0; i < boardGame.length; i++) {
        let inputInnerHTML = Number(document.getElementById('cell-' + i).value);
        if (boardGame[i] == inputInnerHTML) {
            countcheck++

        }

    }
    if (countcheck == 81) {
        alert('You win , Congratulations!! :) :)')
        document.getElementById('cell-' + i).disabled = true;
    } else {
        youLose();
    }

}


function _removeEventListener(event) {
    document.getElementById(event.srcElement.id).removeEventListener("input" + event.srcElement.id, addEvent)
}

function _addEventListener(event) {
    document.getElementById(event.srcElement.id).addEventListener("input" + event.srcElement.id, addEvent)
}