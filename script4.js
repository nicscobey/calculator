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
let dotOn = false;
let dotTracker = 10;

console.log("starter total is " + total);
screenTotal.innerHTML = "\xa0";
inputText.innerHTML = "0";

//taking input
function takeInput() {
    console.log("input is " + input);

    for (let i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener('click', function updateTotal() {
            if(dotOn) {
                console.log("updateInput, dot true");
                console.log('dotTracker is ' + dotTracker);
                console.log('before dot input = ' + input);
                input = input + numbers[i]/dotTracker;
                console.log("after dot input is " + input);
                inputText.innerHTML = input;
                dotTracker *= 10;
            }
            else {
                console.log("updateInput, dot false");
                input = input * 10 + numbers[i];
                console.log("input is " + input);
                inputText.innerHTML = input;
            }
        });
    }
}

takeInput();


for (let i = 0; i < math.length; i++) {
    math[i].addEventListener('click', function assignMath() {
        console.log('in assign math and i is ' + i);
        dotOn = false;
        dotTracker = 10;

        if (i == 0) {
            lastFunction.innerHTML = "\xa0/";
        }
        else if (i == 1) {
            lastFunction.innerHTML = "\xa0x";
        }
        else if (i == 2) {
            console.log("subtract within assignmath");
            lastFunction.innerHTML = "\xa0-";
        }
        else if (i == 3) {
            console.log("add within assignmath");
            lastFunction.innerHTML = "\xa0+";
        }

        if (mathFunction == null) {
            console.log('math was null, but now it is ' + i);
            total = input;
            input = 0;
            console.log("ASSIGNMATH total was 0, so now it's " + total);
            mathFunction = i;

            screenTotal.innerHTML = total;
            inputText.innerHTML = " ";
        }
        else {
            console.log('math was not null, so going to do math');
            doMath(i);
        }
    });
}

//change pos/neg
document.querySelector('#posNeg').addEventListener('click', function() {
        console.log("change pos/neg");
        input *= -1;
        inputText.innerHTML = input;
        console.log("total is " + total);
})

//convert percentage
document.querySelector('#percentage').addEventListener('click', function() {
        console.log("convert to percentage");
        input *= .01
        inputText.innerHTML = input;
        console.log("total is " + total);
})

//dot
document.querySelector('#dot').addEventListener('click', function() {
    console.log("add a dot");
    dotOn = true;
    inputText.innerHTML = input + ".";
})

//clear 
document.querySelector('#clear').addEventListener('click', function() {
    console.log('clear');
    dotOn = false;
    dotTracker = 10;
    if (input == 0) {
        total = 0;
        screenTotal.innerHTML = " ";
    }
    else {
        input = 0;
        inputText.innerHTML = "0";
    }
})

document.querySelector('#equals').addEventListener('click', function equals() {
    console.log("before equals total is " + total);
    console.log("before equals input is " + input);
    console.log("mathFunction is " + mathFunction);

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
    input = total;
    mathFunction = null;
})

function doMath(operator) {
    console.log("operator is " + operator);
    console.log("before math total is " + total);
    console.log("before math, mathFunction is " + mathFunction);
    console.log('total is' + total);

    screenTotal.innerHTML = total;
    inputText.innerHTML = " ";

    if (mathFunction == 0) {
        console.log("after divide input is " + input);
        console.log("mathFunction is " + mathFunction);
        total /= input;
        lastFunction.innerHTML = "\xa0/";
        console.log("after divide total is " + total);
    }    
    else if (mathFunction == 1) {
        console.log("after times input is " + input);
        console.log("mathFunction is " + mathFunction);
        total *= input;
        lastFunction.innerHTML = "\xa0x";
        console.log("after times total is " + total);
    }    
    else if (mathFunction == 2) {
        console.log("after minus input is " + input);
        console.log("mathFunction is " + mathFunction);
        total -= input;
        lastFunction.innerHTML = "\xa0-";
        console.log("after minus total is " + total);
    }    
    else if (mathFunction == 3) {
        console.log("after plus input is " + input);
        console.log("mathFunction is " + mathFunction);
        total += input;
        lastFunction.innerHTML = "\xa0+";
        console.log("after plus total is " + total);
    }    
    else {
        console.log("ERROR - how are we here?");
    }

    if (operator == 0) {
        lastFunction.innerHTML = "\xa0/";
    }
    else if (operator == 1) {
        lastFunction.innerHTML = "\xa0x";
    }
    else if (operator == 2) {
        console.log("subtract");
        lastFunction.innerHTML = "\xa0-";
    }
    else if (operator == 3) {
        console.log("add");
        lastFunction.innerHTML = "\xa0+";
    }

    mathFunction = operator;
    console.log("operator is now " + operator);
    input = 0;
    console.log('input was reset to 0');
    console.log('total NOW is' + total);
    screenTotal.innerHTML = total;
}