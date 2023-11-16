Highcharts.chart('artesanos-chart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Número de artesanos por tipo de artesanía'
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'Tipos de artesanía'
        }
    },
    yAxis: {
        title: {
            text: 'Número de artesanos'
        },
        tickInterval: 1
    },
    series: [{
        name: 'Número de artesanos',
        data: []
    }]
});

fetch("http://localhost:5000/get-data-artesanos")
  .then((response) => response.json())
  .then((data) => {
    let parsedData = data.map((item) => {
      return [item.tipo, item.cantidad];
    });
    const chart = Highcharts.charts.find(
      (chart) => chart && chart.renderTo.id === "artesanos-chart"
    );
    chart.update({
      series: [
        {
          data: parsedData,
        },
      ],
    });
  })
  .catch((error) => console.error("Error:", error));


  Highcharts.chart('hinchas-chart', {
    chart: {
        type: 'pie',
        height: 700
    },
    title: {
        text: 'Número de hinchas por deporte'
    },
    series: [{
        name: 'Número de hinchas',
        data: []
    }]
});

fetch("http://localhost:5000/get-data-hinchas")
  .then((response) => response.json())
  .then((data) => {
    let parsedData = data.map((item) => {
      return [item.deporte,item.cantidad];
    });
    const chart = Highcharts.charts.find(
      (chart) => chart && chart.renderTo.id === "hinchas-chart"
    );
    chart.update({
      series: [
        {
          data: parsedData,
        },
      ],
    });
  })
  .catch((error) => console.error("Error:", error));