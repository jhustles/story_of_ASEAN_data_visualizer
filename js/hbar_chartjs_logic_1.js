// Setup data for charts
var color = Chart.helpers.color;

var select = document.querySelector('#hBarIndicator_Selector');
// Get data section
var indicatorNames = [];

// Gather Data for HBar and dynamically add the select options for the SelectFilterByHBar Function on the DOM
async function gatherData() {

    await d3.csv('js/data_csv/asean_data_hbar_total_updated2020_2.csv', function(error, data) {
        if (error) throw error;
        // console.log(data.length);
        console.log(data);
    
        for(let i = 0; i < data.length; i++){
            indicatorNames.push(data[i]['indicator_name']);
        }

        let counter = 0;
    // Leave here because it is able to post the options to the Horizontal bar selector right after it gathers the data.
    indicatorNames.map(
        (indicator) => select.innerHTML += `<option value ="${counter++}"> ${indicator}</option>`);
        
    });
}


/// HORIZONTAL BAR SETUP
var countriesHbar = [
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

// 
var horizontalBarChartData = {
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

        }
    ]
}



function selectFilterbyHbar(value){
    console.log('2nd D3 LIST OF HBAR KEYS CSV FILE!!~~~~~~~');
    console.log('~~~~~~~~~~~~~~~~~~~');
    d3.csv('js/data_csv/asean_data_hbar_total_updated2020_2.csv', function(error, data) {
        if (error) throw error;
        console.log('SELECT FILTER BY HBAR FUNCTION');
        console.log(data);
        console.log('++++++++++++++++++++++++');

        var aseanData = []

        for(var index = 0; index < countriesHbar.length; index++){
            aseanData.push(data[parseInt(value)][countriesHbar[index]]);
        }
        horizontalBarChartData.datasets[0].label = data[value]["indicator_name"];
        horizontalBarChartData.datasets[0].data = aseanData;

        window.myHorizontalBar.update();
    })
};


