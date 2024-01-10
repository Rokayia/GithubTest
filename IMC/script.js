// Le but de ce projet est de coder un **calculateur d'IMC** à partir des valeurs rentrées par un utilisateur dans les **deux inputs**.

// A. Coder une interface basique
// Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... 
// Rajoutez un peu de style si besoin est. 
// Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Gérer les inputs, retrouvez leur valeur dans votre script quand on clique sur le bouton.
// 2. Faites une validation basique, empêchez le calcul si l'utilisateur laisse un ou deux inputs vides. 
// Montrez également un message pour l'informer de l'erreur (ex : "Veuillez remplir les inputs").
// 1. Calculer l'IMC avec les valeurs rentrées.
// 2. Calculer le rang de l'IMC par rapport à "IMCData"
// 3. Remplir l'interface en fonction des résultats
   
// C. Ajoutez du style à l'interface afin de terminer le projet.



let inputs =  document.querySelectorAll("input");//liste des deux inputs
let btn = document.querySelector("button");
let taille = document.getElementById('taille').value;
const validationTexts = document.querySelectorAll('.error');

let resultat= document.querySelector("#resultat");

btn.addEventListener('click',calculIMC);

function calculIMC(e){
    e.preventDefault();
    refresh();

 if(inputs[0].value!=="" && inputs[1].value!=="")  {
    resultat.style.display='block';
    let imc = (inputs[1].value / Math.pow(inputs[0].value / 100, 2)).toFixed(1);
resultat.innerHTML = ` imc ${imc}`;
resultat.style.color='red';
resultat.style.fontSize='25px';

if(imc<18.5){
    resultat.innerHTML += `<br>Résultat : Insuffisance pondérale (maigreur)`;
}
else if (imc >= 18.5 && imc <= 24.9) {
    resultat.innerHTML  += `<br>, vous êtes normal+--`;
}
else if (imc >= 25 && imc <= 29.9) {
    resultat.innerHTML += `<br>, vous êtes surpoids`;
}
else if (imc >= 30 && imc <= 34.9) {
    resultat.innerHTML += `<br>, vous êtes en obésité modérée`;
}
else if (imc >= 35 && imc <= 39.9) {
    resultat.innerHTML += `<br>, vous êtes en obésité sévère`;
}
else if (imc >= 40) {
    resultat.innerHTML += `<br>, vous êtes en obésité morbide`;
}

 }
 else{
    isEmpty();
 }


}
function refresh(){
    validationTexts[0].style.display='none';
    validationTexts[1].style.display='none';
    resultat.style.display='none';
    return;
}

function isEmpty(){
    if(inputs[0].value==="" && inputs[1].value===""){
        validationTexts[0].style.display='block';
        validationTexts[1].style.display='block';
    }
    else if(inputs[0].value===""){
        validationTexts[0].style.display='block';
    }
    else if(inputs[1].value===""){
        validationTexts[1].style.display='block';
    }
    return;
}