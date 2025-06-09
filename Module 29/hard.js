const strings = ["molle","qershi","fiq","kumbull","dredhze","boronice"];

const randomIndex = Math.floor(Math.random()*strings.length);

const [extractedWord = '', anotherWord='']=[strings[randomIndex], strings[randomIndex+1]];
if(extractedWord){
console.log("ExtractedWord:", extractedWord);

}else {
    console.log("No valid extracted word found.");
}