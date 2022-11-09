// Dados locais de caracteres em morse
const morses = {
    "a": ".-",
    "A": ".-",
    "b": "-...",
    "B": "-...",
    "c": "-.-.",
    "C": "-.-.",
    "d": "-..",
    "D": "-..",
    "e": ".",
    "D": ".",
    "f": "..-.",
    "F": "..-.",
    "g": "--.",
    "G": "--.",
    "h": "....",
    "H": "....",
    "i": "..",
    "I": "..",
    "j": ".---",
    "J": ".---",
    "k": "-.-",
    "K": "-.-",
    "l": ".-..",
    "L": ".-..",
    "m": "--",
    "M": "--",
    "n": "-.",
    "N": "-.",
    "o": "---",
    "O": "---",
    "p": ".--.",
    "P": ".--.",
    "q": "--.-",
    "Q": "--.-",
    "r": ".-.",
    "R": ".-.",
    "s": "...",
    "S": "...",
    "t": "-",
    "T": "-",
    "u": "..-",
    "U": "..-",
    "v": "...-",
    "V": "...-",
    "w": ".--",
    "W": ".--",
    "x": "-..-",
    "X": "-..-",
    "y": "-.--",
    "Y": "-.--",
    "z": "--..",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "*": "-..-.",
    "?": "..--..",
    "¿": "..-.-",
    "¡": "--...-",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "\\": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "[": "-.--.",
    "]": "-.--.-",
    "{": "-.--.",
    "}": "-.--.-",
    "§": "-.-.-.",
    "%": ".-.-..",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "-": "-....-",
    "+": ".-.-.",
    "_": "..--.-",
    '"': ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    "º": "---...",
    "ª": ".--.-.",
    ">": ".-.-.",
    "<": ".-.-.",
    "á": ".--.-",
    "Á": ".--.-",
    "à": ".--.-",
    "À": ".--.-",
    "ä": ".-.-",
    "Ä": ".-.-",
    "é": "..-..",
    "É": "..-..",
    "è": ".-..-",
    "È": ".-..-",
    "ë": "..-..",
    "Ë": "..-..",
    "í": "..-..",
    "Í": "..-..",
    "ì": "..-..",
    "Ì": "..-..",
    "ï": "..-..",
    "Ï": "..-..",
    "ó": "---.",
    "Ó": "---.",
    "ò": "---.",
    "Ò": "---.",
    "ö": "---.",
    "Ö": "---.",
    "ú": "..--",
    "Ú": "..--",
    "ù": "..--",
    "Ù": "..--",
    "ü": "..--",
    "Ü": "..--",
    "ñ": "--.--",
    "Ñ": "--.--",
    "Ç": "-.-..",
    " ": "",
}

// Conversão em tempo real dos caracteres do teclado para morse
function convert () {
    let textarea = document.getElementById('code-morse')

    function cMorse() {
        let text = document.getElementById("code-morse").value
        document.getElementById("code-morse-result").innerHTML = text.split("").map(a => a.replace(a, morses[a])).join(" ").replace(/undefined/g, " ")
        console.log(text)
    }
    textarea.addEventListener('input', (e) => {
        if(morses[e.data]) cMorse()
    })
}
// Deixando uma escuta para preparar o carregamento da conversão do morse em tempo real
function load() {
    let oneTime = document.getElementById("box");
    oneTime.addEventListener("click", convert(), false);
}

function del() {
    document.getElementById("code-morse-result") = ""
}

function instantDel() {
    let button = document.getElementById("delete");
    button.addEventListener("keypress", (e) => {
        if(e.key === 'backspace') {}
    })
}
