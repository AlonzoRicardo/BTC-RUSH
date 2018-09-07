# BTC-RUSH
Ironhack game project

BTC RUSH is an economy game were players have to buy IronHack facilities, the first one to buy 3 of them wins the game. 

Each player can:

1- Invest in Mining equipment to generate more income over time.
2- Gamble with 20% of their current holdings with a 50% to win.
3- Buy facilities.
4- Hack the other player for a total of 20% of their holdings and a 10% chance of the hack being succesful

Each of the players economies are tracked with a real time line chart and a radar chart for more spesific stats.

controls for player 1:
A: Buy income generators
S: Gamble
D: Buy facilities
C: Hack

controls for player 2:
L: Buy income generators
K: Gamble
J: Buy facilities
N: Hack

https://alonzoricardo.github.io/BTC-RUSH/

//REFACTORIZAR A TOPEEEEEEEEEEEEEEEEEEEEE
function minerEffect(e) {
    var key = e.keyCode;
    if (key === keyA) {
        $('.A').css({ "color": 'white' });
        setTimeout(function () {
            $('.A').css({ "color": 'rgb(0, 255, 0)' });
        }, 60);
    } else if (key === keyS) {
        $('.S').css({ "color": 'white' });
        setTimeout(function () {
            $('.S').css({ "color": 'rgb(0, 255, 0)' });
        }, 60);
    } else if (key === keyD) {
        $('.D').css({ "color": 'white' });
        setTimeout(function () {
            $('.D').css({ "color": 'rgb(0, 255, 0)' });
        }, 60);
    } else if (key === keyC) {
        $('.C').css({ "color": 'white' });
        setTimeout(function () {
            $('.C').css({ "color": 'rgb(0, 255, 0)' });
        }, 60);
    } else if (key === keyL) {
        $('.L').css({ "color": 'white' });
        setTimeout(function () {
            $('.L').css({ "color": 'rgb(248, 0, 0)' });
        }, 60);
    } else if (key === keyK) {
        $('.K').css({ "color": 'white' });
        setTimeout(function () {
            $('.K').css({ "color": 'rgb(248, 0, 0)' });
        }, 60);
    } else if (key === keyJ) {
        $('.J').css({ "color": 'white' });
        setTimeout(function () {
            $('.J').css({ "color": 'rgb(248, 0, 0)' });
        }, 60);
    } else if (key === keyN) {
        $('.N').css({ "color": 'white' });
        setTimeout(function () {
            $('.N').css({ "color": 'rgb(248, 0, 0)' });
        }, 60);
    }
    
    /*------------------------------------------------------------------*/
    
    //Updates the owned coins chart in the DOM 
  var chartIntervalId = setInterval(function () {
    //coins
    btcChart.data.datasets[0].data.push(miner1.ownedCoins);
    btcChart.data.datasets[1].data.push(miner2.ownedCoins);
    //blocks
    btcChart.data.labels.push(btcRushGame.blocksMined);
    //remove data points
    if(btcChart.data.datasets[0].data.length > 30) {
      btcChart.data.datasets[0].data.shift();
      btcChart.data.datasets[1].data.shift();
      btcChart.data.labels.shift();
    }
    //CHALLENGE
    /*UPDATE FUNCTION READ chart.js DOCS*/
    btcChart.update();
  }, 1000)
}
