Highcharts.chart("container", {
  chart: {
    type: "line",
  },
  title: {
    text: "Numero de Confesiones Enviadas en el Tiempo",
  },
  xAxis: {
    type: "datetime",
    dateTimeLabelFormats: {
      month: "%b %e, %Y",
    },
    title: {
      text: "Fecha",
    },
  },
  yAxis: {
    title: {
      text: "Numero de Confesiones",
    },
  },
  legend: {
    align: "left",
    verticalAlign: "top",
    borderWidth: 0,
  },

  tooltip: {
    shared: true,
    crosshairs: true,
  },

  series: [
    {
      name: "Confesiones",
      data: [],
      lineWidth: 1,
      marker: {
        enabled: true,
        radius: 4,
      },
      color: "#FC2865",
    },
  ],
});

fetch("http://localhost:8007/get-stats-data")
  .then((response) => response.json())
  .then((data) => {
    let parsedData = data.map((item) => {
      const [year, month, day] = item.date
        .split("-")
        .map((part) => parseInt(part, 10));
      return [
        Date.UTC(year, month - 1, day), // javascript month indices start from 0 !
        item.count,
      ];
    });

    // Get the chart by ID
    const chart = Highcharts.charts.find(
      (chart) => chart && chart.renderTo.id === "container"
    );

    // Update the chart with new data
    chart.update({
      series: [
        {
          data: parsedData,
        },
      ],
    });
  })
  .catch((error) => console.error("Error:", error));
