

let parola =prompt('inserisci una parola');

function Palindromo() {
    let parolaArray= [...parola];
    console.log(parolaArray);
    let reverse = parolaArray.reverse();
    console.log(reverse);
    let parola1 = parolaArray.reverse();
    let parola2 = parola1.toString();
    console.log(parola2)
    let reverse1 = reverse.reverse();
    let reverse2 = reverse1.toString();
    console.log(reverse2)
    if(reverse2 == parola2){
        alert("La parola che hai inserito è palindoma");
    }else{
        alert("La parola che hai inserito NON è palindoma");
    }

}
Palindromo();fcddddddv



   