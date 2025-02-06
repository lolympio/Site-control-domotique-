var accueil = document.getElementById('div1');
accueil.addEventListener('click',afficher_Ac)

function afficher_Ac(){
    document.getElementById('Prises').style.display='none';
    document.getElementById('Lumière').style.display='none';
    document.getElementById('Accueil').style.display='block'

    document.getElementById('nav').style.display='none';
    document.getElementById('nav2').style.display='block';
}

var Lumiere = document.getElementById('div2');
Lumiere.addEventListener('click',afficher_lu)

function afficher_lu(){
    document.getElementById('Prises').style.display='none';
    document.getElementById('Accueil').style.display='none';
    document.getElementById('Lumière').style.display='block'

    document.getElementById('nav').style.display='none';
    document.getElementById('nav2').style.display='block';
}

var Prises = document.getElementById('div3');
Prises.addEventListener('click',afficher_Pr)

function afficher_Pr(){
    document.getElementById('Lumière').style.display='none';
    document.getElementById('Accueil').style.display='none';
    document.getElementById('Prises').style.display='block'

    document.getElementById('nav').style.display='none';
    document.getElementById('nav2').style.display='block';
}