var numberList = []
var listLength = 16;
var userInput;
const regExp = '^[0-9]+$';
const inputRangeMin = 1;
const inputRangeMax = 100;
var userAttempts = 0;
const maxAttempts = inputRangeMax - listLength;

console.log("Before generating list, list has: " + numberList);
generateRandomNumberList();

console.log(numberList);


do {
    userInput = prompt("Please enter a number from 1 to 100");
    //console.log("userInput is: " + userInput);
} while (checkUserInput(userInput, inputRangeMin, inputRangeMax) || isNumberInList(userInput));

//console.log("user entered: " + userInput);
//console.log("isNumberInList returned: " + isNumberInList(userInput));
//console.log("checkUserInput returned: " + checkUserInput(userInput, inputRangeMin, inputRangeMax));


function generateRandomNumberList () {

    var holdNumber;

    for (var i = 0; i < listLength; i++) {

        do {
            holdNumber = Math.floor(Math.random() * 100) + 1;

            if (numberList.includes(holdNumber)) {
                continueGenerating = true;
                console.log("Array already has this number: " + holdNumber);
            }
            else {
                continueGenerating = false;
                numberList.push(holdNumber);
                console.log("array pushed: " + numberList[i]);
            }
        } while (continueGenerating);

        console.log(numberList[i] + " current position: " + i);
    }
}
function checkUserInput (value, min, max) {

    var keepPrompting;

    if (value.match(regExp) === null || !(value >= min && value <= max)) {
        keepPrompting = true;
        alert("You have not entered a number from 1 to 100. Please try again.");

    }
    else {
        keepPrompting = false;
    }

    return keepPrompting;
}

function isNumberInList (number) {

    var keepPrompting;

    if (numberList.includes(parseInt(number))) {
            keepPrompting = false;
            alert("You have entered a number stored on the list. GAME OVER!");
    }
    else {
        keepPrompting = true;
        alert("You have not entered a number on the list. Please try again.")
        userAttempts++;
    }

    return keepPrompting;
}
