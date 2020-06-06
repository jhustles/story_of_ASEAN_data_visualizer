console.log('VERY FIRST LINE OF JS FILE')
console.log('=============================')

const select = document.querySelector('#hBarIndicator_Selector');
console.log(select);/////

// Set up indicator names
const indicatorNames = [];


// d3 reads seperately and putting the .map function under the window onload.




d3.csv('asean_data_hbar_total_updated2020_2.csv', function(error, data) {
    if (error) throw error;
    // console.log('1st D3 LIST OF HBAR KEYS CSV FILE!!~~~~~~~');
    // console.log(data.length);
    // console.log(data);
    // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    for(let i = 0; i < data.length; i++){
        // console.log('HERE"S THE D3 csv data for HBAR');
        // console.log(data[i]['indicator_name']);
        // console.log('-------------------------');
        indicatorNames.push(data[i]['indicator_name']);

        // console.log(`pushed: ${data[i]['indicator_names']} to indicatorNames array`);
    }
    });
    


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

// goal is target 

console.log('=============================');
console.log('PRINTING STATIC DATA');
console.log('=============================');

const color = Chart.helpers.color;
            ///////////////////////////////////////////////////////

            // example of an object we need to create and place into a list
            // array.prototype vs classes
            // this is all countries in ONE OBJECT.
            // what I need to do is make a list of all of these automated
            // read in the data, loop thru it and the output should be a list of objects

// const startUpHbarData = [69.63482, 53.7971 , 68.184, 49.77807, 81.33541 , 43.4838, 60.87374, 85.84348, 79.51709, 68.56869, 83.57395, 73.95071, 67.49639, 78.04159, 83.96046];

const horizontalBarChartData = {
    // labels:  ["Vietnam", "Thailand", "Singapore", "Philippines", "Myanmar", "Malaysia","Lao PDR", "Indonesia","Cambodia","Brunei Darussalam","ASEAN, Total"]
    labels: countriesHbar,
    datasets: [
        {
        // labels for the individual bars
        label: 'Ease Of Doing Business Score (0 = Lowest Performance To 100 = Best Performance)',
            // can I pass a color variable with conditionals to color these
        backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
        borderColor: window.chartColors.green,
        borderWidth: 1,
        // original data
        // data: [69.63482, 53.7971 , 68.184, 49.77807, 81.33541 , 43.4838, 60.87374, 85.84348, 79.51709, 68.56869, 83.57395, 73.95071, 67.49639, 78.04159, 83.96046]
        // data: [69.63482, 53.7971 , 68.184, 49.77807, 81.33541 , 43.4838, 60.87374, 85.84348, 79.51709, 68.56869],
        data: [69.63482, 53.7971 , 68.184, 49.77807, 81.33541 , 43.4838, 60.87374, 85.84348, 79.51709, 68.56869],
        options: {
            // scales: {
            //     yAxes: [
            //         {
            //             ticks: {
            //                 // callback: function(label, index, labels) {
            //                 //     return label.toLocaleString('en');
            //                 // }
            //                 callback: function(label, index, labels) {
            //                     return label/1000+'k';
            //                 }
            //             }
            //             ,scaleLabel: function (valuePayload) {
            //                 return Number(valuePayload.value).toFixed(2).replace('.',',') + '$';
            //             }
            //         }
            //     ]
            // }
          }
        }
    
    ]
    }



console.log('=============================');
console.log('STATIC DONE');
console.log('=============================');

window.onload = function() {
    console.log('FIRST LINE WINIDOW ONLOAD')
    console.log('=============================')
    
    console.log('About to appened and map all indicator names to the SELECT IN HTML');//////

    let counter = 0;
    indicatorNames.map(
        (indicator) => select.innerHTML += `<option value ="${counter++}"> ${indicator}</option>`
    );

    const ctx = document.getElementById('chart1_Hbar').getContext('2d');

    // believes Drew Created a horiztal bar property to the window, that is an object and has the following properties, and it renders a Chart.js Horizontal Bar Chart
    window.myHorizontalBar = new Chart(ctx, {
        type: 'horizontalBar',
        //defined above ^^^^^
        data: horizontalBarChartData,
        options: {
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
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
                xAxes: [{ // Logic to format the xAxes 
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
                            // labelString: '1k = 1000'
                        }
                    }]
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
}


function selectFilterbyHbar(value){
    console.log('2nd D3 LIST OF HBAR KEYS CSV FILE!!~~~~~~~');
    console.log('~~~~~~~~~~~~~~~~~~~');
    d3.csv('asean_data_hbar_total_updated2020_2.csv', function(error, data) {
        if (error) throw error;
        console.log('SELECT FILTER BY HBAR FUNCTION');
        console.log(data);
        console.log('++++++++++++++++++++++++');
        // could probably remove these since it's already designated as a global variable
        // countries =  ["Vietnam", "Thailand", "Singapore", "Philippines", "Myanmar", "Malaysia","Lao PDR", "Indonesia","Cambodia","Brunei Darussalam","ASEAN, Total"];
        // countries = ["Brunei Darussalam", "Cambodia", "China", "India",	"Indonesia", "Japan", "South Korea", "Lao PDR",	"Malaysia",	"Myanmar",	"Philippines",	"Singapore", "Thailand", "United States", "Vietnam"];

        let aseanData = []
        for(let index = 0; index < countriesHbar.length; index++){
            aseanData.push(data[parseInt(value)][countriesHbar[index]]);
        }
        horizontalBarChartData.datasets[0].label = data[value]["indicator_name"];
        horizontalBarChartData.datasets[0].data = aseanData;
        window.myHorizontalBar.update();
    })
};


// window.onload = function() {
//     var ctx = document.getElementById('chart1_Hbar').getContext('2d');
//     window.myHorizontalBar = new Chart(ctx, {
//         type: 'horizontalBar',
//         data: horizontalBarChartData,
//         options: {
//             // Elements options apply to all of the options unless overridden in a dataset
//             // In this case, we are setting the border of each horizontal bar to be 2px wide
//             elements: {
//                 rectangle: {
//                     borderWidth: 2,
//                 }
//             },
//             responsive: true,
//             legend: {
//                 position: 'right',
//             },
//             title: {
//                 display: true,
//                 text: 'ASEAN ECONOMIC INDICATORS FOR 2017'
//             }
//         }
//     });

// };

// EVENT LISTENERS PROVIDED BY CHART.JS EXAMPLES
///////////////////////////////////////////////////////
// document.getElementById('randomizeData').addEventListener('click', function() {
//     var zero = Math.random() < 0.2 ? true : false;
//     horizontalBarChartData.datasets.forEach(function(dataset) {
//         dataset.data = dataset.data.map(function() {
//             return zero ? 0.0 : randomScalingFactor();
//         });

//     });
//     window.myHorizontalBar.update();
// });



// var colorNames = Object.keys(window.chartColors);



// Event listeners related to buttons:

// document.getElementById('addDataset').addEventListener('click', function() {
//     var colorName = colorNames[horizontalBarChartData.datasets.length % colorNames.length];
//     var dsColor = window.chartColors[colorName];
//     var newDataset = {
//         label: 'Dataset ' + (horizontalBarChartData.datasets.length + 1), // insert labels here
//         backgroundColor: color(dsColor).alpha(0.5).rgbString(),
//         borderColor: dsColor,
//         data: []
//     };

//     for (var index = 0; index < horizontalBarChartData.labels.length; ++index) {
//         newDataset.data.push(randomScalingFactor());
//     }


//     horizontalBarChartData.datasets.push(newDataset);
//     window.myHorizontalBar.update();

// });



// // when you click on the 'addData' button, execute this:
// document.getElementById('addData').addEventListener('click', function() {

//     if (horizontalBarChartData.datasets.length > 0) {
//         var month = MONTHS[horizontalBarChartData.labels.length % MONTHS.length];
//         horizontalBarChartData.labels.push(month);

//         for (var index = 0; index < horizontalBarChartData.datasets.length; ++index) {
//             horizontalBarChartData.datasets[index].data.push(randomScalingFactor());
//         }

//         window.myHorizontalBar.update();
//     }
// });



// // when you click on the 'removeDataset' button, execute this:
// document.getElementById('removeDataset').addEventListener('click', function() {
//     horizontalBarChartData.datasets.pop();
//     window.myHorizontalBar.update();
// });



// // when you click on the 'removeData' button, execute this:
// document.getElementById('removeData').addEventListener('click', function() {
//     horizontalBarChartData.labels.splice(-1, 1); // remove the label first

//     horizontalBarChartData.datasets.forEach(function(dataset) {
//         dataset.data.pop();
//     });

//     window.myHorizontalBar.update();
// });


///////////////////////////////////////////////////////

// was thinking about extracting indicator names this way... but should probably use d3 to be consistent
// async function getIndicatorNames() {

//     // array containers for ASEAN countries + US CHINA S.Korea, Japan 

//     const xLabels_Hbar = [];
//     // Y values arrays
//     // const brunei_GDPgrowthPct = [];
//     // const cambodia_GDPgrowthPct = [];
//     // const indonesia_GDPgrowthPct = [];
//     // const lao_GDPgrowthPct = [];
//     // const malaysia_GDPgrowthPct = [];
//     // const myanmar_GDPgrowthPct = [];
//     // const philippines_GDPgrowthPct = [];
//     // const singapore_GDPgrowthPct = [];
//     // const thailand_GDPgrowthPct = [];
//     // const vietnam_GDPgrowthPct = [];
//     // const usa_GDPgrowthPct = [];
//     // const china_GDPgrowthPct = [];
//     // const india_GDPgrowthPct = [];
//     // const japan_GDPgrowthPct = [];
//     // const skorea_GDPgrowthPct = [];


//     // CSV are read as one big array. Each item in the array is a string with values seperated by commas. Hence, CSV.
//     // Fetch Makes a Request
//     const response_indicators = await fetch('hbar_indicator_list_keys.csv');
//     const response = await fetch('gdp_growth_1995_2018.csv');
//     // then we store the response in a variable called data
//     const data = await response.text();
//     // We want to split by a new line / line break \n. And slice(1) to get the array in the right array format with the index-like column that is just a number from 0 till the last item eg 100
//     const table = data.split('\n').slice(1,-1);
//     // console.log("here's the table")
//     // console.log(table)

//     // for each row in the table, we want to split all the values by commas. Then we want to extract each item for each room and store into a variable and then push it to a xlabels (array)
//     table.forEach(row => {
//         const columns = row.split(',');
//         const year = columns[2];

//         xLabels_Hbar.push(year)

//         //ALL THE Y Values aka Countries
//         // change string to float and fix to 2 decimal places

//         const brunei_value = parseFloat(columns[3]).toFixed(2);
//         const cambodia_value = parseFloat(columns[4]).toFixed(2);
//         const indonesia_value = parseFloat(columns[5]).toFixed(2);
//         const lao_value = parseFloat(columns[6]).toFixed(2);
//         const malaysia_value = parseFloat(columns[7]).toFixed(2);
//         const myanmar_value = parseFloat(columns[8]).toFixed(2);
//         const philippines_value = parseFloat(columns[9]).toFixed(2);
//         const singapore_value = parseFloat(columns[10]).toFixed(2);
//         const thailand_value = parseFloat(columns[11]).toFixed(2);
//         const vietnam_value = parseFloat(columns[12]).toFixed(2);
//         const usa_value = parseFloat(columns[13]).toFixed(2);
//         const china_value = parseFloat(columns[14]).toFixed(2);
//         const india_value = parseFloat(columns[15]).toFixed(2);
//         const japan_value = parseFloat(columns[16]).toFixed(2);
//         const skorea_value = parseFloat(columns[17]).toFixed(2);

//         // console.log(
//         //     year
//         //     , brunei_value
//         //     , cambodia_value
//         //     , indonesia_value
//         //     , lao_value
//         //     , malaysia_value
//         //     , myanmar_value
//         //     , philippines_value
//         //     , singapore_value
//         //     , thailand_value
//         //     , vietnam_value
//         //     , usa_value
//         //     , china_value 
//         //     , india_value 
//         //     , japan_value
//         //     , skorea_value
//         // );
        
        
        
//         brunei_GDPgrowthPct.push(brunei_value);
//         cambodia_GDPgrowthPct.push(cambodia_value);
//         indonesia_GDPgrowthPct.push(indonesia_value);
//         lao_GDPgrowthPct.push(lao_value);
//         malaysia_GDPgrowthPct.push(malaysia_value);
//         myanmar_GDPgrowthPct.push(myanmar_value);
//         philippines_GDPgrowthPct.push(philippines_value);
//         singapore_GDPgrowthPct.push(singapore_value);
//         thailand_GDPgrowthPct.push(thailand_value);
//         vietnam_GDPgrowthPct.push(vietnam_value);
//         usa_GDPgrowthPct.push(usa_value);
//         china_GDPgrowthPct.push(china_value);
//         india_GDPgrowthPct.push(india_value);
//         japan_GDPgrowthPct.push(japan_value);
//         skorea_GDPgrowthPct.push(skorea_value);

//     });
    
//     // return an object with the x's and y's
//     return {
//         xLabels_Hbar,
//         brunei_GDPgrowthPct,
//         cambodia_GDPgrowthPct,
//         indonesia_GDPgrowthPct,
//         lao_GDPgrowthPct,
//         malaysia_GDPgrowthPct, 
//         myanmar_GDPgrowthPct,
//         philippines_GDPgrowthPct, 
//         singapore_GDPgrowthPct,
//         thailand_GDPgrowthPct, 
//         vietnam_GDPgrowthPct, 
//         usa_GDPgrowthPct,
//         china_GDPgrowthPct, 
//         india_GDPgrowthPct,    
//         japan_GDPgrowthPct,
//         skorea_GDPgrowthPct
//     };
// }

console.log('HBAR DONE');
console.log('=============================================================');
