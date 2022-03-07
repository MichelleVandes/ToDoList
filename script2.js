// Initialisation liste :
const toDoEntry = document.getElementById("toDoEntry");
let increment = 0;
let id_Svg, newList, newSpan, newButton;

document.getElementById("maj_Line").disabled =true;
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
  console.log("Valeur Entrée : ", toDoEntry.value);
  // Création d'une nouvelle ligne
  newList = document.createElement("li"); // ajouter la classe
  newList.classList += "to_Do_Li";
  // Ajout element de texte; et l'associer à la liste
  newSpan = document.createElement("span"); // ajouter la classe
  newSpan.innerText = toDoEntry.value;
  newSpan.classList +=   "to_Do_Span"

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

  // sauvegarge de la ligne dans tableau listTab

  console.log(aa);
  // RAZ zone d'entrée
  toDoEntry.value = "";
  toDoEntry.focus();
}

function modifTache(id_Recup) {
  // Récupération de la tache via le focus, soit n°liste active
  console.log("line.id : ", id_Recup);
  let spanMaj = document.getElementById(id_Recup);
  spanMaj.className += "en_Cours";

  // Bascule du texte dans zone de saisie
  console.log("span.texte : ", spanMaj.innerHTML);
  document.getElementById("toDoEntry").value = spanMaj.innerHTML;

  // Griser tous les boutons clickables de la liste :
  var myButton = document.querySelectorAll("button");
  console.log("myButton : ", myButton);
  for (var i = 0; i < myButton.length; i++) {
    myButton[i].disabled = true;
  }


  // Modification de l'état des boutons de Créat/maj
  document.getElementById("maj_Line").disabled = false;
  document.getElementById("del_Line").disabled = false;
  document.getElementById("new_Line").disabled = true;
  console.log("top1");
  
  toDoEntry.focus();
  id_Svg = id_Recup;
    return id_Svg ;
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

  // Récupération de la tache
  console.log("Valeur Entrée : ", toDoEntry.value);
  
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
  newSpan.id 
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
  console.log("id_Svg :", id_Svg);
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
  // DéGriser tous les boutons clickables de la liste :
  var myButton = document.querySelectorAll("button");
  console.log("myButton : ", myButton);
  for (var i = 0; i < myButton.length; i++) {
    myButton[i].disabled = false;
  }
  // Modification de l'état des boutons de Créat/maj/supp
  styleNewLine();

}


function delTache() {
  console.log("id_Svg :", id_Svg);

  // Suppression de la ligne dans la liste
  document.getElementById(id_Svg).innerHTML = toDoEntry.value;

  let bb  = id_Svg.match(/(\d+)/);
  console.log("bb : ", bb[0])
  let aa = "list_" + bb[0];
  console.log("aa : ", aa)
  newList = document.getElementById(aa);

  // Supprime tous les enfant d'un élément
  while (newList.firstChild) {
    newList.removeChild(newList.firstChild);
  }
 aa = "li_" + bb[0];
  newList.remove(aa);
  styleNewLine()
}

////////////////////////////////////////////////////////
// Modification de l'état des boutons de Créat/maj/supp
////////////////////////////////////////////////////////
function styleNewLine(){  // En cours nouvelle ligne 
console.log("StyleNewLine ");
  // DéGriser tous les boutons clickables de la liste :
  var myButton = document.querySelectorAll("button");
  for (var i = 0; i < myButton.length; i++) {
    myButton[i].disabled = false;
  }
  document.getElementById("maj_Line").disabled = true;
  document.getElementById("del_Line").disabled = true;
 
  toDoEntry.value = "";
  toDoEntry.focus();
}

function styleMajLine() { // En cours de mise à jour
  var myButton = document.querySelectorAll("button");
  console.log("StyleMajLine ");
  for (var i = 0; i < myButton.length; i++) {
    myButton[i].disabled = true;
  }
  document.getElementById("maj_Line").disabled = false;
  document.getElementById("del_Line").disabled = false;
  document.getElementById("new_Line").disabled = true;

}