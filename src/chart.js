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
var btcChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: '',
      fill: false,
      data: [],
      fontColor: "white",
      backgroundColor: 'rgb(9, 255, 0)',
      borderWidth: 0.5,
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
  var chartIntervalId = setInterval(function () {
    //coins
    btcChart.data.datasets[0].data.push(miner1.ownedCoins);
    btcChart.data.datasets[1].data.push(miner2.ownedCoins);
    //blocks
    btcChart.data.labels.push(btcRushGame.blocksMined);
    //remove data points
    if(btcChart.data.datasets[0].data.length > 30) {
      btcChart.data.datasets[0].data.shift();
      btcChart.data.datasets[1].data.shift();
      btcChart.data.labels.shift();
    }
    btcChart.update();
  }, 1000)
    
  
  //clears old chart and starts a new one
  function createNewChart(){
    btcChart.data.labels = [];
    btcChart.data.datasets[0].data = [];
    btcChart.data.datasets[1].data = [];
    btcChart.update();
  } 
  


  
  
  
  