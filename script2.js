let total = 0;
let input = 0;
let numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
let numButtons = document.querySelectorAll('.number');
// let operator;
let math = document.querySelectorAll('.math');
let screen = document.querySelector('#screen');
let inputText = document.querySelector('#input');
let screenTotal = document.querySelector('#total');
let lastFunction = document.querySelector('#lastFunction');
let mathFunction;

// for (let i = 0; i < numButtons.length; i++) {
//     numButtons[i].addEventListener('click', function() {
//         total += numbers[i];
//         console.log(total);
//     });
// };


console.log("starter total is " + total);
screenTotal.innerHTML = "\xa0";
inputText.innerHTML = "0";

//----->if total = 0 and numButton[i] is pushed, total = numbers[i]
//numButtons has event listener, and if numButton[i] is clicked, 
//total += numbers[i]

//thinking thru the functions...
//event listeners to numbers (takeInput)
//store number as input
//event listeners to math function
//[something] -- have a filter within takeInput...
    //if total != 0 before any more buttons are clicked, then do something
    // if total !=0 {
    //     for loop that takes input, tells which math function to go to
    // }
    // else {

    // }
//event listeners to numbers (takeInput)
//should I just have something that tracks whether we are currently 'in' a math problem?





//taking input
function takeInput() {
    console.log("input is " + input);

    for (let i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener('click', function updateTotal() {
            console.log("updateInput");
            input = input * 10 + numbers[i];
            console.log("input is " + input);
            inputText.innerHTML = input;

            //this doesn't work because numbers 10+ it doesn't work
            // if (total == 0) {
            //     total = input;
            //     console.log("total was 0, so now it's" + total);
            // }
            // else { return; }
        });
    }
}

takeInput();


for (let i = 0; i < math.length; i++) {
    math[i].addEventListener('click', () => doMath(i));
}

//change pos/neg
document.querySelector('#posNeg').addEventListener('click', function() {
        console.log("change pos/neg");
        input *= -1;
        // screenTotal.innerHTML = total;
        inputText.innerHTML = input;
        console.log("total is " + total);
})

//convert percentage
document.querySelector('#percentage').addEventListener('click', function() {
        console.log("convert to percentage");
        input *= .01
        // screenTotal.innerHTML = total;
        inputText.innerHTML = input;
        console.log("total is " + total);
})

document.querySelector('#equals').addEventListener('click', function equals() {
    console.log("before equals total is " + total);
    console.log("before equals input is " + input);
    console.log("before equals total is " + total);
    console.log("mathFunction is " + mathFunction);

    
    // if (mathFunction == 0) {

    // }    
    // else if (mathFunction == 1) {

    // }    
    if (mathFunction == 0) {
        total /= input;

    }    
    else if (mathFunction == 1) {
        total *= input;

    }    
    else if (mathFunction == 2) {
        total -= input;

    }    
    else if (mathFunction == 3) {
        total += input;
    }

    screenTotal.innerHTML = " ";
    inputText.innerHTML = total;
    lastFunction.innerHTML = "\xa0";
    console.log("after equals total is " + total);
    input = 0;
})

function doMath(operator) {
    mathFunction = operator;

    if (total == 0) {
        total = input;
        input = 0;
        console.log("total was 0, so now it's " + total);
        // lastFunction.innerHTML = "\xa0+";
        screenTotal.innerHTML = total;
        inputText.innerHTML = " ";
        return;
    }
    
    mathFunction = operator;
    //moved here from within else if operator = 5
    console.log("before math total is " + total);
    
    screenTotal.innerHTML = total;
    inputText.innerHTML = " ";

    if (operator == 0) {
        console.log("after divide input is " + input);
        console.log("mathFunction is " + mathFunction);
        total /= input;
        lastFunction.innerHTML = "\xa0/";
        console.log("after divide total is " + total);
    }    
    else if (operator == 1) {
        console.log("after times input is " + input);
        console.log("mathFunction is " + mathFunction);
        total *= input;
        lastFunction.innerHTML = "\xa0x";
        console.log("after times total is " + total);
    }    
    else if (operator == 2) {
        console.log("after minus input is " + input);
        console.log("mathFunction is " + mathFunction);
        total -= input;
        lastFunction.innerHTML = "\xa0-";
        console.log("after minus total is " + total);
    }    
    else if (operator == 3) {
        // total = input;

            
        // takeInput;
        // addTotal();
        console.log("after plus input is " + input);
        console.log("mathFunction is " + mathFunction);
        total += input;
        lastFunction.innerHTML = "\xa0+";
        console.log("after plus total is " + total);
    }    
    else {
        console.log("ERROR - how are we here?");
    }
    input = 0;
    screenTotal.innerHTML = total;
}



// function addTotal() {
//     console.log('enter add');

//     for (let i = 0; i < numButtons.length; i++) {
//         numButtons[i].addEventListener('click', function updateScreen() {
//             input = 0;
//             input = input * 10 + numbers[i];
//             screen.innerHTML = input;
//         });
//     }

//     for (let i = 0; i < numButtons.length; i++) {
//         numButtons[i].addEventListener('click', function() {
//             console.log('test');
//         });
//     }


// }

//consider getting rid of this function, and then just adding separate event listeners
//for the math buttons that then direct to the respective math function
// for (let i = 0; i < numButtons.length; i++) {
//     numButtons[i].addEventListener('click', () => doMath(numbers[i]));
// }

// function doMath(num) {
//     if (total == 0) {
//         total = num;
//     }
//     console.log("enter doMath");

//     console.log(num + " was clicked and total is " + total);
//     screen.innerHTML = total;

//     document.getElementById('plus').addEventListener('click', add);
//     document.getElementById('minus').addEventListener('click', subtract);
// }

// function add() {
//     console.log("enter add total is " + total);
//     console.log("add was clicked");
//     console.log("before add total is " + total);

//     for (let i = 0; i < numButtons.length; i++) {
//         // console.log("i is " + i);
//         console.log("total is " + total);

//         numButtons[i].addEventListener('click', function letsAdd() {
//             total += numbers[i];
//             console.log("numbers[i] is " + numbers[i]);
//             console.log("i is " + i);
//             console.log("total is " + total);
//             screen.innerHTML = total;
//             return;
//         });
//     }
//     return;
// }