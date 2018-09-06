//Game constructor
function BtcRushGame () {
        this.restartGame();
}

//regular winning condition function
BtcRushGame.prototype.checkWin = function (player) {
    if (player.ownedCampus.length >= 3){
        stop();
        gameOverModal(player.name);
    }
}

//there will only be a fixed ammount of bitcoin and they will mined
//this function is made to reduce the total ammount
BtcRushGame.prototype.reduceTotalCoins = function () {
    this.totalCoins -= this.reward;
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
    }.bind(this), 1000)
}

//Made to try to simulate BITCOINS ascending price curve!
BtcRushGame.prototype.speculation = function () {
    setInterval(function () {
        this.btc_dollar = Math.floor(Math.random() * (this.blocksMined ** 2))
        updateDomBtcPrice();
    }.bind(this), 5000)
}

//function to restart the game and play again, also resets the scores
BtcRushGame.prototype.restartGame= function() {
    this.blocksMined = 1;
    this.totalCoins = 2000;
    this.btc_dollar = 5;
    this.reward = 8;
    this.totalRigs = 2;
    this.rigCost = 50000;
    this.ironHackCampus = [
        {
            amsterdam: 2000000
        },
        {
            barcelona: 2000000
        },
        {
            berlin: 4000000
        },
        {
            paris: 4000000
        },
        {
            madrid: 8000000
        }
    ]

}
