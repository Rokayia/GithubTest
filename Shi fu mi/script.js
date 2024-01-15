var ch_pap_j = false;
var ch_cai_j = false;
var ch_cis_j = false;
var ch_final_ordi;
var choix;
var situation;



function m_a_j (choix, etat) {
    switch (choix) {
        case 'papier':
            ch_pap_j = etat;
            break;
        case 'caillou' : 
            ch_cai_j = etat;
            break;
        case 'ciseaux' : 
            ch_cis_j = etat;
            break;
        default:
            break;
    }
    comparerChoix();
    choisir_ordi();
    annonce()
}


function choix_ordi () {
    var nbr_alea = Math.round(Math.random()*2)+1;
    return nbr_alea;
}

function choisir_ordi() {
    var nbr_alea = choix_ordi();
    
    switch (nbr_alea) {
        case 1 : 
            ch_final_ordi = "papier";
            break;
        case 2 : 
            ch_final_ordi = "caillou";
            break;
        case 3 : 
            ch_final_ordi = "ciseaux";
            break;
        default : 
            break;
    }
}

function comparerChoix() {

    console.log("Choix du joueur:", choix); 
    console.log("Choix de l'ordinateur:", ch_final_ordi);

    if (choix == ch_final_ordi) {
        console.log('Egalité !');
        situation = 'égalité !';
    } 

    else if (
        choix == 'papier' && ch_final_ordi == "caillou" ||
        choix == 'caillou' && ch_final_ordi == "ciseaux" ||
        choix == 'ciseaux' && ch_final_ordi == "papier" 
        ) {
        console.log('victoire du joueur !');
        situation = 'victoire ! Les machines ne gagneront pas la guerre !!!';
    } 

    else {
        console.log('victoire de de l\'ordinateur ! Skynet Rules !!!')
        situation = 'victoire de de l\'ordinateur ! Skynet Rules !!!'
    }
}



var case_joueur = document.querySelectorAll('.bt_case_joueur');
case_joueur.forEach(function (case_choix) {
    case_choix.addEventListener('change',function () {
        choix = this.getAttribute ('data-choix');
        m_a_j(choix,this.checked); 
    })
});


function annonce() {
    if (choix !== undefined)
        document.getElementById('annonceur').value = 'Vous avez joué ' + choix + ' ,tandis que l\'ordinateur a joué ' + ch_final_ordi + ' la partie de termine donc pour vous sur une ' + situation;
};


