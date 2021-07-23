//wrapper controls app
function getWord() {
    //retrieve the word
    let word = document.getElementById("word").value.toLowerCase();

    //remove spaces
    if (word.indexOf(' ') >= 0) {
        word = word.split(" ").join("");
    }

    //remove apostrophe
    if (word.indexOf("'") >= 0) {
        word = word.split("'").join("");
    }

    //remove comma
    if (word.indexOf(",") >= 0) {
        word = word.split(",").join("");
    }

    //remove exclamations
    if (word.indexOf("!") >= 0) {
        word = word.split("!").join("");
    }

    //remove periods
    if (word.indexOf(".") >= 0) {
        word = word.split(".").join("");
    }

    //remove hyphens
    if (word.indexOf("-") >= 0) {
        word = word.split("-").join("");
    }

    //remove colons
    if (word.indexOf(":") >= 0) {
        word = word.split(":").join("");
    }


    //stores rev word
    let revWord = flipWord(word);
    //pass the original and reverse and compare
    let result = compareWord(word, revWord);
    //pass the original and reverse to display
    displayResults(word, revWord, result);
};

//reverses the string
function flipWord(word) {

    //variable stores
    let revWord = "";

    //loops through one letter at a time
    for (let index = word.length - 1; index >= 0; index--) {
        //store the letters
        let letter = word[index];

        //add letters
        revWord += letter;
    }

    //after the loop
    return revWord;
}

//this function compares the two strings
function compareWord(word, revWord) {
    let result = word.localeCompare(revWord)

    return result;
}

//prints to screen
function displayResults(word, revWord, result) {
    //access the output area
    let output = document.getElementById("output");

    //replace the <p>
    output.innerText = `You entered the word ${word}. Reversed is ${revWord}.`;

    //access results
    let resultDisplay = document.getElementById("resultDisplay");

    //replace resultDisplay
    if (result == 0) {
        resultDisplay.innerText = "The word you entered IS a palindrome."
    } else {
        resultDisplay.innerText = "The word you entered is NOT a palindrome."
    }
};