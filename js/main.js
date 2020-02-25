var numberList = []
var listLength = 16;
var userInput;
const regExp = '^[0-9]+$';
const inputRangeMin = 1;
var inputRangeMax = 100;
var userAttempts = 0;
const maxAttempts = inputRangeMax - listLength;
var userDifficulty;

userDifficulty = parseInt(prompt("Please select difficulty level 0, 1 or 2"));

switch (userDifficulty) {
    case 0:
        inputRangeMax = 100;
        break;
    case 1:
        inputRangeMax = 80;
        break;
    case 2:
        inputRangeMax = 50;
        break
    default:
        inputRangeMax = 100;
}

generateRandomNumberList();

console.log(numberList);

do {
    userInput = prompt("Please enter a number from " + inputRangeMin + " to " + inputRangeMax);
    //console.log("userInput is: " + userInput);
} while ((checkUserInput(userInput, inputRangeMin, inputRangeMax) || isNumberInList(userInput)) && (userAttempts < maxAttempts));

//console.log("user entered: " + userInput);
//console.log("isNumberInList returned: " + isNumberInList(userInput));
//console.log("checkUserInput returned: " + checkUserInput(userInput, inputRangeMin, inputRangeMax));

if (userAttempts == maxAttempts) {
    alert("You have exhausted all available tries to guess the numbers in the list. Game Over.")
}
else {
alert("End game result: You have made " + userAttempts + " attempts to guess one number in the list.");
}

function generateRandomNumberList () {

    var holdNumber;

    for (var i = 0; i < listLength; i++) {

        do {
            holdNumber = Math.floor(Math.random() * (inputRangeMax - inputRangeMin)) + inputRangeMin;

            if (numberList.includes(holdNumber)) {
                continueGenerating = true;
                console.log("Array already has this number: " + holdNumber);
            }
            else {
                continueGenerating = false;
                numberList.push(holdNumber);
                //console.log("array pushed: " + numberList[i]);
            }
        } while (continueGenerating);

        //console.log(numberList[i] + " current position: " + i);
    }
}
function checkUserInput (value, min, max) {

    var keepPrompting;

    if (value.match(regExp) === null || !(value >= min && value <= max)) {
        keepPrompting = true;
        alert("You have not entered a number from " + min + " to " + max + ". Please try again.");

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
            alert("Congratualations! You have entered a number stored on the list.");
    }
    else {
        keepPrompting = true;
        alert("You have not entered a number on the list. Please try again.")

    }
    userAttempts++;
    console.log("userAttempts is: " + userAttempts);
    return keepPrompting;
}
