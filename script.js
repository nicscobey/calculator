let total = 0;
let input;
let numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
let numButtons = document.querySelectorAll('.number');
let operator;
let math = document.querySelectorAll('.math');
let screen = document.querySelector('#screen');
let string = "";

// for (let i = 0; i < numButtons.length; i++) {
//     numButtons[i].addEventListener('click', function() {
//         total += numbers[i];
//         console.log(total);
//     });
// };



//*********************************************** */
//WHEN A NEW BUTTON IS PUSHED:
//TOTAL = TOTAL * 10 + (INPUT NUMBER)
//*********************************************** */



console.log("starter total is " + total);
screen.innerHTML = total;

//----->if total = 0 and numButton[i] is pushed, total = numbers[i]
//numButtons has event listener, and if numButton[i] is clicked, 
//total += numbers[i]

//taking input
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', function updateTotal() {
        total = total * 10 + numbers[i];
        screen.innerHTML = total;
    });
}



//consider getting rid of this function, and then just adding separate event listeners
//for the math buttons that then direct to the respective math function
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', () => doMath(numbers[i]));
}

function doMath(num) {
    if (total == 0) {
        total = num;
    }
    console.log("enter doMath");

    console.log(num + " was clicked and total is " + total);
    screen.innerHTML = total;

    document.getElementById('plus').addEventListener('click', add);
    document.getElementById('minus').addEventListener('click', subtract);
}

function add() {
    console.log("enter add total is " + total);
    console.log("add was clicked");
    console.log("before add total is " + total);

    for (let i = 0; i < numButtons.length; i++) {
        // console.log("i is " + i);
        console.log("total is " + total);

        numButtons[i].addEventListener('click', function letsAdd() {
            total += numbers[i];
            console.log("numbers[i] is " + numbers[i]);
            console.log("i is " + i);
            console.log("total is " + total);
            screen.innerHTML = total;
            return;
        });
    }
    return;
}

// for (let i=0; i < numButtons.length; i++) {
//     numButtons[i].addEventListener('click', function() {
//         console.log("i is " + i);
//         string += i;
//         console.log("String is " + string);
//         input = parseInt(string);
//         console.log("Total is " + total);
//         total += numbers[i];
//         console.log("Total is " + total);
//         screen.innerHTML = total;
//     });
// };


//if total != 0 and numButton[i] is pushed, input = numbers[i]

//when math is pushed, start a function for that takes total
//and takes in a new input, then does total "math" input





// for (let i=0; i < math.length; i++) {
//     math[i].addEventListener('click', function() {
//         // if () {operator = "divide"};
//     });
// };


// document.getElementById('plus').addEventListener('click', function() {
//     console.log("add");
// });

// function math() {
//     if (operator == "divide") {
//         total /= input;
//         document.querySelector('#screen').innerHTML = total;
//     }
// };





