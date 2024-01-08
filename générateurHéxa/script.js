//   Votre mission est de coder un générateur de dégradés.
//   Vous allez manipuler des inputs de couleurs afin de créer des "linear-gradient" à la volée !

// A. Coder une interface basique
// Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc...
// Rajoutez un peu de style si besoin est. 

// Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Gérez l'implémentation de base des couleurs, il faut qu'il y est un dégradé lorsqu'on arrive sur le site (input, orientation, body...).
// 2. Gérez le changement de couleur, on doit pouvoir manipuler les inputs et provoquer le changement de couleur du site.
// 3. Occupez-vous de l'inclinaison avec l'input type "range".
// 4. Mettez en place la copie du dégradé en cliquant su le bouton "Copier le gradient".
// 5. Faites-en sorte de créer des dégradés au hasard en cliquant sur le bouton "random".
// 6. Bonne chance ! 

// C. Ajoutez du style à l'interface afin de terminer le projet.
const clr1 = document.getElementById("clr1");
const clr2= document.getElementById("clr2");
const r = document.getElementById("r");
const bg = document.getElementById("bg");
const code = document.getElementById("code");
const code2 = document.getElementById("code2");
const btn = document.getElementById("btn");
const copy = document.getElementById("copy");
const ort = document.getElementById("degre");



clr1.addEventListener("input",bgset);
clr2.addEventListener("input",bgset);
r.addEventListener("input",bgset);
btn.addEventListener("click",rdm);
copy.addEventListener("click",cp);



function bgset() {
  bg.style.background =`linear-gradient(${r.value}deg,${clr1.value},${clr2.value})`;
  code.textContent =`${clr1.value}`;
  code2.textContent =` ${clr2.value}`;
  degre.textContent =`Orientation : ${r.value}°`;
 

 
  
};


function rdm () {
    clr1.value = randomColor();
    clr2.value = randomColor();
    bgset();
    
 
};

function cp() {
    
    let cpy = `linear-gradient(${r.value}deg,${clr1.value},${clr2.value})`;
    navigator.clipboard.writeText(cpy);
    copy.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function () {
        copy.classList.remove("active");
    },1500);
}










