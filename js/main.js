var numberList = []
var listLength = 16;
var userInput;
const regExp = '^[0-9]+$';
const inputRangeMin = 1;
const inputRangeMax = 100;

console.log("Before generating list, list has: " + numberList);
generateRandomNumberList();

console.log(numberList);



do {
    userInput = prompt("Please enter a number from 1 to 100");
    console.log("userInput is: " + userInput);
} while (checkUserInput(userInput, inputRangeMin, inputRangeMax));

console.log("user entered: " + userInput);


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
    }
    else {
        keepPrompting = false;
    }

    return keepPrompting;
}

function isNumberInList (number) {

}
