var playerOne;
var playerTwo;
var keyEnter = 13;

function openGame() {
    gameMusic.play();
    $('.start-modal').css('display', 'block');
    document.addEventListener("keydown", function (e) {
        var key = e.keyCode;
        if (key === keyEnter) {
            playerOne = $('#p1Input').val()
            playerTwo = $('#p2Input').val()
            $('#start-button').css('display', 'none')
            $('.glitch').css('display', 'none')
            $('.start-modal').css('display', 'none')
            //$('#particles-js').css('display', 'none')
            $('#startScreen').css('display', 'none')
            $('#game').css('display', 'block')
            init(playerOne, playerTwo);
        }
    })
}