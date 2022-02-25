// Ajouter une nouvelle ligne de tache to do :
let numliste = -1;
let liste; 

function Ajouter() {
  // Récupération de la tache
  let nouvelleTache = document.getElementById("valeur").value;

  // Suppression des blancs à gauche et à droite de la zone de texte
  nouvelleTache = nouvelleTache.trim();
  if (nouvelleTache == "") {
    alert("marche pas sans texte!");
    return;
  } else {
    //Création nouvelle ligne, et incrémentation liste pour maj
     liste = document.createElement("ol");
     numliste += 1; 
     liste.id = "id"+numliste;
     numliste +=1; 

    // Bouton
    let button = document.createElement("button");
    button.innerText = "edit";
    button.addEventListener("click", edit.bind(null, numliste));
    liste.appendChild(button);

    // Texte

    let t = document.createTextNode(nouvelleTache);
   
    liste.appendChild(t);

    document.getElementById("valeur").value = "";
    document.getElementById("maListe").appendChild(liste);
  }
}


function edit(numliste) {
  console.log("oups");
  console.log(numliste);
}