// Initialisation liste :
const toDoEntry = document.getElementById("toDoEntry");
let increment = 0;
let id_Svg, newId, newList, newSpan, newButton, newDiv, myButton, allButtons, myImg;


// Ajouter une nouvelle ligne de tache to do :
function newTache() {
  // Suppression des blancs
  toDoEntry.value = toDoEntry.value.trim();

  if (toDoEntry.value == "") {
    alert("Veuillez saisir du texte avant de valider");
    toDoEntry.value = "";
    toDoEntry.focus();
    return;
  }

  // Suppression de l'image Plage
  myImg = document.getElementsByClassName("plage");
  for (var i = 0; i < myImg.length; i++) {
    myImg[i].classList.add("display_None");
  }
  document.getElementById("divToDo").classList.add("to_Do");
  document.getElementById("stylo2").classList.remove("display_None");

  // Récupération de la tache

  // Création d'une nouvelle ligne
  newList = document.createElement("li"); // ajouter la classe
  newList.classList += "to_Do_List";
  increment += 1;
  newList.id = "list_" + increment;
  // Ajout element de liste; et l'associer à la div
  newSpan = document.createElement("input");
  newSpan.disabled = true;
  newSpan.value = toDoEntry.value;
  newSpan.id = "span_" + increment;
  newSpan.classList += "to_Do_Span";

  // Bouton de mise à jour
  newButton = document.createElement("button"); // ajouter la classe
  newButton.addEventListener("click", modifTacheEnCours.bind(null, newSpan.id));
  newButton.innerText = "Modif";
  newButton.id = "bt_" + increment;
  newButton.classList += "to_Do_Button";
  newList.appendChild(newButton);

  // Bouton de suppression
  newButton = document.createElement("button"); // ajouter la classe
  newButton.addEventListener("click", suppTacheEnCours.bind(null, newSpan.id));
  newButton.innerText = "Supp";
  newButton.id = "btS_" + increment;
  newButton.classList += "to_Do_Button";
  newList.appendChild(newButton);

  // Ajout du bouton et texte dans la div
  newList.appendChild(newButton);
  newList.appendChild(newSpan);

  // Bouton de validation de mise à jour
  newButton = document.createElement("button"); // ajouter la classe
  newButton.addEventListener("click", validTacheEnCours.bind(null, newSpan.id));
  newButton.innerText = "Valider";
  newButton.id = "btV_" + increment;
  newButton.classList += "display_None ";
  newList.appendChild(newButton);

  // insert de la nouvelle ligne dans la liste préexistante dans html
  const toDoList = document.getElementById("toDoList");
  toDoList.appendChild(newList);

  // RAZ zone d'entrée
  toDoEntry.value = "";
  toDoEntry.focus();
}


function modifTacheEnCours(id_Recup) {
  // Récupération de la tache via le focus, soit n°liste active
  let spanMaj = document.getElementById(id_Recup);

  spanMaj.classList.add("en_Cours");
  spanMaj.disabled = false;
  spanMaj.focus();

  let bb = id_Recup.match(/(\d+)/);
  newId = "bt_" + bb[0];
  document.getElementById(newId).classList.add("display_None");
  newId = "btS_" + bb[0];
  document.getElementById(newId).classList.add("display_None");
  newId = "btV_" + bb[0];
  document.getElementById(newId).classList.remove("display_None");
  

  // Griser tous les boutons clickables de la liste :
  allButtons = document.querySelectorAll("button");
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
  }

  // Modification de l'état du bouton de Créat
  document.getElementById(newId).disabled = false;
  id_Svg = id_Recup;
  return id_Svg;
}

function suppTacheEnCours(id_Recup) {
  var reponse = window.confirm("Etes-vous certain de supprimer cette tâche ?");
  if (reponse == false) {
    return;
  }

  // Suppression de la ligne dans la liste
  document.getElementById(id_Recup).innerHTML = toDoEntry.value;

  let bb = id_Recup.match(/(\d+)/);
 newId = "list_" + bb[0];
  newList = document.getElementById(newId);

  // Supprime tous les enfants d'un élément
  while (newList.firstChild) {
    newList.removeChild(newList.firstChild);
  }
  newId = "li_" + bb[0];
  newList.remove(newId);
  styleNewLine();
  affichagePlage();
}

function validTacheEnCours(id_Recup) {
  // Récupération de la tache via le focus, soit n°liste active
  let spanMaj = document.getElementById(id_Recup);

  spanMaj.classList.remove("en_Cours");
  spanMaj.disabled = true;
  let bb = id_Recup.match(/(\d+)/);
  newId = "bt_" + bb[0];
  document.getElementById(newId).classList.remove("display_None");
  newId = "btS_" + bb[0];
  document.getElementById(newId).classList.remove("display_None");
  newId = "btV_" + bb[0];
  document.getElementById(newId).classList.add("display_None");
  toDoEntry.focus();
styleNewLine()
}

////////////////////////////////////////////////////////
// Modification de l'état des boutons de Créat/maj/supp
////////////////////////////////////////////////////////
function styleNewLine() {
  // En cours nouvelle ligne
  // DéGriser tous les boutons clickables de la liste :
  var myButton = document.querySelectorAll("button");
  for (var i = 0; i < myButton.length; i++) {
    myButton[i].disabled = false;
  }

  toDoEntry.value = "";
  toDoEntry.focus();
}

function styleMajLine() {
  // En cours de mise à jour
  allButtons = document.querySelectorAll("button");
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
  }
  document.getElementById("new_Line").disabled = true;
}

function affichagePlage() {
  // Si aucune tâche à faire, Affichage de l'image Plage
  allButtons = document.querySelectorAll("button");
  console.log("Nb Btn suite suppression ", allButtons.length);
  // if (allButtons.length = 1) {
  //   myImg = document.getElementsByClassName("plage");
  //   for (var i = 0; i < myImg.length; i++) {
  //     myImg[i].classList.remove("display_None");
  //   }
  //  // document.getElementById("divToDo").classList.remove("to_Do");
  //   document.getElementById("stylo2").classList.add("display_None");
  // }
}
