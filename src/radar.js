var ctx2 = document.getElementById('radar').getContext('2d');
/* var ctx = document.getElementById('radar');
ctx.style.backgroundColor = 'black'; */

var myRadarChart = new Chart(ctx2, {
    type: "radar",

    data: {
        labels: ["COINS", "RIGS", "REWARD"],
        datasets: [
            {
                label: "P1",
                data: [54, 34, 23],
                borderColor: "rgba(9, 255, 0, 1)",
                backgroundColor: "rgba(9, 255, 0, 0.2)"
            },
              {
               label: ["P2"],
               data: [42, 23,15],
               borderColor: "rgba(98, 0, 255, 1)",
               backgroundColor: "rgba(98, 0, 255, 0.2)"
             } 
        ]
    },
    options: {
        position: "left",
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: "bottom",
            labels: {}
        },
        scale: {
            gridLines: {color: 'rgb(155, 173, 138)'},
            angleLines: { color: 'rgb(155, 173, 138)' }
             ,
            // Hides the scale
            ticks: {
                // changes here
                display: false,
                max: 12000,
                min: -1000
            } 
        }
    }
}
);

 var radarInterval = setInterval(function(){
    //coins
    myRadarChart.data.datasets[0].data[0] = miner1.ownedCoins;
    myRadarChart.data.datasets[1].data[0] = miner2.ownedCoins;
    //rigs
    myRadarChart.data.datasets[0].data[1] = miner1.rigs * 100;
    myRadarChart.data.datasets[1].data[1] = miner2.rigs * 100;
    //fraction
    myRadarChart.data.datasets[0].data[2] = miner1.fraction * 1000;
    myRadarChart.data.datasets[1].data[2] = miner2.fraction * 1000;
    myRadarChart.update();    
}) 