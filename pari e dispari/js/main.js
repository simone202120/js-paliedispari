
let numero_giocatore = 5;
let scelta_giocatore = document.getElementById(PoD);
/*
console.log(numero_giocatore)
let scelta_giocatore = document.getElementById(PoD);
let gioca = document.getElementById(gioca);
console.log(scelta_giocatore)

gioca.addEventListener("click", random(1,5)

)
*/
let risultato
let numeroComputer
function random(min,max) {
     numeroComputer = Math.floor(Math.random() * (max - min +1 )) + min;
    console.log(numeroComputer)
}
random(1,5)

let somma = (numeroComputer + numero_giocatore);
console.log(somma)
function controllo(){
    let divisione = somma % 2;
    if(divisione==0){
        risultato="Pari";
    }else{
        risultato="Dispari";
    }
    return risultato;
}

controllo();
console.log(risultato)
if( risultato == scelta_giocatore){
    alert('Hai vinto');
}else{
    alert('ha vinto il computer');
}
