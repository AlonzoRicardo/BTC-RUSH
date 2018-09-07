var playerOne;
var playerTwo;
var keyEnter = 13;

//Start Button function
function openGame() {
    gameMusic.play();
    $('.start-modal').css('display', 'block');
    document.addEventListener("keydown", function (e) {
        //if Enter Open game
        var key = e.keyCode;
        if (key === keyEnter) {
            playerOne = $('#p1Input').val()
            playerTwo = $('#p2Input').val()
            $('#start-button').css('display', 'none')
            $('.glitch').css('display', 'none')
            $('.start-modal').css('display', 'none')
            $('#startScreen').css('display', 'none')
            $('#game').css('display', 'block')
            init(playerOne, playerTwo);
        }
    })
}