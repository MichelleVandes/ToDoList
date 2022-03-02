// Initialisation liste :
const toDoEntry = document.getElementById("toDoEntry");
let increment = 0;

document.getElementById("modifie_Tache").disabled =true;

// Ajouter une nouvelle ligne de tache to do :
function ajouteTache() {
  // Suppression des blancs
  toDoEntry.value = toDoEntry.value.trim();

  if (toDoEntry.value == "") {
    alert("Veuillez saisir du texte avant de valider");
    toDoEntry.value = "";
    toDoEntry.focus();
    return;
  }

  // Récupération de la tache
  console.log("Valeur Entrée : ", toDoEntry.value);
  // Création d'une nouvelle ligne
  const newDiv = document.createElement("div"); // ajouter la classe
  newDiv.classList += "to_Do";
  // Ajout element de liste; et l'associer à la div
  const newLine = document.createElement("li"); // ajouter la classe
  newLine.innerText = toDoEntry.value;

  increment += 1;
  const aa = "ID_" + increment;
  newLine.id = aa;

  newDiv.appendChild(newLine);
  // Ajout du bouton de mise à jour
  const newButton = document.createElement("button"); // ajouter la classe
  //newButton.onclick = modifTache(aa)
  newButton.addEventListener("click", modifTache.bind(null, aa));
  newButton.innerText = "Modif";
  newDiv.appendChild(newButton);

  // insert de la nouvelle ligne dans la liste préexistante dans html
  const toDoList = document.getElementById("toDoList");
  toDoList.appendChild(newDiv);

  // sauvegarge de la ligne dans tableau listTab

  console.log(aa);
  // RAZ zone d'entrée
  toDoEntry.value = "";
  toDoEntry.focus();
}

function modifTache(id_Recup) {
  // Récupération de la tache via le focus, soit n°liste active
  console.log("line.id : ", id_Recup);
  let ligneMaj = document.getElementById(id_Recup);
  ligneMaj.className += "en_Cours";

  // Basculle du texte dans zone de saisie
  console.log("line.texte : ", ligneMaj.innerHTML);
  document.getElementById("toDoEntry").value = ligneMaj.innerHTML;

  // Griser tous les boutons clickables de la liste :
  var myButton = document.querySelectorAll("button");
  console.log("myButton : ", myButton);
  for (var i = 0; i < myButton.length; i++) {
    myButton[i].disabled = true;
  }


  // Modification de l'état des boutons de Créat/maj
  document.getElementById("modifie_Tache").disabled = false;
  document.getElementById("ajoute_Tache").disabled = true;
}
