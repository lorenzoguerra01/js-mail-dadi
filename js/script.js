// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// mail 


let elMail = document.getElementById("mail")
let existing = ["francesco@gmail.com", "alessio@gmail.com", "paolo@gmail.com", "luca@gmail.com", "gabriele@gmail.com", "lorenzo@gmail.com", "davide@gmail.com",]
let elBtnVerify = document.getElementById('btn-verify');
let reply = document.querySelector(".reply")

elBtnVerify.addEventListener("click", function () {
    
    let tempReply
    let mail = elMail.value;
    for (let i = 0; i < existing.length; i++) {
        if (mail === existing[i]) {
            tempReply = "Access allowed, Welcome Back!"
            reply.className = "text-success";
        } else if (tempReply === "Access allowed, Welcome Back!") {
        } else {
            tempReply = "Access Denied, Try Again!"
            reply.className = "text-danger"
        }
        console.log("tempReply= " + tempReply)
        console.log("mail= " + mail);
        console.log("reply= " + reply);
        console.log("i= " + i);    
    }
    
    reply.innerHTML = tempReply;

});

let elBtnPlay = document.getElementById('btn-play');

elBtnPlay.addEventListener("click", function () {
    let userNum = getRndInteger (1, 6);
    let cpuNum = getRndInteger (1, 6);

    console.log(userNum);
    console.log(cpuNum);

    if (userNum === cpuNum) {
        reply.innerHTML = "Nobody Won :| "
        reply.className = "";
    } else if (userNum > cpuNum) {
        reply.innerHTML = "You Won :) "
        reply.className = "text-success";
    } else {
        reply.innerHTML = "You Lose :( "
        reply.className = "text-danger"
    }
})
