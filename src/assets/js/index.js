const morses =     {
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
    " ": "",
}

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

function load() {
    let oneTime = document.getElementById("box");
    oneTime.addEventListener("click", convert(), false);
}