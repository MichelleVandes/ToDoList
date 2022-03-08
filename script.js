// Initialisation liste :
const toDoEntry = document.getElementById("toDoEntry");
let increment = 0;
let id_Svg, newList, newSpan, newButton, newDiv;

document.getElementById("maj_Line").disabled = true;
document.getElementById("del_Line").disabled = true;

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
  // Création d'une nouvelle ligne
  newList = document.createElement("li"); // ajouter la classe
  newList.classList += "to_Do_Li";
  // Ajout element de texte; et l'associer à la liste
  newSpan = document.createElement("span"); // ajouter la classe
  newSpan.innerText = toDoEntry.value;
  newSpan.classList += "to_Do_Span";

  increment += 1;
  const aa = "ID_" + increment;
  newSpan.id = aa;

  newList.appendChild(newSpan);
  // Bouton de mise à jour
  newButton = document.createElement("button"); // ajouter la classe
  newButton.addEventListener("click", modifTache.bind(null, aa));
  newButton.classList += "to_Do_Button";
  newButton.innerText = "Modif";
  newList.appendChild(newButton);

  // insert de la nouvelle ligne dans la liste préexistante dans html
  const toDoList = document.getElementById("toDoList");
  toDoList.appendChild(newList);

  // RAZ zone d'entrée
  toDoEntry.value = "";
  toDoEntry.focus();
}

function modifTache(id_Recup) {
  // Récupération de la tache via le focus, soit n°liste active
  let spanMaj = document.getElementById(id_Recup);

  spanMaj.classList.add("en_Cours");

  // Bascule du texte dans zone de saisie
  console.log("span.texte : ", spanMaj.innerHTML);
  document.getElementById("toDoEntry").value = spanMaj.innerHTML;

  // Griser tous les boutons clickables de la liste :
  var myButton = document.querySelectorAll("button");
  for (var i = 0; i < myButton.length; i++) {
    myButton[i].disabled = true;
  }

  // Modification de l'état des boutons de Créat/maj
  document.getElementById("maj_Line").disabled = false;
  document.getElementById("del_Line").disabled = false;
  document.getElementById("new_Line").disabled = true;

  toDoEntry.focus();
  id_Svg = id_Recup;
  return id_Svg;
}

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
  let myImg = document.getElementsByClassName("plage");
  for (var i = 0; i < myImg.length; i++) {
    myImg[i].classList.add("display_None");
  }
  document.getElementById("divToDo").classList.add("to_Do")
  document.getElementById("stylo2").classList.remove("display_None");
 
  // Récupération de la tache

  // Création d'une nouvelle ligne
  newList = document.createElement("li"); // ajouter la classe
  newList.classList += "to_Do_List";
  increment += 1;
  newList.id = "list_" + increment;
  // Ajout element de liste; et l'associer à la div
  newSpan = document.createElement("span"); // ajouter la classe
  newSpan.innerText = toDoEntry.value;
  newSpan.id = "span_" + increment;
  newSpan.classList += "to_Do_Span";

  // Ajout du bouton de mise à jour
  const newButton = document.createElement("button"); // ajouter la classe
  newSpan.id;
  newButton.addEventListener("click", modifTache.bind(null, newSpan.id));
  newButton.innerText = "Modif";
  newButton.id = "bt_" + increment;
  newButton.classList += "to_Do_Button";

  // Ajout du bouton et texte dans la div
  newList.appendChild(newButton);
  newList.appendChild(newSpan);

  // insert de la nouvelle ligne dans la liste préexistante dans html
  const toDoList = document.getElementById("toDoList");
  toDoList.appendChild(newList);

  // RAZ zone d'entrée
  toDoEntry.value = "";
  toDoEntry.focus();
}

function majTache() {
  // Suppression des blancs
  toDoEntry.value = toDoEntry.value.trim();

  if (toDoEntry.value == "") {
    alert("Veuillez saisir du texte avant de valider");
    toDoEntry.value = "";
    toDoEntry.focus();
    return;
  }
  // Modification du texte dans la liste
  document.getElementById(id_Svg).innerHTML = toDoEntry.value;

  document.getElementById(id_Svg).classList.remove("en_Cours");
  // DéGriser tous les boutons clickables de la liste :
  var myButton = document.querySelectorAll("button");
  for (var i = 0; i < myButton.length; i++) {
    myButton[i].disabled = false;
  }
  // Modification de l'état des boutons de Créat/maj/supp
  styleNewLine();
}

function delTache() {
  var reponse = window.confirm("Etes-vous certain de supprimer cette tâche ?");
  if (reponse == false) {
    return;
  }

  // Suppression de la ligne dans la liste
  document.getElementById(id_Svg).innerHTML = toDoEntry.value;

  let bb = id_Svg.match(/(\d+)/);
  let aa = "list_" + bb[0];
  newList = document.getElementById(aa);

  // Supprime tous les enfant d'un élément
  while (newList.firstChild) {
    newList.removeChild(newList.firstChild);
  }
  aa = "li_" + bb[0];
  newList.remove(aa);
  styleNewLine();
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
  document.getElementById("maj_Line").disabled = true;
  document.getElementById("del_Line").disabled = true;

  toDoEntry.value = "";
  toDoEntry.focus();

  // Si aucune tâche à faire, Affichage de l'image Plage
  if (myButton.length >= 3) {
    let myImg = document.getElementsByClassName("plage");
    for (var i = 0; i < myImg.length; i++) {
      myImg[i].classList.remove("display_None");
    }
    document.getElementById("divToDo").classList.remove("to_Do");
    document.getElementById("stylo2").classList.add("display_None");
  }
}

function styleMajLine() {
  // En cours de mise à jour
  var myButton = document.querySelectorAll("button");
  for (var i = 0; i < myButton.length; i++) {
    myButton[i].disabled = true;
  }
  document.getElementById("maj_Line").disabled = false;
  document.getElementById("del_Line").disabled = false;
  document.getElementById("new_Line").disabled = true;
}
