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




var init = function () {
    btcRushGame = new BtcRushGame();
    btcRushGame.speculation();
    btcRushGame.increaseBlocksMined();
    var p1Name = prompt("Player 1 Name");
    var p2Name = prompt("Player 2 Name");
    miner1 = new Miner(p1Name);
    miner2 = new Miner(p2Name);
    document.addEventListener("keydown", function(){ 
    });
//add event listeners to the buttons 
//and make them call functions outside 
//this one
}

$(init());