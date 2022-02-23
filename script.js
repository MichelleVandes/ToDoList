let monTab, maDonnee;
let body, tbl, tblbody;
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

  // creation des lignes
  for (let toDo in monTab) {

    maDonnee = monTab[toDo];

    // création ligne tableau <tr>
    row = document.createElement("tr");

    // création cellule de tableau <td> rt ajout du texte
    cell = document.createElement("td");
    cellText = document.createTextNode(maDonnee);
    cell.appendChild(cellText);
    row.appendChild(cell);

    // création cellule de tableau <td> avec bouton de modification de texte

    cell = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "edit";

    //button.click = alert("Button is clicked");
   
//button.type = "Submit"
    // button.addEventListener("click", function (toDo) {
    //   console.log(toDo);
    // });

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
