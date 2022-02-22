// Récupération des données dans fichier json
monFic = "./toDo.json";

Read_json(monFic);

function Read_Json(monFic) {
  fetch(monFic).then(function (response) {
    response.json().then(function (data) {
  let monTab = data
    //  console.log("MonTAB", monTab);

 for (var to_Do in monTab) {
  {console.log(to_Do); 
    console.log(monTab[to_Do]); 
Remplir_Html()
  }
 }

let  maDonnee = "<td>" + data.t1 + "</td>";
      document.querySelector('.e').insertAdjacentHTML("beforeend", maDonnee);
      el.insertAdjacentHTML(
        "beforeend",
        "<button type='button' onclick='res_plus();'>editer</button>"
      );
    });
  });
}


function Remplir_Html (){
https://codes-sources.commentcamarche.net/faq/11706-exploiter-des-donnes-json
https://smnarnold.com/cours/javascript/manipulation-des-contenus
}