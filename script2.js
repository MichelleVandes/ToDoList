// Ajouter une nouvelle ligne de tache to do :
let numliste = -1;
let toDoEntry = document.getElementById('toDoEntry');
console.log (toDoEntry.value)

function ajouteTache() {

  // Suppression des blancs 
  toDoEntry.value = toDoEntry.value.trim();
 

  if(toDoEntry.value == "") {
    alert("Veuillez saisir du texte avant de valider")
    toDoEntry.value = "";  
    toDoEntry.focus();
    return;
  }

  // Récupération de la tache
  console.log (toDoEntry.value)
  // Création d'une nouvelle ligne
  const newDiv = document.createElement("div"); // ajouter la classe
    // Ajout element de liste; et l'associer à la div
    const newLine = document.createElement("li"); // ajouter la classe
    newLine.innerText = toDoEntry.value
    newDiv.appendChild(newLine);
    // Ajout du bouton de mise à jour
    const newButton = document.createElement("button");// ajouter la classe
    newButton.value = "X"
    newDiv.appendChild(newButton);

 // insert de la nouvelle ligne dans la liste préexistante dans html
 const toDoList = document.getElementById('toDoList');
 toDoList.appendChild(newDiv);


 // RAZ zone d'entrée 
 toDoEntry.value = "";  
 toDoEntry.focus();
}

