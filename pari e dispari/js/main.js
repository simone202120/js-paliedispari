
let numero_giocatore = document.getElementById('numero').value;
let scelta_giocatore = document.getElementById('PoD').value;
let via = document.getElementById('gioca');
let risultato;
let numeroComputer;
let somma;


via.addEventListener("click", random(1,5), controllo());


console.log(risultato)
if( risultato == scelta_giocatore){
    alert('Hai vinto');
}else{
    alert('ha vinto il computer');
}




function controllo(){
    somma = (numeroComputer + numero_giocatore);
    let divisione = somma % 2;
    if(divisione==0){
        risultato="Pari";
    }else{
        risultato="Dispari";
    }
    return risultato;
}

function random(min,max) {
    numeroComputer = Math.floor(Math.random() * (max - min +1 )) + min;
   console.log(numeroComputer)
}
