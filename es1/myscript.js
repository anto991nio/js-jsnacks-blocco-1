var primaParola = prompt("Inserisci la prima parola");
var SecondaParola = prompt("Inserisci la seconda parola");



if( primaParola.length > SecondaParola.length ){
    console.log("la parola più corta è" + " " + SecondaParola);
    console.log("la parola più lunga è" + " " + primaParola);
    document.getElementById("risultatoparola").innerHTML = "la parola più corta è" + " " + SecondaParola + " " + "la parola più lunga è" + " " + primaParola ;
    
}

else if(SecondaParola.length > primaParola.length ){
    console.log("la parola più corta è" + " " + primaParola);
    console.log("la parola più lunga è" + " " + SecondaParola);
    document.getElementById("risultatoparola").innerHTML = "la parola più corta è" + " " + primaParola + " " + "la parola più lunga è" + " " + SecondaParola ;
    

}else{
    console.log("Le due parole hanno lunghezza uguale");
    document.getElementById("risultatoparola").innerHTML ="Le due parole hanno lunghezza uguale";
}
