// This script is to gether all information for the line chart data, so JavaScript can plot once it had all the data it needed. The issue I had was the JavaScript was trying to plot the chart before it had all the data beacuse it works asynchronously.

console.log('starting script 2c');

var my_datasets = [];

var filterby = 'Current Health Expenditure (% Of GDP)'; // this is meant to be a global variable to be used in script.

async function getLineChartData() {
    await d3.csv("js/data_csv/lineCtx_onload_1995_2018.csv", function(error, data) {
    if (error) throw error;
    console.log(data.length);
    console.log('HERE is the data');
    console.log('++++++++++++++++++++++++++++++++');
    console.log(data);
    console.log('++++++++++++++++++++++++++++++++');

    
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
});
    return filterby;
}

// this is used for labeling the x-axis when the chart is drawn
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

// this is used to return the name of the country for the tool tips
var countries_Line = [
    "Brunei Darussalam", //0
    "Cambodia",
    "China",
    "India",//3
    "Indonesia",
    "Japan",
    "Lao PDR",//6
    "Malaysia",
    "Myanmar",
    "Philippines",//9
    "Singapore",
    "South Korea",
    "Thailand",//12
    "United States",
    "Vietnam" // 14
];


function dynamic_Yaxis_Label_Signs(hbarSearchValue, number){
    
    if (hbarSearchValue.includes('%') === true){
        console.log('Search contains PERCENTAGE % sign')
        number_f = number.toLocaleString('en') + '%';
        return number_f;

    } else if (hbarSearchValue.includes('$') === true) {

        console.log('Search contains DOLLAR $ sign')

        if (number >= 1000000) {
            number = number / 1000000;
            number_f = number.toLocaleString('en') + ' ($MM)';
            return number_f;

        } else if (number >= 1000) {
            number = number / 1000;
            number_f = number.toLocaleString('en') + ' ($K)';
            return number_f;

        } else if (number >= 101) {
            number_f = number.toLocaleString('en') + ' ($K)';
            return number_f;

        } else {
            number_f = number.toLocaleString('en') + ' ($)';
            return number_f;
        }
    } else {
        console.log('Search contains NO SIGNS')
        if (number >= 1000000) {
            number = number / 1000000;
            number_f = number.toLocaleString('en') + ' (MM)';
            return number_f;

        } else if (number >= 10000) {
            number = number / 1000;
            number_f = number.toLocaleString('en') + ' (K)';
            return number_f;

        } else{
            number_f = number.toLocaleString('en');
            return number_f;
        }
    }
};




Chart.defaults.global.defaultFontSize = 15; // adjusts the fonts for the color tags of the country labels
Chart.defaults.global.defaultFontColor = "#fff";

var lineChartData = {
    type: 'line',
    data:{
        labels: x_Axis_Labels,
        datasets: my_datasets,
        fontSize: 20,
        fontColor: '#fff'
        // datasets: my_dataset_with_bgColor
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        hoverMode: 'index',
        stacked: false,
        legend: {
            display: true,
            fontSize: 10,
            fontColor: '#fff'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false ,
                    color: "#FFF"
                },
                ticks: {
                    fontSize: 17,
                    maxRotation: 60,
                    minRotation: 60,
                    fontColor: '#fff',
                    padding: 4
                }
            }],
            yAxes: [
                { // Logic to format the xAxes 
                    gridLines: {
                        display: true ,
                        color: "#FFF"
                    },
                    ticks: {
                        beginAtZero: true,
                        fontSize: 17,
                        fontColor: '#fff',
                        padding: 4,
                        // callback: function(label, index, labels) {
                        //     return label.toLocaleString('en');
                        // }
                        callback: function(label, index, labels) {
                            // console.log('LOOOK RIGHT HURRRRRRRRRRR')
                            // console.log(label); // label draws from top down. yxis "label"
                            // console.log(index); // outputted nothing
                            // console.log(labels); //outputted nothing

                        //     // for this function, you will pass in filterby
                        // function determineSign(hbarSearchValue, number){
                            // var hbarSearchValue = filterby; // going to pass in filterby
                            // console.log('The current filter by is: ')
                            // console.log(hbarSearchValue);
                            //let number = label; // find out how to refer to the 'label' value you're targeting, and pass it.

                            // if (hbarSearchValue.includes('%') === true){
                            //     console.log('Search contains PERCENTAGE % sign')
                            //     number_f = number.toLocaleString('en') + '%';
                            //     return number_f;

                            // } else if (hbarSearchValue.includes('$') === true) {

                            //     console.log('Search contains DOLLAR $ sign')

                            //     if (number >= 1000000) {
                            //         number = number / 1000000;
                            //         number_f = number.toLocaleString('en') + ' ($MM)';
                            //         return number_f;
        
                            //     } else if (number >= 1000) {
                            //         number = number / 1000;
                            //         number_f = number.toLocaleString('en') + ' ($K)';
                            //         return number_f;

                            //     } else if (number >= 101) {
                            //         number_f = number.toLocaleString('en') + ' ($K)';
                            //         return number_f;

                            //     } else {
                            //         number_f = number.toLocaleString('en') + ' ($)';
                            //         return number_f;
                            //     }
                            // } else {
                            //     console.log('Search contains NO SIGNS')

                            //     if (number >= 101) {
                            //         number_f = number.toLocaleString('en') + ' (K)';
                            //         return number_f;

                            //     } else {
                                    
                            //         number_f = number.toLocaleString('en');
                            //         return number_f;
                            //     }
                            // }

                            dynamic_Yaxis_Label_Signs(filterby, label);
                            return number_f;
                            
                        }
                        
                    }
                }
            ],
            
        }
            ,tooltips: {
                callbacks: {
                    mode: 'single',
                    label: function(tooltipItem, data) {
                        // Below is the logic that divides the numbers and formats the tool tip
                        // let label = data.label;
                        console.log('HERE"S THE TOOL TIP DATA');
                        console.log(data);
                        console.log('HERE"S THE TOOL TIP ITEM');
                        console.log(tooltipItem);
                        // let tt_line_label = '';
                        // let labelIndex = tooltipItem.datasetIndex;                        
                        // // console.log('Here is the labelIndex which should be equal to tooltipItem');
                        // // console.log(labelIndex);

                        // var tt_countryName = countries_Line[labelIndex];
                        // let tt_pointer_value = Math.round(tooltipItem.value).toFixed(2);

                        // dynamic_Yaxis_Label_Signs(filterby, tt_pointer_value);
                        // // this function returns var number_f - formattted number; // 
                        
                        // // have the tooltip return the country_name, indicator name, and the formatted value
                        // tt_line_label += tt_countryName + " | " + filterby + " - " + number_f;

                        // return tt_line_label;

                        // this gives 3 seperate lines, but assigns colors to them. This must mean each has a default color option
                        let tt_line_label_array = []; // putting the label into an array allows the color square to disply on the tooltip.
                        let tt_line_label = '';

                        // Extract index number to set up extract the name from the countries list
                        let labelIndex = tooltipItem.datasetIndex;                        
                        // console.log('Here is the labelIndex which should be equal to tooltipItem');
                        // console.log(labelIndex); // pull the country name using the index from the list of countries

                        var tt_countryName = countries_Line[labelIndex];
                        
                        let tt_pointer_value = Math.round(tooltipItem.value).toFixed(2);

                        // dynamic_Yaxis_Label_Signs FUNCTION returns var number_f - formattted number; // 
                        dynamic_Yaxis_Label_Signs(filterby, tt_pointer_value);
                        
                        tt_line_label += tt_countryName + " - " + number_f;

                        tt_line_label_array.push(tt_line_label);

                        return tt_line_label_array;
                        
                            
                        }
                    }
                }
            },
            plugins: {
            colorschemes: {
                scheme: 'tableau.Classic20'
            }
            }
        
    };


getLineChartData();



function selectFilterbyLineCtx(value){

    d3.csv("js/data_csv/lineChart_trends_1995_2018_2.csv", function(error, data) {
    filterData = data.filter((row) => row["indicator_name"] === value);
    
    filterby = value;

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
            ], // heres where i made
            options: {
                // scales: {
                //     yAxes: [
                //         { // Logic to format the xAxes 
                //             ticks: {
                //                 beginAtZero: true,
                //                 // callback: function(label, index, labels) {
                //                 //     return label.toLocaleString('en');
                //                 // }
                //                 callback: function(label, index, labels) {
                //                     console.log('LOOOK RIGHT HURRRRRRRRRRR')
                //                     console.log(label);
                //                     console.log(index);
                //                     console.log(labels);
                //                     var hbarSearchValue = filterby;
                //                     let number = label;

                //                     if (hbarSearchValue.includes('%') === true){
                //                         console.log('Search contains percentage % sign')
                //                         number_f = number.toLocaleString('en') + '%';
                //                         return number_f;
                //                     } else if (hbarSearchValue.includes('$') === true) {

                //                         console.log('Search contains percentage $ sign')
                //                         if (number >= 1000000) {
                //                                 number = number / 1000000;
                //                                     number_f = number.toLocaleString('en') + ' (MM)';
                //                                 return number_f;
                
                //                             } else if (number >= 1000) {
                //                                 number = number / 1000;
                //                                 number_f = number.toLocaleString('en') + ' (K)';
                //                                 return number_f;
            
                //                             } else if (number >= 101) {
                //                                 number_f = number.toLocaleString('en') + ' (K)';
                //                                 return number_f;

                //                             } else {
                //                                 number_f = number.toLocaleString('en');
                //                                 return number_f;

                //                             }
                //                         } else {
                //                             console.log('Search contains percentage $ sign')
                //                             if (number >= 1000000) {
                //                                 number = number / 1000000;
                //                                 number_f = number.toLocaleString('en') + ' (MM)';
                //                                 return number_f;
            
                //                             } else if (number >= 1000) {
                //                                 number = number / 1000;
                //                                 number_f = number.toLocaleString('en') + ' (K)';
                //                                 return number_f;
            
                //                             } else if (number >= 101) {
                //                                 number_f = number.toLocaleString('en') + ' (K)';
                //                                 return number_f;
            
                //                             } else {
                                                
                //                                 number_f = number.toLocaleString('en');
            
                //                                 // if (number == 0.00 || number == 0 || number === 0 || number === 0.00 || number == '0' || number === '0.00') {
                //                                 //     return number_f = number.toLocaleString('en');
                //                                 // }
                //                                 return number_f;
                //                             }
                //                         }
                                    
                //                 }
                                    
                //             }
                //             ,scaleLabel: function (valuePayload) {
                //                 return Number(valuePayload.value).toFixed(2).replace('.',',') + '$';}
                //             ,
                //             // scaleLabel: {
                //             //     display: true,
                //             // }
                //         }
                //     ]
                // },
                tooltips: {
                    // callbacks: {
                    //     label: function(tooltipItem, data) {
                    //         // Below is the logic that divides the numbers and formats the tool tip
                    //         let label = '';
                    //         let number_tt = tooltipItem.yLabel;
                            
                    //         number_f = number_tt.toLocaleString('en') + '%';
                    //         return label += number_f
                    //     }
                    // }
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




// saving just in case need to go back and use it
// scales: {
//     yAxes: [{
//         ticks: {
//             // Include a dollar sign in the ticks
//             callback: function(value, index, values) {
//                 return value + '%';
//             }
//         },
//         scaleLabel: {
//             display: true,
//         }
//     }]
// }




