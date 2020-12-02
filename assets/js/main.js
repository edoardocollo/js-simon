$(function() {

  /**
   * genera array numeri casuali non ripetuti da 1 a 100.
   *
   * @param {numero}  numero di elemenyti array.
   * @return {arrayNumeri} array numeri casuali.
   */
  function arrayNumeriCasuali(quantiNumeri) {
    /**
     * verifica se elemento è presente nella lista.
     * @param {lista} array in cui verificare
     * @param {target}  numero da verificare.
     * @return {boolean}
     */
    function isInList(lista, target) {
      var lista;
      // console.log(lista);
      var target;
      // console.log(target);
      var control = false;
      for (var i = 0; i < lista.length; i++) {
        if (target == lista[i]) {
          control = true;
        }
        // console.log(control, lista[i]);
      }
      // console.log(control);
      return control;
    }

    var quantiNumeri;
    var arrayNumeri = [];
    var contatore = 0;
    while (contatore < quantiNumeri) {
      var numeroRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      if (!(isInList(arrayNumeri, numeroRandom))) {
        arrayNumeri.push(numeroRandom);
        contatore++;
      }
    }
    return arrayNumeri;
  }

  // stampo array numeri casuali
  var targetOnDocument = $('#alert_box');

  var arrayPartita = arrayNumeriCasuali(5);
  var arraypc = arrayPartita;

  function mostraNumeri(target) {
    var alertBox = target;
    console.log(arrayPartita);
    alertBox.text(arrayPartita);


    // dop 30 secondi nascondo numeri e dichiaro inizio gioco
    setTimeout(function() {
      alertBox.text('inizia a giocare');
    }, 5000);
    setTimeout(function() {
      alertBox.text('');
    }, 6000);

  }
  mostraNumeri(targetOnDocument);

  // genero input numeri e bottone per inserimento in array giocatore
  setTimeout(function() {
    targetOnDocument.html('<div>inserisci un numero</div><input class="input" type="number" name="" value=""><button class="btn">inserisci</button>');
    var input = $('.input');
    var btn = $('.btn')
    var arrayGiocatore = [];

    var contatoreGiocatore = 0;

    btn.click(function() {
      var inputValue = input.val();
      if ((jQuery.inArray(inputValue, arrayGiocatore) == -1)) {
        arrayGiocatore.push(inputValue);
        input.val('')
        contatoreGiocatore++;
      }
      console.log(arrayGiocatore);

      // interrompo inserimento numeri al raggiungimento dei numeri richiesti
      if (contatoreGiocatore == 5) {
        targetOnDocument.html('<p>partita finita</p>');
        setTimeout(function() {
          // genero contenitori array pc e giocatore e punteggio e stampo valori
          targetOnDocument.html('<p class="array_giocatore"></p><p class="array_pc"></p><p class="punteggio"></p>');
          var targetArrayGiocatore = $('.array_giocatore');
          var targetArrayPc = $('.array_pc');
          var punteggio = 0;
          var targetPunteggio = $('.punteggio');
          targetArrayGiocatore.text('numeri da te scelti: ' + arrayGiocatore);
          targetArrayPc.text('numeri mostrati dal pc: ' + arraypc);

          function isInList(lista, target) {
            var lista;
            // console.log(lista);
            var target;
            // console.log(target);
            var control = false;
            for (var i = 0; i < lista.length; i++) {
              if (target == lista[i]) {
                control = true;
              }
              // console.log(control, lista[i]);
            }
            // console.log(control);
            return control;
          }
          for (var i = 0; i < arrayGiocatore.length; i++) {
            if (isInList(arraypc, arrayGiocatore[i])) {
              punteggio++;
            }
          }

          targetPunteggio.text('il tuo punteggio è di : ' + punteggio + ' punti');
        }, 2000);
      }
    });
  }, 6000);

});
