let monTab, maDonnee, etatTache;
let body, tbl, tblbody, tblThead;
let row, cell, cellText;

// Récupération des données dans fichier json
monFic = "./toDo.json";

Read_Json(monFic);

function Read_Json(monFic) {
  fetch(monFic).then(function (response) {
    response.json().then(function (data) {
      monTab = data;
      console.log(monTab)
      generate_table();
    });
  });
}

function generate_table() {
  // get the reference for the body
  body = document.getElementsByTagName("body")[0];

  // création élémént table puis T
  tbl = document.createElement("table");
  tblBody = document.createElement("tbody");
  tblThead = document.createElement("thead");

  // creation des lignes
  for (let newData in monTab) {
    maDonnee = monTab[newData];
    console.log(maDonnee);
    // création ligne tableau <tr>
    row = document.createElement("tr");

    // création cellule de tableau <td> et ajout du texte
    cell = document.createElement("td");
    cellText = document.createTextNode(maDonnee.toDo);
    cell.appendChild(cellText);
    row.appendChild(cell);
    // création cellule de tableau <td> et ajout du texte
    cell = document.createElement("td");
    if (maDonnee.done) {etatTache = "Réalisé"}
    else {  
      etatTache = "A faire";
    }
    cellText = document.createTextNode(etatTache);
    cell.appendChild(cellText);
    row.appendChild(cell);

    // création cellule de tableau <td> avec bouton de modification de texte

    cell = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "edit";

    button.addEventListener("click", edit.bind(null, maDonnee));

    cell.appendChild(button);
    row.appendChild(cell);

    // Ajoute ligne
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

function edit(toDo) { 
 console.log("Button is clicked dans la fonction edit");
  console.log(toDo)
}


function ajouteTache() {
  console.log("Button clické dans la fonction ajouteTache");
 

let newTache = document.getElementById("saisie").value;
 console.log(newTache);

 // Suppression des blancs à gauche et à droite de la zone de texte
 newTache = newTache.trim();
          console.log(newTache); 

 // Vérification existance de la tache
 for (let newData in monTab) {
   maDonnee = monTab[newData].toDo;
 if ((maDonnee == newTache)) {

   console.log("existe déjà");
 }
 }
 // Ajout de la tache
 // Modification d'une tache existante
 // Suppression d'une tache existante

}