// Onload, load up the charts on the window

window.onload = function() {


    // Dynamically set up the indicator names for the Line Bar Selector
    indicatorNames_raw.map(
        (indicator) => lineSelector.innerHTML += `<option value ="${indicator}"> ${indicator}</option>`);

    // Draw the line chart.
    var ctx_line = document.getElementById('chart2_line').getContext('2d');
    window.myLine = new Chart(ctx_line, lineChartData);



    // Target the Horizontal bar chart canvas, gather and load the data, and then draw the chart.
    
    var ctx = document.getElementById('chart1_Hbar').getContext('2d');
    gatherData();
    selectFilterbyHbar('0');
    // believes Drew Created a horiztal bar property to the window, that is an object and has the following properties, and it renders a Chart.js Horizontal Bar Chart
    window.myHorizontalBar = new Chart(ctx, horizontal_bar_chart_input);

};
