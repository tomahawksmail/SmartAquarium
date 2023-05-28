var chartColors = {
	green: "#00f000",
	dark_green: "#256f25",
	grey: "#7f7f7f"
};

var config1 = {
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
					"./data/data_temp.csv",
				delimiter: ",",
				rowMapping: "index",
				datasetLabels: true,
				indexLabels: true
			}
		}
	}
};
var config2 = {
	type: "line",
	data: {
		datasets: [
			{
				type: "line",
				yAxisID: "PH",
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
					id: "ph",
					gridLines: {
						drawOnChartArea: true,
						color: chartColors.grey
					},
					scaleLabel: {
						display: true,
						labelString: "ph"
					}}]
		},
		plugins: {
			datasource: {
				type: "csv",
				url:
					"./data/data_ph.csv",
				delimiter: ",",
				rowMapping: "index",
				datasetLabels: true,
				indexLabels: true
			}
		}
	}
};
var config3 = {
	type: "line",
	data: {
		datasets: [
			{
				type: "line",
				yAxisID: "TDS",
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
					id: "tds",
					gridLines: {
						drawOnChartArea: true,
						color: chartColors.grey
					},
					scaleLabel: {
						display: true,
						labelString: "TDS"
					}}]
		},
		plugins: {

			datasource: {
				type: "csv",
				url:
					"./data/data_TDS.csv",
				delimiter: ",",
				rowMapping: "index",
				datasetLabels: true,
				indexLabels: true
			}
		}
	}
};

window.onload = function func() {
	var ctx1 = document.getElementById("Chart_TEMP").getContext("2d");
	window.Chart_TEMP = new Chart(ctx1, config1);

	var ctx2 = document.getElementById("Chart_PH").getContext("2d");
	window.Chart_PH = new Chart(ctx2, config2);

	var ctx3 = document.getElementById("Chart_TDS").getContext("2d");
	window.Chart_TDS = new Chart(ctx3, config3);
};