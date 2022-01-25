
let frase = document.querySelector("#input-texto");
let fraseSaida = document.querySelector("#msg");
let codificar = document.querySelector("#btn-cripto");
let decodificar = document.querySelector("#btn-decripto");
let copiar = document.querySelector("#btn-copy");
const regex = new RegExp("^[a-z 0-9\b]");


codificar.addEventListener('click', (event) => {

    event.preventDefault();

    fraseSaida.textContent = caracteres(codifica(frase.value));

    frase.value = "";

})
decodificar.addEventListener('click', (event) => {

    event.preventDefault();

    fraseSaida.textContent = caracteres(decodifica(frase.value));

    frase.value = "";

})



copiar.addEventListener('click', (event) => {

    event.preventDefault();

    fraseSaida.select();

    document.execCommand('copy');
    frase.value = "";
})



function codifica(frase) {

    let fraseCodificada = frase.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat").toLowerCase();

    return fraseCodificada;

}

function decodifica(frase) {

    let fraseDescodificada = frase.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    return fraseDescodificada;

}

function caracteres(frase) {

    if (!regex.test(frase)) {

        return "Digite uma frase sem acento e minúsculo";
    }
    else {
        return  frase;

    }

}





/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/