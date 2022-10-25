// Dados locais de caracteres em morse
const morses = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
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
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "-": "-....-",
    "_": "..--.-",
    '"': ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    "á": ".--.-",
    "à": ".--.-",
    "ä": ".-.-",
    "é": "..-..",
    "è": ".-..-",
    "ë": "..-..",
    "í": "..-..",
    "ì": "..-..",
    "ï": "..-..",
    "ó": "---.",
    "ò": "---.",
    "ö": "---.",
    "ú": "..--",
    "ù": "..--",
    "ü": "..--",
    "ñ": "--.--",
    "ç": "-.-..",
    " ": "",
}

// Conversão em tempo real dos caracteres do teclado para morse
function convert () {
    let textarea = document.getElementById('code-morse')

    function cMorse() {
        let text = document.getElementById("code-morse").value.toLowerCase()
        document.getElementById("code-morse-result").innerHTML = text.split("").map(a => a.replace(a, morses[a])).join(" ")
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
