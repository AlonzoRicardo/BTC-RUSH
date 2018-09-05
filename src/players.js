
//Player constructor
function Miner(name, num) {
    this.num = num;
    this.name = name;
    this.rigs = 1;
    this.fraction = 0.5;
    this.ownedCoins = 50000;
    this.ownedDollars = 1;
    this.ownedCampus = [];
    this.setInterval;
    this.setKeys(this.num);
    this.setListeners();
}

/* var keyA = 65;
var keyS = 83;
var keyK = 75;
var keyL = 76;
var keyJ = 74;
var keyD = 68;
var keyC = 67;
var keyN = 78; */

Miner.prototype.setKeys = function (num) {
    switch (num) {
        case 0:
            this.buyRigKey = 65;
            this.gambleKey = 83;
            this.buyCampus = 68;
            this.hackKey = 67;
            break;
            
        case 1:
            this.buyRigKey = 76;
            this.gambleKey = 75;
            this.buyCampusKey = 74;
            this.hackKey = 78;
            break;
    }
}


//Function to make the miners mine btc every second...
//It rewards the miners with a fraction of the btc reward based on how many rigs they have
//This is actually how mining works in real life when you mine in pools
//It also updates the amount of $$$ they have 
Miner.prototype.mine = function () {
    this.setInterval = setInterval(function () {
        this.fraction = (btcRushGame.reward / btcRushGame.totalRigs) * this.rigs;
        this.ownedCoins += (this.fraction * btcRushGame.reward);
        this.ownedDollars = this.ownedCoins * btcRushGame.btc_dollar;
        console.log(this.name + " MINER OWNES DOLLARS: " + this.ownedDollars + "$");
        updateDomOwnedCoins();
        updateDomRewardFraction();
    }.bind(this), 1000);
}

//function to buy more mining power / hash Power...
Miner.prototype.buyRig = function () {
    if (this.ownedDollars >= btcRushGame.rigCost) {
        btcRushGame.totalRigs++;
        this.rigs++;
        this.ownedCoins -= btcRushGame.rigCost / btcRushGame.btc_dollar;
        updateDomOwnedRigs();
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

//Buys IH campuses, it removes the bought campus from the game campuses array of objects
//It also updates the owned coins and adds the bought campus to the bought campus array
//Also updates the score to know who bought which campus
Miner.prototype.buyCampus = function () {
    for (var i = 0; i < btcRushGame.ironHackCampus.length; i++) {
        var campusPrice = Object.values(btcRushGame.ironHackCampus[i]).pop()
        var campusName = Object.keys(btcRushGame.ironHackCampus[i]).pop()
        if (this.ownedDollars >= campusPrice) {
            this.ownedCampus.push(btcRushGame.ironHackCampus[i])
            this.ownedCoins -= campusPrice / btcRushGame.btc_dollar;
            btcRushGame.ironHackCampus.splice(i, 1);
            campusBoughtBorders(this, campusName);
            btcRushGame.checkWin(this);
        } else {
            console.log('not enough money');
        }
    }
}

//Functions that allows each player to hack the other one for a 20% of their
//current holding
Miner.prototype.hack = function () {
    if (this.num === 0) {
        if (Math.random() * 1 < 0.5) {
            this.ownedCoins += miner2.ownedCoins * 0.2;
            miner2.ownedCoins -= miner2.ownedCoins * 0.2;
        }
    } else if (this.num === 1) {
        if (Math.random() * 1 < 0.5) {
            this.ownedCoins += miner1.ownedCoins * 0.2;
            miner1.ownedCoins -= miner1.ownedCoins * 0.2;
        }
    }
}

//
Miner.prototype.setListeners = function () {
    document.addEventListener("keydown", function (event) {
        if (event.keyCode === this.buyRigKey) {
            /* miner1Effect(e) */
            this.buyRig()
        } else if (event.keyCode === this.gambleKey) {
            /* miner1Effect(e) */
            this.gamble()
        } else if (event.keyCode === this.buyCampusKey) {
            /* miner1Effect(e) */
            this.buyCampus()
        } else if (event.keyCode === this.hackKey) {
            /* miner1Effect(e) */
            this.hack()
        }
    }.bind(this));
} 