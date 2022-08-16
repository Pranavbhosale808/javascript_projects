const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refersh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was the Correct word`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random objects from words//
    let wordArray = randomObj.word.split(""); // splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // getting random number
        // shuffling and swiping wordArray letters randomly 
        [wordArray[i], wordArray[j]] = [wordArray[j],wordArray[i]];
    }
    wordText.innerText = wordArray.join(" "); //passing shuffled word as word text
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    console.log(randomObj);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase(); // getting user value
    if(!userWord) return alert(`Oops ! it is empty enter something`); //if user didn't enter anything

    //if user word doesn't match with the correct word'
    if(userWord !== correctWord) return alert(`Oops ! ${userWord} is not a correct word`);

    // if above two if conditions are failed then show congrats alert because user word is correct
    alert(`Congra ! ${userWord.toUpperCase()} is a Correct word`);
}

refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord)