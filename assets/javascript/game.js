$(document).ready(function () {

  var Random = Math.floor(Math.random() * 120 + 19)

  $('#scoreMatch').text(Random);

  var blueC = Math.floor(Math.random() * 12 + 1)
  var redC = Math.floor(Math.random() * 12 + 1)
  var greenC = Math.floor(Math.random() * 12 + 1)
  var yellowC = Math.floor(Math.random() * 12 + 1)

  var Total = 0;
  var wins = 0;
  var losses = 0;


  $('#wins').text(wins);
  $('#losses').text(losses);


  function reset() {
    Random = Math.floor(Math.random() * 120 + 19);
    console.log(Random)
    $('#scoreMatch').text(Random);
    blueC = Math.floor(Math.random() * 12 + 1);
    redC = Math.floor(Math.random() * 12 + 1);
    greenC = Math.floor(Math.random() * 12 + 1);
    yellowC = Math.floor(Math.random() * 12 + 1);
    Total = 0;
    $('#totalScore').text(Total);
  }

  function won() {
    alert("Congrats! You won!");
    wins++;
    $('#wins').text(wins);
    reset();
  }

  function loser() {
    alert("Sorry! You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }

  $('.red').on('click', function () {
    Total = Total + redC;
    console.log("New Total= " + Total);
    $('#totalScore').text(Total);

    if (Total == Random) {
      won();
    }
    else if (Total > Random) {
      loser();
    }
  })
  $('.blue').on('click', function () {
    Total = Total + blueC;
    console.log("New Total = " + Total);
    $('#totalScore').text(Total);
    
    if (Total == Random) {
      won();
    }
    else if (Total > Random) {
      loser();
    }
  })
  $('.yellow').on('click', function () {
    Total = Total + yellowC;
    console.log("New Total= " + Total);
    $('#totalScore').text(Total);

    if (Total == Random) {
      won();
    }
    else if (Total > Random) {
      loser();
    }
  })
  $('.green').on('click', function () {
    Total = Total + greenC;
    console.log("New Total= " + Total);
    $('#totalScore').text(Total);

    if (Total == Random) {
      won();
    }
    else if (Total > Random) {
      loser();
    }
  });
}); 