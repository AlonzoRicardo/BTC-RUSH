
function gameOverModal(winner) {
    $('#myModal').css({'display': 'block'});
    $('#winner').html(winner + " YOU WON");
    $('#startAgain').on('click', function() {
        $('#myModal').css({'display': 'none'});
        btcRushGame.restartGame();
        miner1.resetPlayerStats()
        miner2.resetPlayerStats()
        start();
        createNewChart();
        clearCampusBorders();
    }) 
}

