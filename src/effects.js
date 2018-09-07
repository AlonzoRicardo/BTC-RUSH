//Updates the borders of the Ironhack logos to know which player bought the IH facilities
function campusBoughtBorders(player, city) {
    if (player === miner1) {
        $("#" + city).css({ "border": '1px solid green' });
    } else if (player === miner2) {
        $("#" + city).css({ "border": '1px solid red' });
    }
}

//Updates the borders of the bought campuses
function clearCampusBorders() {
    for (var i = 0; i < btcRushGame.ironHackCampus.length; i++) {
        console.log(Object.keys(btcRushGame.ironHackCampus[i])[0]);
        $('#' + Object.keys(btcRushGame.ironHackCampus[i])[0]).css({ 'border': 'none' })
    }
}

//function to display the keypresses in each screen of player1
//REFACTORIZAR A TOPEEEEEEEEEEEEEEEEEEEEE
function minerEffect(e) {
    var key = e.keyCode;
    if (key === keyA) {
        $('.A').css({ "color": 'white' });
        setTimeout(function () {
            $('.A').css({ "color": 'rgb(0, 255, 0)' });
        }, 60);
    } else if (key === keyS) {
        $('.S').css({ "color": 'white' });
        setTimeout(function () {
            $('.S').css({ "color": 'rgb(0, 255, 0)' });
        }, 60);
    } else if (key === keyD) {
        $('.D').css({ "color": 'white' });
        setTimeout(function () {
            $('.D').css({ "color": 'rgb(0, 255, 0)' });
        }, 60);
    } else if (key === keyC) {
        $('.C').css({ "color": 'white' });
        setTimeout(function () {
            $('.C').css({ "color": 'rgb(0, 255, 0)' });
        }, 60);
    } else if (key === keyL) {
        $('.L').css({ "color": 'white' });
        setTimeout(function () {
            $('.L').css({ "color": 'rgb(248, 0, 0)' });
        }, 60);
    } else if (key === keyK) {
        $('.K').css({ "color": 'white' });
        setTimeout(function () {
            $('.K').css({ "color": 'rgb(248, 0, 0)' });
        }, 60);
    } else if (key === keyJ) {
        $('.J').css({ "color": 'white' });
        setTimeout(function () {
            $('.J').css({ "color": 'rgb(248, 0, 0)' });
        }, 60);
    } else if (key === keyN) {
        $('.N').css({ "color": 'white' });
        setTimeout(function () {
            $('.N').css({ "color": 'rgb(248, 0, 0)' });
        }, 60);
    }
}