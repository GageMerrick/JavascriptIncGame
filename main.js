var GCoins = 0.0;

var BadComputers = 0;
var BCRate = 0;

var AverageComputers = 0;
var ACRate = 0;

var DecentComputers = 0;
var DCRate = 0;

function Save(){
  var save = {
      GCoins: GCoins,
      BadComputers: BadComputers,
      AverageComputers : AverageComputers,
      DecentComputers : DecentComputers
  }
  localStorage.setItem("save",JSON.stringify(save));
}

function Load(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.GCoins !== "undefined") GCoins = savegame.GCoins;
  if (typeof savegame.BadComputers !== "undefined") BadComputers = savegame.BadComputers;
  if (typeof savegame.AverageComputers !== "undefined") AverageComputers = savegame.AverageComputers;
  if (typeof savegame.DecentComputers !== "undefined") DecentComputers = savegame.DecentComputers;
}

function Mine(ammount){
  //Adjust GCoin ammount
  GCoins += ammount;
}

function BadComputer(n){
  //Calculate how much your badComputer helps
  Mine(n*0.00000000000001);
  BCRate = ((n*0.00000000000001)*10);
}

function AverageComputer(n){
  //Calculate how much your AverageComputer helps
  Mine(n*0.0000000000001);
  ACRate = ((n*0.0000000000001)*10);
}

function DecentComputer(n){
  //Calculate how much your DecentComputer helps
  Mine(n*0.000000000001);
  DCRate = ((n*0.000000000001)*10);
}

function Purchase(selection){
  //Purchase an item
  if(selection == 'BC'){
    Mine(-0.000000000020);
    BadComputers += 1;
  }else if(selection == 'AC'){
    Mine(-0.000000000150);
    AverageComputers += 1;
  }else if(selection == 'DC'){
    Mine(-0.000000000500);
    DecentComputers += 1;
  }
}

function UpdateText(){
  //update the text on the page
  document.getElementById("BComputers").innerHTML = BadComputers + "  (" + BCRate.toFixed(12)+"/s" + ")";
  document.getElementById("AComputers").innerHTML = AverageComputers + "  (" + ACRate.toFixed(12)+"/s" + ")";
  document.getElementById("ADomputers").innerHTML = DecentComputers + "  (" + DCRate.toFixed(12)+"/s" + ")";
  document.getElementById("Coins").innerHTML = GCoins.toFixed(12);
}

function UpdatePurchasableItems(){
  if(GCoins >= 0.000000000020){
    document.getElementById('BuyBComp').disabled = false;
  }else{
    document.getElementById('BuyBComp').disabled = true;
  }

  if(GCoins >= 0.000000000150){
    document.getElementById('BuyAComp').disabled = false;
  }else{
    document.getElementById('BuyAComp').disabled = true;
  }

  if(GCoins >= 0.000000000500){
    document.getElementById('BuyDComp').disabled = false;
  }else{
    document.getElementById('BuyDComp').disabled = true;
  }
}

function autoMiners(){
  BadComputer(BadComputers);
  AverageComputer(AverageComputers);
  DecentComputer(DecentComputers);
}

window.setInterval(function(){
  //main loop
  autoMiners();
  UpdatePurchasableItems();
  UpdateText();

}, 100);
