//Game constructor
class BtcRushGame {
    constructor() {
        this.blocksMined = 1;
        this.totalCoins = 2098;
        this.btc_dollar = 7;
        this.reward = 1;
        this.totalRigs = 2;
        this.rigCost = 100;
    }
}

//regular winning condition function
BtcRushGame.prototype.checkWin = function () {
    if (this.totalCoins <= 0) {
        miner1.stopMining();
    }
}

//there will only be a fixed ammount of bitcoin and they will mined
//this function is made to reduce the total ammount
BtcRushGame.prototype.reduceTotalCoins = function () {
    this.totalCoins -= this.reward;
    //console.log("TOTAL COINS AVAILABLE: " + this.totalCoins);
}

//this is a counter of the blocks that get mined, in reality
//btc blocks can be mined every 10 minutes, but this is game and we cant wait 
// 10 minutes to have fun
BtcRushGame.prototype.increaseBlocksMined = function () {
    setInterval(function () {
        this.reduceTotalCoins();
        updateDomTotalCoins();
        this.blocksMined++;
        updateDomBlocksMined();
        //console.log("TOTAL BLOCKS MINED: " + this.blocksMined);
    }.bind(this), 1000)
}

//Made to try to simulate BITCOINS ascending price curve!
BtcRushGame.prototype.speculation = function () {
    setInterval(function () {
        this.btc_dollar = Math.floor(Math.random() * (this.blocksMined ** 3))
        updateDomBtcPrice();
        console.log("BTC/USD " + this.btc_dollar + "$");
    }.bind(this), 5000)
}

/*-----------------------------------------------------------------------*/
/* var btcRushGame = new BtcRushGame();
btcRushGame.speculation();
btcRushGame.increaseBlocksMined();
//miner1.rigs = 1;
var miner1 = new Miner("SNOOPA");
var miner2 = new Miner("BRATO"); */

