var CurrentMarketPrice = 10;
var PreviousMarketMovements = [];
var MarketHistoryLength = 10;
var CurrentWorth = 0;

function CalculateMarketPrice(){
  var chance = Math.random()+CalculatePercentDown();
  var change = (Math.random()*5);
  if(chance > 1){
    PreviousMarketMovements.push("Up")
    CurrentMarketPrice += change;
  }else{
    if(CurrentMarketPrice - change > 0.5){
      PreviousMarketMovements.push("Down");
      CurrentMarketPrice -= change;
    }else{
      PreviousMarketMovements.push("Up")
      CurrentMarketPrice += change;
    }
  }
  if(PreviousMarketMovements.length > MarketHistoryLength){
    PreviousMarketMovements.shift();
  }
  //CurrentMarketPrice = parseFloat(CurrentMarketPrice).toFixed(2)
}

function DisplayMarketPrice(){
  document.getElementById("MarketPrice").innerHTML = "$" + CurrentMarketPrice + "/coin";
}

function CalculatePercentDown(){
  var count = 0;
  for(var i =0; i < PreviousMarketMovements.length; i++){
    if(PreviousMarketMovements[i]=="Down"){
      count++;
    }
  }
  return count/PreviousMarketMovements.length;
}

function BuyCoins(){
  //if()
}

function SellCoins(){
  CurrentWorth = GCoins * CurrentMarketPrice;
  document.getElementById("NetWorth").innerHTML = "$" + CurrentWorth;
  GCoins = 0;
}

window.setInterval(function(){
  //main market loop, updates every 5 seconds
  CalculateMarketPrice();
  DisplayMarketPrice();

}, 500);
