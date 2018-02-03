var GCoins = 0.0;

function strip(number) {
    return (parseFloat(number).toPrecision(12));
}

function Mine(ammount){
  GCoins += ammount;
  document.getElementById("Coins").innerHTML = GCoins.toFixed(12);
}
