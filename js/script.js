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
        } else if (tempReply === "Access allowed, Welcome Back!") {
        } else {
            tempReply = "Access Denied, Try Again!"
        }
        console.log("tempReply= " + tempReply)
        console.log("mail= " + mail);
        console.log("reply= " + reply);
        console.log("i= " + i);    
    }
    
    reply.innerHTML = tempReply;

});
