var chartColors = {
	green: "#00f000",
	dark_green: "#256f25",
	grey: "#7f7f7f"
};

var color = Chart.helpers.color;
var config = {
	type: "line",
	data: {
		datasets: [
			{
				type: "line",
				yAxisID: "temperature",
				backgroundColor: "transparent",
				borderColor: chartColors.green,
				pointBackgroundColor: chartColors.dark_green,
				tension: 0.2,
				fill: false
			}
		]
	},
	plugins: [ChartDataSource],
	options: {
		legend: {
            display: false
         },
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxes: [
				{
					gridLines: {
						drawOnChartArea: true,
						color: chartColors.grey
					},
					scaleLabel: {
						display: true,
						labelString: "Time, (h)"
					}}],
			yAxes: [
				{
					id: "temperature",
					gridLines: {
						drawOnChartArea: true,
						color: chartColors.grey
					},
					scaleLabel: {
						display: true,
						labelString: "Temperature (°C)"
					}}]
		},
		plugins: {

			datasource: {
				type: "csv",
				url:
					"data.csv",
				delimiter: ",",
				rowMapping: "index",
				datasetLabels: true,
				indexLabels: true
			}
		}
	}
};

window.onload = function () {
	var ctx1 = document.getElementById("Chart_temp").getContext("2d");
	window.Chart_temp = new Chart(ctx1, config);
};