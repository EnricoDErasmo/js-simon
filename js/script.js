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
    
    const randomNum = [];
    
    createRandomNum (randomNum, 5);

    console.log(randomNum);
    
    startBtn.style.display = "none";

    for(i = 0; i < 5; i++){

       createCards (randomNum[i]);
       
    };    
        
    setTimeout(count, 10000);

    function count(){
    
    randomContainerEl.style.display = "none";
    
    };
    
});





// ---------------------------------------------------------------------
// Functions
// ---------------------------------------------------------------------

function createCards (arrayNum){

        let newCard = document.createElement("div");

        newCard.className = "card";

        newCard.innerHTML = arrayNum;

        randomContainerEl.append(newCard);

        return newCard;
};

function createRandomNum (array, cardsNum) {

    while (array.length < cardsNum){
   
        let newNumber = Math.floor(Math.random() * 20) + 1;
    
        if (!array.includes(newNumber)) {
    
            array.push(newNumber);
        };
    };
};






