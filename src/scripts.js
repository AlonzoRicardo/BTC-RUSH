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
}

//Updates the BTC/USD price in the DOM
function updateDomBtcPrice () {
    $('.btc-usd-price').html(btcRushGame.btc_dollar+'$')
}

//Updates the Blocks Mined counter in the DOM
function updateDomBlocksMined() {
    $('.blocks-num').html(btcRushGame.blocksMined)
}

//Updates the total Coins available in the DOM
function updateDomTotalCoins() {
    $('.coin-num').html(btcRushGame.totalCoins)
}

//creates new game and initializes the btc/usd speculation function
//and the blocks counter
function startGame() {
    btcRushGame = new BtcRushGame();
    btcRushGame.speculation();
    btcRushGame.increaseBlocksMined();
}

//function to make specific keys call specific functions
//basically the controls for player 1
var miner1Controls = function (e) {
    var key = e.keyCode;
        if (key === keyA) {
            miner1.buyRig()
        } else if (key === keyS) {
            miner1.gamble()
        }
}

//function to make specific keys call specific functions
//basically the controls for player 2
var miner2Controls = function (e) {
    var key = e.keyCode;
        if (key === keyL) {
            miner2.buyRig()
        } else if (key === keyK) {
            miner2.gamble()
        }
}

//function that runs when the page loads.
var init = function () {
    startGame();
    var p1Name = prompt("Player 1 Name");
    var p2Name = prompt("Player 2 Name");
    miner1 = new Miner(p1Name);
    miner2 = new Miner(p2Name);
    document.addEventListener("keydown", function(e){ 
        miner1Controls(e);
        miner2Controls(e);
        //start();
    });
//add event listeners to the buttons 
//and make them call functions outside 
//this one
}

$(init());

//ASCII LEYEND
var keyA = 65;
var keyS = 83;
var keyK = 75;
var keyL = 76;