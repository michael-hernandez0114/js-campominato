var numberList = []
var listLength = 16;

console.log("Before generating list, list has: " + numberList);
generateRandomNumberList();

console.log(numberList);


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

function checkUserInput (input) {

}

function isNumberInList (number) {

}
