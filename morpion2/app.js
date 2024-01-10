let player = "X"; //premier joueur

const info = document.querySelector(".info") // appel info de html
info.textContent = `Au tour de ${player}`//change le texte de info

const boxes = document.querySelectorAll(".box")// appel toutes les box de html
boxes.forEach(box => box.addEventListener("click",handleClick))

const game = ["","","","","","","","",""];
let lock = false;

function handleClick(e){

    //recupère la box sur laquelle on a cliqué
    const clickBox = e.target;
    //recupère l'index de la box cliqué
    const boxIndex = clickBox.getAttribute("little-box");
    
    if(game[boxIndex] !== "" || lock){
        return;// return quand une case est prise
    }

    game[boxIndex] = player;
    clickBox.textContent = player;
 
    verification();
}
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function verification(){

    for(let i = 0; i < winningCombinations.length; i++){ // boucle pour comparer les resultats avec les conbinaisons gagnantes
        const combinationsCheck = winningCombinations[i];

        let a = game[combinationsCheck[0]]
        let b = game[combinationsCheck[1]]
        let c = game[combinationsCheck[2]]

        if(a === "" || b === "" || c === ""){
            continue;
        }
        else if(a === b && b === c){
            info.textContent = `Le joueur ${player} a gagné ! Recharger la page pour recommencer.`
            lock = true;
            return;
        }
    }
    if(!game.includes('')){
        info.textContent = 'Match Nul ! Recharger la page pour recommencer.'
        lock = true
        return;
    }
    switchPayer()
}

function switchPayer(){
    player = player === "X" ? "O" : "X";
    info.textContent = `Au tour de ${player}`
}