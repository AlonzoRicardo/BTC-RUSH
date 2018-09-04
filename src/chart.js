// selecting the Canvas and giving it a background color.
var myChart = document.getElementById('myChart').getContext('2d');
var ctx = document.getElementById('myChart');
ctx.style.backgroundColor = 'black';


// Global Options
Chart.defaults.global.defaultColor = 'black';
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 8;
Chart.defaults.global.defaultFontColor = 'rgb(9, 255, 0)';

//creates new Chart Object and gives properties
btcChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: '',
      fill: false,
      data: [],
      fontColor: "white",
      backgroundColor: 'rgb(9, 255, 0)',
      borderWidth: 1,
      borderColor: 'rgb(9, 255, 0)',
      hoverBorderWidth: 3,
      hoverBorderColor: '#000'
    }, {
      label: '',
      fill: false,
      data: [],
      backgroundColor: 'rgb(98, 0, 255)',
      borderWidth: 1,
      borderColor: 'rgb(98, 0, 255)',
      hoverBorderWidth: 3,
      hoverBorderColor: 'rgb(98, 0, 255)'
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    }
  }
});


//Updates the owned coins chart in the DOM 
var graphUpdater = setInterval(function () {
  btcChart.data.datasets[0].data.push(miner1.ownedCoins);
  btcChart.data.datasets[1].data.push(miner2.ownedCoins);
  btcChart.data.labels.push(btcRushGame.blocksMined);
  btcChart.update();
}, 1000)

