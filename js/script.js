/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer
di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire,
uno alla volta, i numeri che ha visto precedentemente,
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare 
sono stati individuati.

Bonus:
Gestire l'inserimento dei numeri tramite 5 input diversi.
*/

const randomContainerEl = document.getElementById("random-num-container");
const startBtn = document.getElementById("start-btn");



startBtn.addEventListener("click", function() {
    
    startBtn.style.display = "none";
    
    createCards(5);
    
    
    const countdown = setInterval(count, 10000);

    function count(){

        newCard.innerHTML ="";
    
        newCard.className = "back-card";
  
    };

    clearInterval(countdown);
});





// ---------------------------------------------------------------------
// Functions
// ---------------------------------------------------------------------

function createCards (cardNum){

    for(i = 1; i <= cardNum; i++){

        let newCard = document.createElement("div");

        newCard.innerHTML = Math.floor(Math.random() * 20) + 1;

        newCard.className = "card";

        randomContainerEl.append(newCard);
    };
};




