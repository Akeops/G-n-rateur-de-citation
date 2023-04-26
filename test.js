let div = document.querySelector('div');
let bouton = document.querySelector("button");
let i = 0;

// Crétaions des variables qui contiennent chacune une citation
let citation1 = "\"L’imagination gouverne le monde.\"";
let auteur1   = "Napoléon";

let citation2 = "\"Agissez comme s'il était impossible d'échouer.\"";
let auteur2   = "Winston Churchill";

let citation3 = "\"Celui qui accepte le mal sans lutter contre lui coopère avec lui.\"";
let auteur3   = "Martin Luther King";

let citation4 = "\"À vaincre sans péril, on triomphe sans gloire.\"";
let auteur4   = "Pierre Corneille";

let citation5 = "\"Fais de ta vie un rêve, et d'un rêve, une réalité.\"";
let auteur5   = "Antoine de Saint-Exupéry";

let citation6 = "\"Un gagnant est un rêveur qui n'abandonne jamais.\"";
let auteur6   = "Nelson Mandela";

let citation7 = "\"Celui qui ne connaît pas l'histoire est condamné à la revivre.\"";
let auteur7   = "Karl Marx";

let citation8 = "\"Qui veut la paix prépare la guerre.\"";
let auteur8   = "Jules César";


// Tableau qui contient les citations
let tableauDeCitation = [
  [citation1, auteur1],
  [citation2, auteur2],
  [citation3, auteur3],
  [citation4, auteur4],
  [citation5, auteur5],
  [citation6, auteur6],
  [citation7, auteur7],
  [citation8, auteur8]
];

// Affichage des citations à l'arrivé de l'utilisateur

document.getElementById("paragrapheCitation").textContent = tableauDeCitation[0][0];

document.getElementById("auteur").textContent = tableauDeCitation[0][1];


// Fonction qui fait passer l'index du tableau à une autre ligne à chaque clique

function nouvelleCitation(){
    document.getElementById("paragrapheCitation").textContent = tableauDeCitation[i][0];
    document.getElementById("auteur").textContent = tableauDeCitation[i][1];
    i++;

    // Condition qui permet de repasser l'index à 0 quand celui-ci arrive à la fin du tableau
    if(i >= tableauDeCitation.length){
      i = 0;
    }
}




// Ajouter un style css au clique sur le bouton
bouton.addEventListener("click", function() {
  bouton.style.backgroundColor = "#665D50";
  bouton.style.color = "#F2B100";

  // Définir le temps d'attente avant de changer la couleur de fond du bouton après le clique
  setTimeout(function() {
    bouton.style.backgroundColor = "";
    bouton.style.color = "";
  }, 100); // La couleur de fond disparaîtra après 100 millisecondes
});

// Change la couleur du bouton quand l'utilisateur passe la souris sur le bouton.
bouton.addEventListener("mouseover", () => {
  bouton.style.color = "#a0830b";
  bouton.style.backgroundColor = "#1F1F1F";
});

  // Remet la couleur du bouton initial quand l'utilisateur enlève la souris du bouton.
bouton.addEventListener("mouseout", () => {
  bouton.style.color = "";
  bouton.style.backgroundColor = "";
});


    




