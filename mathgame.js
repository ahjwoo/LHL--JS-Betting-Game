$(document).ready(function() {

  var game = {
    gold: 100
  };
  $('#goldid').text(game.gold);
  $('#button').on('click', function(event){
    $('#result').on('click').css('opacity', '1');
    // Defining variables 
    var betAmount = +$('#amount').val();
    var numberChosen = +$('#numbaa').val();
    var numba = Math.floor(Math.random() * 10) + 1;

      if (numberChosen === numba) {
        game.gold += betAmount;
        $('#result').text("You've guessed correctly! The number was " + numba + "! " + betAmount + " gold for you.");
        }
      else if (numberChosen === numba + 1 || numberChosen === numba - 1) {
        $('#result').text("ooooh so close! You can keep your money!")
      }
      else {
        game.gold = game.gold - betAmount;
          $('#result').text("Sorry bruh, you lost.  That'll be " + betAmount + " gold please.")
            if (game.gold <= 0 ) {
              game.gold = 0; 
              $('#result').text("You're broke! Come back with duh moneyz");
              $('#button').hide();
              $('#restart').show();
            }
        $('span').text(game.gold);
        $('#test').text(numba);
      }
  });
// EVENT: click the restart button
  $('#restart').on('click', function(){
    $('#button').show();
    $('#restart').hide();
    game.gold = 100;
    $('#goldid').text(game.gold);

  });
});




  