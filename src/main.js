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
        this.blocksMined++;
        //console.log("TOTAL BLOCKS MINED: " + this.blocksMined);
    }.bind(this), 1000)
}

//Made to try to simulate BITCOINS ascending price curve!
BtcRushGame.prototype.speculation = function () {
    setInterval(function () {
        this.btc_dollar = Math.floor(Math.random() * this.blocksMined)
        console.log("BTC/USD " + this.btc_dollar + "$");
    }.bind(this), 5000)
}




class Miner {
    constructor(name) {
        this.name = name;
        this.rigs = 1;
        this.fraction = 0.5;
        this.ownedCoins = 50;
        this.ownedDollars = 1;
        this.setInterval;
        this.mine = function () {
            this.setInterval = setInterval(function () {
                this.fraction = (btcRushGame.reward / btcRushGame.totalRigs) * this.rigs;
                this.ownedCoins += this.fraction * btcRushGame.reward;
                console.log("THIS IS MY CUT " + this.fraction);
                console.log(this.rigs);
                //this.ownedCoins += Math.round((btcRushGame.reward / btcRushGame.totalRigs * this.rigs)/100).toFixed(2);
                //this.ownedCoins += ((btcRushGame.reward / btcRushGame.totalRigs)* this.rigs).toFixed();
                btcRushGame.reduceTotalCoins();
                this.ownedDollars = this.ownedCoins * btcRushGame.btc_dollar;
                console.log(this.name + " MINER OWNES COINS: " + this.ownedCoins);
                console.log(this.name + " MINER OWNES DOLLARS: " + this.ownedDollars + "$");
                btcRushGame.checkWin();
            }.bind(this), 1000);
        };

        //function to buy more mining power / hash Power...
        this.buyRig = function () {
            if(this.ownedDollars >= btcRushGame.rigCost) {
                btcRushGame.totalRigs++;
                this.rigs++;
                this.ownedCoins -= btcRushGame.rigCost / btcRushGame.btc_dollar;
            } else {
                console.log('insuficient MONEEEY');
            }
        }

        this.stopMining = function () {
            clearInterval(this.setInterval);
        }
    }
}

var btcRushGame = new BtcRushGame();
btcRushGame.speculation();
btcRushGame.increaseBlocksMined();
var miner1 = new Miner("SNOOPA");
//miner1.rigs = 1;
var miner2 = new Miner("BRATO");

function start() {
    
    miner1.mine();
    miner2.mine();
}

function stop() {
    miner1.stopMining();
    miner2.stopMining();
}



//reward / totalRigs * ownedRigs