var GCoins = 0.0;
var BadComputers = 0;

function Save(){
    var save = {
      GCoins: GCoins,
      BadComputers: BadComputers
  }
  localStorage.setItem("save",JSON.stringify(save));
}
function Load(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.GCoins !== "undefined") GCoins = savegame.GCoins;
  if (typeof savegame.BadComputers !== "undefined") BadComputers = savegame.BadComputers;
}


function Mine(ammount){
  //Adjust GCoin ammount
  GCoins += ammount;
}

function BadComputer(n){
  //Calculate how much your badComputer helps
  Mine(n*0.00000000000001)
}

function Purchase(selection){
  //Purchase an item
  if(selection = 'BC'){
    Mine(-0.000000000020)
    BadComputers += 1;
  }
}


window.setInterval(function(){
  //main loop
  if(GCoins >= 0.000000000020){
    document.getElementById('BuyBComp').style.visibility = 'visible';
  }else{
    document.getElementById('BuyBComp').style.visibility = 'hidden';
  }

	BadComputer(BadComputers);

  document.getElementById("BComputers").innerHTML = BadComputers;
  document.getElementById("Coins").innerHTML = GCoins.toFixed(12);
}, 100);
