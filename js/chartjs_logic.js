// Setup data for charts




//////////////////////////////////////////////////



// gather data for line chart
async function gatherLineIndicators(){
    const indicatorNames_raw = [];
    await d3.csv('lineChart_trends_1995_2018_2.csv', function(error, data) {
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
    return indicatorNames_raw;
}

//////////////////////////////////////////////////////



/// HORIZONTAL BAR SETUP
const countriesHbar = [
    "Brunei Darussalam",
    "Cambodia",
    "Indonesia",
    "Lao PDR",
    "Malaysia",
    "Myanmar",
    "Philippines",
    "Singapore",
    "Thailand",
    "Vietnam"
    // , removed to simplify
    // "United States",
    // "China",
    // "India",
    // "Japan",
    // "South Korea"
];


const horizontalBarChartData = {
    labels: countriesHbar,
    datasets: [
        {
        // labels for the individual bars
        label: 'Ease Of Doing Business Score (0 = Lowest Performance To 100 = Best Performance)',
            // can I pass a color variable with conditionals to color these
        backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
        borderColor: window.chartColors.green,
        borderWidth: 1,
        // data: [69.63482, 53.7971 , 68.184, 49.77807, 81.33541 , 43.4838, 60.87374, 85.84348, 79.51709, 68.56869],
        data: [],
        options: {}
        }
    ]
}

//////////// Horizontal Bar Chart Above ////////////////////////

//////////// Line Chart BELOW ////////////////////////

async function LineSelectorIndicator () {
    const indicatorNamesDistinct = indicatorNames_raw.filter((x, i, a) => a.indexOf(x) == i);

    indicatorNamesDistinct.map(
        (indicator) => lineSelector.innerHTML += `<option value ="${indicator}"> ${indicator}</option>`
    );

    return indicatorNamesDistinct;
}


async function getLineChartData() {
    const my_datasets = [];
    await d3.csv("lineChart_trends_1995_2018_2.csv", function(error, data) {
    if (error) throw error;
    console.log(data.length);
    console.log('HERE is the data');
    console.log('++++++++++++++++++++++++++++++++');
    console.log(data);
    console.log('++++++++++++++++++++++++++++++++');

    // xAxis_Years = xAxis_Years.concat(years_line);
    // console.log(xAxis_Years);
    // })
    //}


    let filterby = 'Trade (% Of GDP)';

    // filterData is a list of objects outputted by the arrrow function
    let filterData = data.filter((row) => row["indicator_name"] === filterby);
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
    });
    return my_datasets;
}

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
    console.log('FIRST LINE WINIDOW ONLOAD')
    console.log('=============================')

    
    console.log(select);/////
    //H bar chart
    gatherData();
    // Line chart
    gatherLineIndicators()
    let lineSelector = document.querySelector('#lineCtxIndicator_Selector');
    // pass in a default so when the page loads, it populates the chart
    selectFilterbyHbar('0');
    // let counter = 0;
    // indicatorNames.map(
    //     (indicator) => select.innerHTML += `<option value ="${counter++}"> ${indicator}</option>`
    // );

    const ctx = document.getElementById('chart1_Hbar').getContext('2d');

    // believes Drew Created a horiztal bar property to the window, that is an object and has the following properties, and it renders a Chart.js Horizontal Bar Chart
    window.myHorizontalBar = new Chart(ctx, {
        type: 'horizontalBar',
        data: horizontalBarChartData,
        options: {
            elements: {
            rectangle: {
                borderWidth: 2,
            }
            },
            responsive: true,
            legend: {
                position: 'bottom',
                display: false
            },
            title: {
                display: true,
                text: '2018 World Bank Data Visualization'
            },
            scales: {
                xAxes: [
                    { // Logic to format the xAxes 
                        ticks: {
                            beginAtZero: true,
                            // callback: function(label, index, labels) {
                            //     return label.toLocaleString('en');
                            // }
                            callback: function(label, index, labels) {
                                let number = label;
                                
                                if (number > 1000000) {
                                    number = number / 1000000;
                                        number_f = number.toLocaleString('en') + ' (MM)';
                                    return number_f

                                } else if (number > 1000) {
                                    number = number / 1000;
                                    number_f = number.toLocaleString('en') + ' (K)';
                                    return number_f
                                } else {
                                    number_f = number.toLocaleString('en');
                                    return number_f
                                }
                                }
                                
                        }
                        // ,scaleLabel: function (valuePayload) {
                        //     return Number(valuePayload.value).toFixed(2).replace('.',',') + '$';
                        ,scaleLabel: {
                            display: true,
                        }
                    }
                ]
            },tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        // Below is the logic that divides the numbers and formats the tool tip
                        let label = '';
                        let number_tt = tooltipItem.xLabel;
                        
                        if (number_tt > 1000000) {
                            number_tt = number_tt / 1000000;
                            number_f = number_tt.toLocaleString('en') + ' (MM)';
                            return label += number_f

                        } else if (number_tt > 1000) {
                            number_tt = number_tt / 1000;
                            label = number_tt.toLocaleString('en') + ' (K)';
                            return label += number_f
                        } else {
                            number_f = number_tt.toLocaleString('en');
                            return label += number_f
                        }
                    }
                }
            }
        }
    });


    //// Chart line data below on window load

    gatherLineIndicators();

    
    //     }


    getLineChartData();

    console.log('WINOW - HERE IS INDICATOR NAMES DISTINCT+++++++')
    console.log(indicatorNamesDistinct)

    let ctx_line = document.getElementById('chart2_line').getContext('2d');
    window.myLine = new Chart(ctx_line, lineChartData);







}

////////////////SELECTORS

async function selectFilterbyHbar(value){
    console.log('2nd D3 LIST OF HBAR KEYS CSV FILE!!~~~~~~~');
    console.log('~~~~~~~~~~~~~~~~~~~');
    await d3.csv('asean_data_hbar_total_updated2020_2.csv', function(error, data) {
        if (error) throw error;
        console.log('SELECT FILTER BY HBAR FUNCTION');
        console.log(data);
        console.log('++++++++++++++++++++++++');

        let aseanData = []
        for(let index = 0; index < countriesHbar.length; index++){
            aseanData.push(data[parseInt(value)][countriesHbar[index]]);
        }
        horizontalBarChartData.datasets[0].label = data[value]["indicator_name"];
        horizontalBarChartData.datasets[0].data = aseanData;
        window.myHorizontalBar.update();
    })
};




async function selectFilterbyLineCtx(value){

    await d3.csv("lineChart_trends_1995_2018_2.csv", function(error, data) {
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