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

var init = function () {
    btcRushGame = new BtcRushGame();
    btcRushGame.speculation();
    btcRushGame.increaseBlocksMined();
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