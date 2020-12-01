$(function() {

//   Un alert espone 5 numeri casuali diversi.



/**
* genera array numeri casuali non ripetuti da 1 a 100.
*
* @param {numero}  numero di elemenyti array.
* @return {arrayNumeri} array numeri casuali.
*/
function arrayNumeriCasuali(quantiNumeri){
  /**
  * verifica se elemento è presente nella lista.
  * @param {lista} array in cui verificare
  * @param {target}  numero da verificare.
  * @return {boolean}
  */
  function isInList (lista, target){
    var lista;
    // console.log(lista);
    var target;
    // console.log(target);
    var control = false;
    for (var i = 0; i < lista.length; i++) {
      if (target == lista[i]){
        control= true;
      }
      // console.log(control, lista[i]);
    }
    // console.log(control);
    return control;
  }



  var quantiNumeri;
  var arrayNumeri =[];
  var contatore = 0;
  while (contatore < quantiNumeri) {
    var numeroRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (!(isInList(arrayNumeri,numeroRandom))) {
      arrayNumeri.push(numeroRandom);
      contatore++;
    }
  }
  return arrayNumeri;
}


var targetOnDocument = $('#alert_box');

function mostraNumeri(target){
  var alertBox = target;
  var arrayPartita = arrayNumeriCasuali(5);
  console.log(arrayPartita);
  alertBox.text(arrayPartita);

  setTimeout(function () {
    alertBox.text('inizia a giocare');
  }, 5000);
  setTimeout(function () {
    alertBox.text('');
  }, 6000);
}
mostraNumeri(targetOnDocument);


setTimeout(function () {
  targetOnDocument.html('<div>inserisci un numero</div><input class="input" type="number" name="" value=""><button class="btn">inserisci</button>');

}, 6000);

var input = $('.input');
var btn = $('.btn')

// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.




























});
