var tempScore = 0;
var totalScore = 0;
var roll = 0;


var tempScore = 0;
var totalScore = 0;
var roll = 0;

var throwdice = function () {
  roll = Math.floor(6*Math.random()) + 1;
@@ -44,11 +33,17 @@ var runningScore = function () {
  return totalScore;
}

$(document).ready(function() {
  $("button#start").click(function(event){
    $(".player-console").show();


  })





$(document).ready(function() {
  $("button#player1-roll").click(function(event){
    event.preventDefault();


  $("button#player2-roll").click(function(event){
    event.preventDefault();

    var result = throwdice();

    $("#die-roll-2").text(result);
    $("#round-total-2").text(tempScore);
  });

  $("button#player2-hold").click(function(event){
    $("#total-score-2").text(runningScore);
    tempScore = 0;
    $("#round-total-2").empty();
    $("#die-roll-2").empty();

  });

});
