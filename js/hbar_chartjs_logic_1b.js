var horizontal_bar_chart_input = {
    type: 'horizontalBar',
    data: horizontalBarChartData,
    options: {
        elements: {
        rectangle: {
            borderWidth: 2,
        }
        },
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            position: 'bottom',
            display: false
        },
        title: {
            display: true,
            text: ' '
        },
        scales: {
            xAxes: [
                { // Logic to format the xAxes 
                    gridLines: {
                        display: false ,
                        color: "#FFF"
                      },
                    ticks: {
                        beginAtZero: true,
                        fontSize: 17,
                        maxRotation: 30,
                        minRotation: 30,
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
            ],yAxes: [
                { // Logic to format the xAxes 
                    gridLines: {
                        display: true ,
                        color: "#FFF"
                    },
                    ticks: {
                        beginAtZero: true,
                        fontSize: 17,
                            
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
}
// );