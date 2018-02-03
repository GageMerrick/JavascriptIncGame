var GCoins = 0.0;
var BadComputers = 0;

function Mine(ammount){
  //Adjust GCoin ammount
  GCoins += ammount;
  document.getElementById("Coins").innerHTML = GCoins.toFixed(12);
}

function BadComputer(n){
  //Calculate how much your badComputer helps
  Mine(n*0.000000000001)
}

function Purchase(selection){
  //Purchase an item
  if(selection = 'BC'){
    Mine(-0.000000000020)
    BadComputers += 1;
    document.getElementById("BComputers").innerHTML = BadComputers;
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

}, 100);
