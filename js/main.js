var userNumberList = [];
var bombe = [];
var bombaLength = 16;
var userInput;
const regExp = '^[0-9]+$';
const inputRangeMin = 1;
var inputRangeMax = 100;
var userAttempts = 0;
const maxAttempts = inputRangeMax - bombaLength;
var userDifficulty;

userDifficulty = selectDifficulty();


bombe = generateRandomNumberList(bombaLength, inputRangeMin, inputRangeMax);

console.log(bombe);

var keepPlaying = true;

do {
    userInput = prompt("Please enter a number from " + inputRangeMin + " to " + inputRangeMax);
    //console.log("userInput is: " + userInput);
    if (checkUserInput(userInput, inputRangeMin, inputRangeMax)) {
        if (bombe.includes(parseInt(userInput))) { //isNumberBombe(bombe, userInput)
            alert("BOOOOM!!!! You have exploded!!!!");
            keepPlaying = false;
        }
        else {
            if (userNumberList.includes(userInput)) {
                alert("You have already entered this number. Please try another one.")
            }
            else {
            userNumberList.push(userInput);
            userAttempts++;
            alert("You entered a safe number. Continue.");
            }
        }
    }
} while ( keepPlaying && (userAttempts < maxAttempts));
//} while ((checkUserInput(userInput, inputRangeMin, inputRangeMax) || isNumberInList(bombe, userInput)) && (userAttempts < maxAttempts));

//console.log("user entered: " + userInput);
//console.log("isNumberInList returned: " + isNumberInList(userInput));
//console.log("checkUserInput returned: " + checkUserInput(userInput, inputRangeMin, inputRangeMax));

if (userAttempts == maxAttempts) {
    alert("You made it to the end of the game without a BOOM! Congratulations!!")
}
else {
    alert("You made " + userAttempts + " attempts before choosing a boom tile.")
}

console.log(userNumberList);


function selectDifficulty () {

var selectDiff;
var value;
selectDiff = parseInt(prompt("Please select difficulty level 0, 1 or 2"));

switch (selectDiff) {

    case 0:
        value = 100;
        break;
    case 1:
        value = 80;
        break;
    case 2:
        value = 50;
        break
    default:
        value = 100;
}
    return value;
}

function generateRandomNumberList (arrayLength, min, max) {

    var holdNumber;
    var tempArray = []

    for (var i = 0; i < arrayLength; i++) {

        do {
            holdNumber = Math.floor(Math.random() * (max - min)) + min;

            if (tempArray.includes(holdNumber)) {
                continueGenerating = true;
                console.log("Array already has this number: " + holdNumber);
            }
            else {
                continueGenerating = false;
                tempArray.push(holdNumber);
                //console.log("array pushed: " + numberList[i]);
            }
        } while (continueGenerating);

        //console.log(numberList[i] + " current position: " + i);
    }
    return tempArray;
}
function checkUserInput (value, min, max) {

    var validInput;

    if (value.match(regExp) === null || !(value >= min && value <= max)) {
        validInput = false;
        alert("You have not entered a number from " + min + " to " + max + ". Please try again.");

    }
    else {
        validInput = true;
    }

    return validInput;
}
/*
function isNumberBombe (bombeArray, number) {

    var boom;

    if (bombeArray.includes(parseInt(number))) {
            boom = true;

    }
    else {
        boom = false;
        //alert("You have entered a safe number. Continue.")

    }
    //userAttempts++;
    //console.log("userAttempts is: " + userAttempts);
    return boom;
}
*/
