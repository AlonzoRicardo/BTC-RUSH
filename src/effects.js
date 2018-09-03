//Updates the borders of the Ironhack logos to know which player bought the IH facilities
function campusBoughtBorders(player, city) {
    if(player === miner1) {
        $("#"+city).css({"border": '1px solid green'});
    } else {
        $("#"+city).css({"border": '1px solid blue'});    
    }
}