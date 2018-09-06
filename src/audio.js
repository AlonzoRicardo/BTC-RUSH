//sound constructor
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

//declaring sounds for later use
var gameMusic = new Sound('audio/Protoss Theme 1 - Starcraft Soundtrack.mp3');
var buyRigSound = new Sound('audio/buyRig.wav');
var buyRig2Sound = new Sound('audio/buyRig2.wav');
var gambleWin = new Sound('audio/GambleWin.mp3');
var noMoneySound = new Sound('audio/notEnoughMoney.wav');
var hackSound = new Sound('audio/hack.wav');
var buyCampusSound = new Sound('audio/buyCampus.wav');
var gameOverSound = new Sound('audio/gameOver.wav');
//gameMusic.play();


