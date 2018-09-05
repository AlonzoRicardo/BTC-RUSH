var btcRushGame;
var miner1;
var miner2;

function start() {
    miner1.mine();
    miner2.mine();
}

function stop() {
    miner1.stopMining();
    miner2.stopMining();
    //clearInterval(chartIntervalId);
}



//Updates the fraction of the reward for each player in the DOM
function updateDomRewardFraction() {
    $('#player-1-Rewardfraction').html(Math.round(miner1.fraction * 1000) / 1000);
    $('#player-2-Rewardfraction').html(Math.round(miner2.fraction * 1000) / 1000);
}

//Updates the number of owned rigs for each player in the DOM
function updateDomOwnedRigs() {
    $("#player-1-ownedRigs").html(miner1.rigs);
    $("#player-2-ownedRigs").html(miner2.rigs);
}

//Updates the coins of each player in the DOM
function updateDomOwnedCoins() {
    $('#player-1-ownedCoins').html(Math.round(miner1.ownedCoins * 100) / 100);
    $('#player-2-ownedCoins').html(Math.round(miner2.ownedCoins * 100) / 100);
}

//function to update Player names once prompted in the DOM
function updateDomPlayerNames(p1, p2) {
    $('#player-1-id').html(p1);
    $('#player-2-id').html(p2);
}

//Updates the BTC/USD price in the DOM
function updateDomBtcPrice() {
    $('.btc-usd-price').html(btcRushGame.btc_dollar + '$')
}

//Updates the Blocks Mined counter in the DOM
function updateDomBlocksMined() {
    $('.blocks-num').html(btcRushGame.blocksMined)
}

//Updates the total Coins available in the DOM
function updateDomTotalCoins() {
    updateDomPlayerNames(miner1.name, miner2.name); //shouldnt go here
    $('.coin-num').html(btcRushGame.totalCoins)
}


//function to make specific keys call specific functions
//basically the controls for player 1
/* var miner1Controls = function (e) {
    var key = e.keyCode;
    if (key === keyA) {
        miner1Effect(e)
        miner1.buyRig()
    } else if (key === keyS) {
        miner1Effect(e)
        miner1.gamble()
    } else if (key === keyD) {
        miner1Effect(e)
        miner1.buyCampus()
    } else if (key === keyC) {
        miner1Effect(e)
        miner1.hack()
    }
} */

//function to make specific keys call specific functions
//basically the controls for player 2
/* var miner2Controls = function (e) {
    var key = e.keyCode;
    if (key === keyL) {
        miner2Effect(e)
        miner2.buyRig()
    } else if (key === keyK) {
        miner2Effect(e)
        miner2.gamble()
    } else if (key === keyJ) {
        miner2Effect(e)
        miner2.buyCampus()
    } else if (key === keyN) {
        miner2Effect(e)
        miner2.hack();
    }
} */

//creates new game and initializes the btc/usd speculation function
//and the blocks counter
function startGame() {
    //var btcRushGame;
    btcRushGame = new BtcRushGame();
    btcRushGame.speculation();
    btcRushGame.increaseBlocksMined();
}

//restarts the stats of each player
function restartPlayers() {
    // Refactor this
    miner1.rigs = 1;
    miner1.fraction = 0.5;
    miner1.ownedCoins = 50000;
    miner1.ownedDollars = 1;
    miner1.ownedCampus = [];
    miner1.setInterval;

    miner2.rigs = 1;
    miner2.fraction = 0.5;
    miner2.ownedCoins = 50000;
    miner2.ownedDollars = 1;
    miner2.ownedCampus = [];
    miner2.setInterval;
}

//function that runs when the page loads.
var init = function () {
    startGame();
    //WATCH 4 PROMPTS
    var p1Name = prompt("Player 1 Name");
    var p2Name = prompt("Player 2 Name");
    miner1 = new Miner(p1Name, 0);
    miner2 = new Miner(p2Name, 1);
   /*  document.addEventListener("keydown", function (e) {
        setListeners(e);
        //miner1Controls(e);
        //miner2Controls(e);
    }); */
    start();
}

$(init());

//ASCII LEYEND
var keyA = 65;
var keyS = 83;
var keyK = 75;
var keyL = 76;
var keyJ = 74;
var keyD = 68;
var keyC = 67;
var keyN = 78;