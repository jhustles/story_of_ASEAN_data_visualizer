// This script is to gether all information for the line chart data, so JavaScript can plot once it had all the data it needed. The issue I had was the JavaScript was trying to plot the chart before it had all the data beacuse it works asynchronously.

console.log('starting script 2c');

var my_datasets = [];


async function getLineChartData() {
    await d3.csv("lineCtx_onload_1995_2018.csv", function(error, data) {
    if (error) throw error;
    console.log(data.length);
    console.log('HERE is the data');
    console.log('++++++++++++++++++++++++++++++++');
    console.log(data);
    console.log('++++++++++++++++++++++++++++++++');

    var filterby = 'Current Health Expenditure (% Of GDP)';
    // filterData is a list of objects outputted by the arrrow function
    var filterData = data.filter((row) => row["indicator_name"] === filterby);
// extract items from each object
    for(var i=0; i<filterData.length;i++){
        var newline = filterData[i];

        console.log(filterData[i]);
        
        my_datasets.push(
            // push an object into a list
            {
            label: newline["country_name"],
            data: [
            // this is equivalent to the below:
            // parseInt(filterData[i]["2000"]),
            parseFloat(newline["2000"]),
            parseFloat(newline["2001"]),
            parseFloat(newline["2002"]),
            parseFloat(newline["2003"]),
            parseFloat(newline["2004"]),
            parseFloat(newline["2005"]),
            parseFloat(newline["2006"]),
            parseFloat(newline["2007"]),
            parseFloat(newline["2008"]),
            parseFloat(newline["2009"]),
            parseFloat(newline["2010"]),
            parseFloat(newline["2011"]),
            parseFloat(newline["2012"]),
            parseFloat(newline["2013"]),
            parseFloat(newline["2014"]),
            parseFloat(newline["2015"]),
            parseFloat(newline["2016"]),
            parseFloat(newline["2017"]),
            parseFloat(newline["2018"])
            ],
            borderWidth: 2,
            fill: false,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return value + '%';
                            }
                        },
                        scaleLabel: {
                            display: true,
                        }
                    }]
                },
                plugins: {
                colorschemes: {
                    scheme: 'tableau.Classic20'
                }
                }
            }
        });
        }
    console.log("MY DATA SET for line chart");
    console.log(my_datasets);
    console.log('===============');
    // console.log(xAxis_Years);
});}


var x_Axis_Labels = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018"
];

var lineChartData = {
    type: 'line',
    data:{
        labels: x_Axis_Labels,
        datasets: my_datasets
        // datasets: my_dataset_with_bgColor
    },
    options: {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
            display: true,
            text: 'ASEAN ECONOMIC TRENDS BETWEEN 2000 and 2018'
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(label, index, labels) {
                            return label + '%';
                        }
                    },
                    scaleLabel: {
                        display: true,
                    }
                }]
            },tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        // Below is the logic that divides the numbers and formats the tool tip
                        let label = '';
                        let number_tt = tooltipItem.yLabel;
                        
                        number_f = number_tt.toLocaleString('en') + '%';
                        return label += number_f
                    }
                }
            },
            plugins: {
            colorschemes: {
                scheme: 'tableau.Classic20'
            }
            }
        },
    }
};


getLineChartData();



function selectFilterbyLineCtx(value){

    d3.csv("lineChart_trends_1995_2018_2.csv", function(error, data) {
    filterData = data.filter((row) => row["indicator_name"] === value);

    my_datasets = [];
    for(var i=0; i<filterData.length;i++){
        var newline = filterData[i];
        // var this_id  = 'y-axis-1';
        my_datasets.push({
            label: newline["country_name"],
            fill: false,
            data: [
            parseFloat(newline["2000"]),
            parseFloat(newline["2001"]),
            parseFloat(newline["2002"]),
            parseFloat(newline["2003"]),
            parseFloat(newline["2004"]),
            parseFloat(newline["2005"]),
            parseFloat(newline["2006"]),
            parseFloat(newline["2007"]),
            parseFloat(newline["2008"]),
            parseFloat(newline["2009"]),
            parseFloat(newline["2010"]),
            parseFloat(newline["2011"]),
            parseFloat(newline["2012"]),
            parseFloat(newline["2013"]),
            parseFloat(newline["2014"]),
            parseFloat(newline["2015"]),
            parseFloat(newline["2016"]),
            parseFloat(newline["2017"]),
            parseFloat(newline["2018"])
            ],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return value + '%';
                            }
                        },
                        scaleLabel: {
                            display: true,
                        }
                    }]
                },tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            // Below is the logic that divides the numbers and formats the tool tip
                            let label = '';
                            let number_tt = tooltipItem.yLabel;
                            
                            number_f = number_tt.toLocaleString('en') + '%';
                            return label += number_f
                        }
                    }
                },
                plugins: {
                colorschemes: {
                    scheme: 'tableau.Classic20'
                }
                }
            }
            // yAxisID: 'y-axis-1'
        });
        }
    console.log(my_datasets);
    lineChartData.data.datasets = my_datasets;
    window.myLine.update();
});
};










