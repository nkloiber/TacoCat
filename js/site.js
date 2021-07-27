//wrapper controls the app
function getWord() {
    //get the user's word
    let word = document.getElementById("word").value.toLowerCase();

    //check for spaces
    if (word.indexOf(' ') >= 0) {
        word = word.split(" ").join("");
    }

    //check for apostrophes
    if (word.indexOf("'") >= 0) {
        word = word.split("'").join("");
    }

    //check for commas
    if (word.indexOf(",") >= 0) {
        word = word.split(",").join("");
    }

    //check for exclamations
    if (word.indexOf("!") >= 0) {
        word = word.split("!").join("");
    }

    //check for periods
    if (word.indexOf(".") >= 0) {
        word = word.split(".").join("");
    }

    //check for dashes 
    if (word.indexOf("-") >= 0) {
        word = word.split("-").join("");
    }

    //check for colons
    if (word.indexOf(":") >= 0) {
        word = word.split(":").join("");
    }


    //store the reversed word
    let revWord = flipWord(word);
    //pass original and rev to compare funct
    let result = compareWord(word, revWord);
    //pass the original and rev to display funct
    displayResults(word, revWord, result);
};

function flipWord(word) {

    //will store reverse word
    let revWord = "";

    //loop through one letter at a time
    for (let index = word.length - 1; index >= 0; index--) {
        //store the letter
        let letter = word[index];

        //add letter to variable above
        revWord += letter;
    }

    //send back reversed word after loop
    return revWord;
}

//compares two strings and returns value
function compareWord(word, revWord) {
    let result = word.localeCompare(revWord)

    return result;
}

//takes info and prints to screen
function displayResults(word, revWord, result) {
    //accesses the output
    let output = document.getElementById("output");

    //replace what is in <p> element
    output.innerText = `You entered ${word}. ${revWord} is the reverse!`;

    //accesses the results
    let resultDisplay = document.getElementById("resultDisplay");

    //replaces in resultDisplay <p> 
    if (result == 0) {
        resultDisplay.innerText = "This word is a palindrome. Congrats!"
    } else {
        resultDisplay.innerText = "This word isn't a palindrome."
    }
};