function convert () {
    let textarea = document.getElementById('code-morse')

    function cMorse() {
        document.getElementById("code-morse").innerHTML = "-.-."
    }
    textarea.addEventListener('input', (e) => {
        if (e.data === 'c'){
            cMorse()
        } else {
            console.log('Não foi C')
        }
    })
}

function load() {
    let oneTime = document.getElementById("box");
    oneTime.addEventListener("click", convert(), false);
}
