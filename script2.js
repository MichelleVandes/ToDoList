// Initialisation liste :
const toDoEntry = document.getElementById("toDoEntry");
let increment = 0;
let id_Svg, newLine, newDiv, newButton;

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
  newDiv = document.createElement("div"); // ajouter la classe
  newDiv.classList += "to_Do";
  // Ajout element de liste; et l'associer à la div
  newLine = document.createElement("li"); // ajouter la classe
  newLine.innerText = toDoEntry.value;

  increment += 1;
  const aa = "ID_" + increment;
  newLine.id = aa;

  newDiv.appendChild(newLine);
  // Ajout du bouton de mise à jour
  newButton = document.createElement("button"); // ajouter la classe
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

  // Bascule du texte dans zone de saisie
  console.log("line.texte : ", ligneMaj.innerHTML);
  document.getElementById("toDoEntry").value = ligneMaj.innerHTML;

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
  const newDiv = document.createElement("div"); // ajouter la classe
  newDiv.classList += "to_Do_Div";
  increment += 1;
  newDiv.id = "div_" + increment;
  // Ajout element de liste; et l'associer à la div
  newLine = document.createElement("li"); // ajouter la classe
  newLine.innerText = toDoEntry.value;
  newLine.id = "li_" + increment;
  newLine.classList += "to_Do_Li";


  // Ajout du bouton de mise à jour
  const newButton = document.createElement("button"); // ajouter la classe
  newLine.id 
  newButton.addEventListener("click", modifTache.bind(null, newLine.id));
  newButton.innerText = "Modif";
  newButton.id = "bt_" + increment;
  newButton.classList += "to_Do_Button";

 // Ajout du bouton et texte dans la div
  newDiv.appendChild(newButton);
  newDiv.appendChild(newLine);

  // insert de la nouvelle ligne dans la liste préexistante dans html
  const toDoList = document.getElementById("toDoList");
  toDoList.appendChild(newDiv);

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
  let aa = "div_" + bb[0];
  console.log("aa : ", aa)
  newDiv = document.getElementById(aa);

  // Supprime tous les enfant d'un élément
  while (newDiv.firstChild) {
    newDiv.removeChild(newDiv.firstChild);
  }
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