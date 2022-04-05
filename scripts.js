const crypt = new Map([ 
    ['a', '.-'], 
    ['b', '-...'], 
    ['c', '-.-.'], 
    ['d', '-..'], 
    ['e', '.'], 
    ['f', '..-.'], 
    ['g', '--.'], 
    ['h', '....'], 
    ['i', '..'], 
    ['j', '.---'], 
    ['k', '-.-'], 
    ['l', '.-..'], 
    ['m', '--'], 
    ['n', '-.'], 
    ['o', '---'], 
    ['p', '.--.'], 
    ['q', '--.-'], 
    ['r', '.-.'], 
    ['s', '...'], 
    ['t', '-'], 
    ['u', '..-'], 
    ['v', '...-'], 
    ['w', '.--'], 
    ['x', '-..-'], 
    ['y', '-.--'], 
    ['z', '--..'], 
    [' ', '/'] 
]);

const decrypt = new Map([
    ['.-', 'a'],     
    ['-...', 'b'],     
    ['-.-.', 'c'],     
    ['-..', 'd'],     
    ['.', 'e'],     
    ['..-.', 'f'],     
    ['--.', 'g'],     
    ['....', 'h'],     
    ['..', 'i'],     
    ['.---', 'j'],     
    ['-.-', 'k'],     
    ['.-..', 'l'],     
    ['--', 'm'],     
    ['-.', 'n'],     
    ['---', 'o'],     
    ['.--.', 'p'],     
    ['--.-', 'q'],     
    ['.-.', 'r'],     
    ['...', 's'],     
    ['-', 't'],     
    ['..-', 'u'],     
    ['...-', 'v'],     
    ['.--', 'w'],     
    ['-..-', 'x'],     
    ['-.--', 'y'],     
    ['--..', 'z'], 
    ['/', ' '] 
]);

function translateWord(word) {
    let translatedWord = ""
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        translatedWord += crypt.get(word[i]);
        translatedWord += " ";
    }
    return translatedWord.trim();
}

function encryptWord() {
    word = document.getElementById("inputWord").value;
    document.getElementById("translateWord").value = translateWord(word);
}

function translateCode(morseCode) {
    let translated = "";
    const letters = morseCode.split(" ");
    for (let i = 0; i < letters.length; i++) {
        translated += decrypt.get(letters[i]);
    }
    return translated.trim();
}

function decryptCode() {
    morseCode = document.getElementById("inputCode").value; 
    document.getElementById("translateCode").value = translateCode(morseCode);
}