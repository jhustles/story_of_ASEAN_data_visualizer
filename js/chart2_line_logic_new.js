// Create selector + Selector + filter function
let indicatorNames_raw = [];

let lineSelector = document.querySelector('#lineCtxIndicator_Selector');

d3.csv('lineChart_trends_1995_2018_2.csv', function(error, data) {
    if (error) throw error;
    // console.log('1st D3 LIST OF HBAR KEYS CSV FILE!!~~~~~~~');
    // console.log(data.length);
    // console.log(data);
    // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    for(let i = 0; i < data.length; i++){
        // console.log('HERE"S THE D3 csv data for HBAR');
        console.log(data[i]['indicator_name']);
        // console.log('-------------------------');
        indicatorNames_raw.push(data[i]['indicator_name']);


        // console.log(`pushed: ${data[i]['indicator_names']} to indicatorNames array`);
    }


    });


// Step 1 create the dataset and extract the labels (x - years)

//lineChart_trends_1995_2018_3.csv
//output this list of objects chart it




// this loop with d3 loops thru the CSV, and outputs a list of objects of all the Y-Values by country for plotting
// d3.csv("lineChart_trends_1995_2018_3.csv", function(error, data) {


d3.csv("lineChart_trends_1995_2018_2.csv", function(error, data) {
    if (error) throw error;
    console.log(data.length);
    console.log('HERE is the data');
    console.log('++++++++++++++++++++++++++++++++');
    console.log(data);
    console.log('++++++++++++++++++++++++++++++++');

    // console.log(Object.keys(data[0]));

    // const dataKeys = Object.keys(data[0]);

    // const years_line = dataKeys.filter((row) => {
    //     if (row.length === 4){
    //         return row;
    //     };
    // })
    // console.log(years_line);

    // xAxis_Years = xAxis_Years.concat(years_line);
    // console.log(xAxis_Years);
    // })
    //}


    // let filterby = 'Consumer price index (2010 = 100)';

    // let filterby = 'Current health expenditure (% of GDP)';
    let filterby = 'Trade (% Of GDP)';

    // filterData is a list of objects outputted by the arrrow function
    let filterData = data.filter((row) => row["indicator_name"] === filterby);
// extract items from each object
    for(var i=0; i<filterData.length;i++){
        var newline = filterData[i];
        console.log(filterData[i]);

        // var this_id  = 'y-axis-'+i+2;
        // var this_id  = 'y-axis-1';
        // var this_id2  = this_id; // ***
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
            // options:{
            // plugins: {
            //     colorschemes: {
            //         scheme: 'tableau.ClassicTrafficLight9'
            //     }}
            // }
        //     ,
        //     yAxisID: this_id,
        });
        }
    console.log("MY DATA SET for line chart");
    console.log(my_datasets);
    console.log('===============');
    // console.log(xAxis_Years);
});

/////////////////////////////////////////////////////////////////////////

let x_Axis_Labels = [
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

// let colorArray = [{'backgroundColor': window.chartColors.red}];
// let my_dataset_with_bgColor = colorArray.concat(my_datasets);

// lineChartData === "config" in the examples
let lineChartData = {
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



window.onload = function() {

    // create and push the unique list of indicator names, and create a options for selection on the HTML

    let indicatorNamesDistinct = indicatorNames_raw.filter((x, i, a) => a.indexOf(x) == i);

    console.log('WINOW - HERE IS INDICATOR NAMES DISTINCT+++++++')
    console.log(indicatorNamesDistinct)

    indicatorNamesDistinct.map(
        (indicator) => lineSelector.innerHTML += `<option value ="${indicator}"> ${indicator}</option>`
    );



    let ctx_line = document.getElementById('chart2_line').getContext('2d');
    window.myLine = new Chart(ctx_line, lineChartData);
};



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
}


































///////////////////////////////////////////////////////////////////////////////



// var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var config = {
//     type: 'line',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: window.chartColors.red,
//             borderColor: window.chartColors.red,
//             data: [
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor()
//             ],
//             fill: false,
//         }, {
//             label: 'My Second dataset',
//             fill: false,
//             backgroundColor: window.chartColors.blue,
//             borderColor: window.chartColors.blue,
//             data: [
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor()
//             ],
//         }]
//     },
//     options: {
//         responsive: true,
//         title: {
//             display: true,
//             text: 'Chart.js Line Chart'
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         },
//         scales: {
//             xAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Month'
//                 }
//             }],
//             yAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Value'
//                 }
//             }]
//         }
//     }
// };

// window.onload = function() {
//     // var ctx = document.getElementById('canvas').getContext('2d');

    
//     window.myLine = new Chart(ctx, config);
// };





// /////////////////////////////////////////////
// document.getElementById('randomizeData').addEventListener('click', function() {
//     config.data.datasets.forEach(function(dataset) {
//         dataset.data = dataset.data.map(function() {
//             return randomScalingFactor();
//         });

//     });

//     window.myLine.update();
// });

// var colorNames = Object.keys(window.chartColors);


// document.getElementById('addDataset').addEventListener('click', function() {
//     var colorName = colorNames[config.data.datasets.length % colorNames.length];
//     var newColor = window.chartColors[colorName];
//     var newDataset = {
//         label: 'Dataset ' + config.data.datasets.length,
//         backgroundColor: newColor,
//         borderColor: newColor,
//         data: [],
//         fill: false
//     };

//     for (var index = 0; index < config.data.labels.length; ++index) {
//         newDataset.data.push(randomScalingFactor());
//     }

//     config.data.datasets.push(newDataset);
//     window.myLine.update();
// });

// document.getElementById('addData').addEventListener('click', function() {
//     if (config.data.datasets.length > 0) {
//         var month = MONTHS[config.data.labels.length % MONTHS.length];
//         config.data.labels.push(month);

//         config.data.datasets.forEach(function(dataset) {
//             dataset.data.push(randomScalingFactor());
//         });

//         window.myLine.update();
//     }
// });

// document.getElementById('removeDataset').addEventListener('click', function() {
//     config.data.datasets.splice(0, 1);
//     window.myLine.update();
// });

// document.getElementById('removeData').addEventListener('click', function() {
//     config.data.labels.splice(-1, 1); // remove the label first

//     config.data.datasets.forEach(function(dataset) {
//         dataset.data.pop();
//     });

//     window.myLine.update();
// });
