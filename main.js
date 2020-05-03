var encrypt = document.querySelector(".encrypt");
var decrypt = document.querySelector(".decrypt");
var text = document.getElementById("text");
var key = document.getElementById("key");
var output = document.getElementById("output");
var shuffledArr;
let alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// key generate
function shuffle(array) {
	let shuffledArray = array.slice(0,array.length)
	var currentIndex = shuffledArray.length;
	var temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = shuffledArray[currentIndex];
		shuffledArray[currentIndex] = shuffledArray[randomIndex];
		shuffledArray[randomIndex] = temporaryValue;
    }
    return shuffledArray;
}
// encryption function
function cipher(){
shuffledArr = shuffle(alphabetArr);
key.textContent = shuffledArr.join().replace(/,/g, '')
var textArr = text.value.split("");
for(let k=0; k<textArr.length;k++){
    if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase())==-1)){
    continue;
    
    }else
    textArr[k]=shuffledArr[alphabetArr.indexOf(textArr[k].toUpperCase())];
        }
    output.innerHTML = textArr.join().replace(/,/g, '')
    }

// decryption function
function decipher(){
var textArr = output.innerHTML.split("");

for(let k=0; k<textArr.length;k++){
    if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase())==-1)){
    continue;
    
    }else
    textArr[k]=alphabetArr[shuffledArr.indexOf(textArr[k].toUpperCase())];
        }
    output.innerHTML = textArr.join().replace(/,/g, '')
    }

    // encryption
encrypt.addEventListener("click", () => {
    decrypt.classList.remove("selected");
    encrypt.classList.add("selected");
    cipher();
});
// decryption
decrypt.addEventListener("click", () => {
    encrypt.classList.remove("selected");
    decrypt.classList.add("selected");
    decipher();
});

