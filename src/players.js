
//Player constructor
class Miner {
    constructor(name) {
        this.name = name;
        this.rigs = 1;
        this.fraction = 0.5;
        this.ownedCoins = 50;
        this.ownedDollars = 1;
        this.setInterval;
    }
}


//Function to make the miners mine btc every second...
//It rewards the miners with a fraction of the btc reward based on how many rigs they have
//This is actually how mining works in real life when you mine in pools
//It also updates the amount of $$$ they have 
Miner.prototype.mine = function () {
    this.setInterval = setInterval(function () {
        this.fraction = (btcRushGame.reward / btcRushGame.totalRigs) * this.rigs;
        this.ownedCoins += this.fraction * btcRushGame.reward;
        //console.log("THIS IS MY CUT " + this.fraction);
        //console.log(this.rigs);
        this.ownedDollars = this.ownedCoins * btcRushGame.btc_dollar;
        //console.log(this.name + " MINER OWNES COINS: " + this.ownedCoins);
        //console.log(this.name + " MINER OWNES DOLLARS: " + this.ownedDollars + "$");
        updateDomOwnedCoins();
        btcRushGame.checkWin();
    }.bind(this), 1000);
}

//function to buy more mining power / hash Power...
Miner.prototype.buyRig = function () {
    if(this.ownedDollars >= btcRushGame.rigCost) {
        btcRushGame.totalRigs++;
        this.rigs++;
        this.ownedCoins -= btcRushGame.rigCost / btcRushGame.btc_dollar;
    } else {
        console.log('insuficient MONEEEY');
    }
}

//function to stop mining btc, basically when the game ends
Miner.prototype.stopMining = function () {
    clearInterval(this.setInterval);
}


//function that allows the miners to try their luck, gamble 10 btc and see the results after 3 seconds
//its 40/60 chance, so 6 times out of 10 the gambler will win.
Miner.prototype.gamble = function () {
    setTimeout(function () {
        if (Math.random() * 1 < 0.4) {
            this.ownedCoins += 10;
            console.log("LUCKY SOMBICH " + this.ownedCoins);
        } else {
            this.ownedCoins -= 10;
            console.log("UNLUCKY TY 4 UR MONEY" + this.ownedCoins);
        }
    }.bind(this), 3000)
}