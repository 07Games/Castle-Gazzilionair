//global variables
var date = new Date();

var year = date.getFullYear;
var month = date.getMonth;
var day = date.getHours;
var minutes = date.getMinutes;

//Player variables
var coins = 0;

var cps = 0;

function returnCoins(add, addorsub) {
  if(addorsub=="add"){
    coins+=add;
    $("#coin-counter").text("+" + add);
    $("#coin-counter").css("color", "green");
  }
  else if(addorsub=="sub"){
    coins-=add;
    $("#coin-counter").text("-" + add);
    $("#coin-counter").css("color", "red");
  }
  
  $("#coin-amount").text(coins);
}

returnCoins(0,"sub")