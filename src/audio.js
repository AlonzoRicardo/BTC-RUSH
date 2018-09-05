/* var themeSound = 'audio/Protoss Theme 1 - Starcraft Soundtrack.mp3';
var noMoneySound = 'audio/notEnoughMoney.wav';
var hackSound = 'audio/hack.wav';
var gameOverSound = 'audio/gameOver.wav';
var gambleWin = 'audio/GambleWin.mp3';
var buyRigSound = 'audio/buyRig.wav';
var buyRig2Sound = 'audio/buyRig2.wav';
var buyCampusSound = 'audio/buyCampus.wav'; */


/* this.sound.id = 'audio-player';
this.sound.src = 'audio/Protoss Theme 1 - Starcraft Soundtrack.mp3';
this.sound.type = 'audio/mp3'; */
function Sound(src) {
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.pause = function () {
        this.sound.pause();
    }
}

var gameMusic = new Sound('audio/Protoss Theme 1 - Starcraft Soundtrack.mp3');
gameMusic.play();


