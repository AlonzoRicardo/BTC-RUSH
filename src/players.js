
//Player constructor
class Miner {
    constructor(name) {
        this.name = name;
        this.rigs = 1;
        this.fraction = 0.5;
        this.ownedCoins = 100;
        this.ownedDollars = 1;
        this.ownedCampus = [];
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
        this.ownedCoins += (this.fraction * btcRushGame.reward);
        this.ownedDollars = this.ownedCoins * btcRushGame.btc_dollar;
        console.log(this.name + " MINER OWNES DOLLARS: " + this.ownedDollars + "$");
        updateDomOwnedCoins();
        updateDomRewardFraction();
    }.bind(this), 1000);
}

//function to buy more mining power / hash Power...
Miner.prototype.buyRig = function () {
    if(this.ownedDollars >= btcRushGame.rigCost) {
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
Miner.prototype.buyCampus = function() {
    for (var i = 0; i < btcRushGame.ironHackCampus.length; i++) {
        var campusPrice = Object.values(btcRushGame.ironHackCampus[i]).pop()
        var campusName = Object.keys(btcRushGame.ironHackCampus[i]).pop()
        if (this.ownedDollars >= campusPrice) {
            console.log('BOUGHT ' + btcRushGame.ironHackCampus[i]);
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
    if (this === miner1) {
       if (Math.random() * 1 < 0.5) {
           this.ownedCoins += miner2.ownedCoins * 0.2;
           miner2.ownedCoins -= miner2.ownedCoins * 0.2;
       }
    } else if (this === miner2) {
        if (Math.random() * 1 < 0.5) {
            this.ownedCoins += miner1.ownedCoins * 0.2;
            miner1.ownedCoins -= miner1.ownedCoins * 0.2;
        }
    }
}