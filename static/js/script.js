/****************************/
/******Age Calculator********/
/***Author: Ujjwal Singla****/
/****************************/
var b = 0;

function ageInDays() {
    var age = prompt("Please Enter Your birth year:");
    year = 2022 - age;
    days = year * 365;
    //document.getElementById('age').innerHTML = "Your age in days is: " + days;
    var h3 = document.createElement('h3');
    var textanswer = document.createTextNode("Your age in days is: " + days + 'days');
    h3.setAttribute('id', 'agedays');
    h3.appendChild(textanswer);
    document.getElementById('container').appendChild(h3);

}

function reset() {
    document.getElementById('agedays').remove();
}



/****************************/
/*******Cat Generator********/
/***Author: Ujjwal Singla****/
/****************************/

function generate() {
    var imgage = document.createElement('img');
    var div = document.getElementById('container2');
    imgage.setAttribute('class', 'cat');
    imgage.src = "static/image/first.jpeg";
    div.appendChild(imgage);
}

function reset1() {
    document.getElementById('container2').innerHTML = '';
}



/****************************/
/***Rock,Paper and Scissor***/
/***Author: Ujjwal Singla****/
/****************************/


const hitsound = new Audio('static/sounds/swish.m4a');
const lossound = new Audio('static/sounds/aww.mp3');
const winsound = new Audio('static/sounds/cash.mp3');

function rpsGame(choice) {
    hitsound.play;
    var choices = ["paper", "rock", "scissors"];
    var mychoice = (choice.id);
    var ai = choices[Math.floor(Math.random() * choices.length)];
    console.log(ai);
    console.log(mychoice);
    var res = winner(mychoice, ai);
    //console.log(res);
    banner(mychoice, ai, res);
}

function winner(mychoice, ai) {
    console.log("It's a Tie!");
    let winnerdeclare = '';
    switch (mychoice) {
        case 'rock':
            switch (ai) {
                case 'rock':
                    console.log("It's a Tie!");
                    winnerdeclare = "It's a Tie!";
                    lossound.play;
                    break;
                case 'paper':
                    console.log("You Lost!");
                    winnerdeclare = "You Lost!";
                    lossound.play;
                    break;
                default:
                    console.log("You Won!");
                    winnerdeclare = "You Won!";
                    winsound.play;
            }

            break;
        case 'paper':
            switch (ai) {
                case 'paper':
                    console.log("It's a Tie!");
                    winnerdeclare = "It's a Tie!";
                    lossound.play;
                    break;
                case 'scissors':
                    console.log("You Lost!");
                    winnerdeclare = "You Lost!";
                    lossound.play;
                    break;
                default:
                    console.log("You Won!");
                    winnerdeclare = "You Won!";
                    winsound.play;

            }
            // code block
            break;
        default:
            // code block
            switch (ai) {
                case 'scissors':
                    console.log("It's a Tie!");
                    winnerdeclare = "It's a Tie!";
                    lossound.play;
                    break;
                case 'rock':
                    console.log("You Lost!");
                    winnerdeclare = "You Lost!";
                    lossound.play;
                    break;
                default:
                    console.log("You Won!");
                    winnerdeclare = "You Won!";
                    winsound.play;

            }
            console.log(winnerdeclare);
    }
    console.log(winnerdeclare);
    return winnerdeclare;

}

function banner(mychoice, ai, message) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');

    div1.innerHTML = "<img src='" + imageDatabase[mychoice] + "'height=150 width=150 style ='box-shadow: 0px 5px 20px rgba(0, 0, 200, 0.7);'>";
    document.getElementById('container3').appendChild(div1);
    div2.innerHTML = "<img src='" + imageDatabase[ai] + "'height=150 width=150 style ='box-shadow: 0px 5px 20px rgba(200, 0, 0, 0.7);'>";
    document.getElementById('container3').appendChild(div2);
    div3.innerHTML = "<h2 class = 'conta' >  " + message + '</h1>';
    document.getElementById('container3').appendChild(div3);

}

var buttons = document.getElementsByTagName('button');
var allbuttons = [];
for (let i = 0; i < buttons.length; i++) {
    allbuttons.push(buttons[i].id);
}

function changecolor(col) {
    switch (col.value) {
        case 'red':
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].id = 'red';
            }
            break;
        case 'green':
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].id = 'green';
            }
            break;
        case 'yellow':
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].id = 'yellow';
            }
            break;
        case 'blue':
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].id = 'blue';
            }
            break;
        case 'Reset':
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].id = allbuttons[i];
            }
            break;
        default:
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].id = allbuttons[Math.floor(Math.random() * allbuttons.length)];
            }
    }
}