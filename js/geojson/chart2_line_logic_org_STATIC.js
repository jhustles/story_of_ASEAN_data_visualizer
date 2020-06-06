// LINE CHART - using CSV


// Dynamically
// Create an empty list of objects with {data [] array for Y-axis, labels: data for (x-axis),  }


chartit();

async function chartit(){
    // chart it will AWAIT until all the data is collected, then begin to chart.
    
    // now the chartit() and getData operate independtly
    const data = await getData();
    
    const ctx = document.getElementById("chart2_line");
    const myChart = new Chart(ctx, {
    // tells chart.js draw a line chart
    type: 'line',
    
    data: {
        // here the data for the x-axis
        labels: data.xLabels,
        // datasets take in a list of objects with Chart.js Properties
        datasets: [
            {
                label: "Brunei Darussalam GDP Growth %",
                data: data.brunei_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "Cambodia GDP Growth %",
                data: data.cambodia_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "Indonesia GDP Growth %",
                data: data.indonesia_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "Lao PDR GDP Growth %",
                data: data.lao_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "Malaysia GDP Growth %",
                data: data.malaysia_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "Myanmar GDP Growth %",
                data: data.myanmar_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "Philippines GDP Growth %",
                data: data.philippines_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "Singapore GDP Growth %",
                data: data.singapore_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "Thailand GDP Growth %",
                data: data.thailand_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "Vietnam GDP Growth %",
                data: data.vietnam_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "USA GDP Growth %",
                data: data.usa_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "China GDP Growth %",
                data: data.china_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "India GDP Growth %",
                data: data.india_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "Japan GDP Growth %",
                data: data.japan_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            },
            {
                label: "South Korea GDP Growth %",
                data: data.skorea_GDPgrowthPct,
                // backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                // borderColor: "#3e95cd",
                borderWidth: 1,
                fill: false
            }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '%';
                    }
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



async function getData() {

    // array containers for ASEAN countries + US CHINA S.Korea, Japan 

    const xLabels = [];
    // Y values arrays
    const brunei_GDPgrowthPct = [];
    const cambodia_GDPgrowthPct = [];
    const indonesia_GDPgrowthPct = [];
    const lao_GDPgrowthPct = [];
    const malaysia_GDPgrowthPct = [];
    const myanmar_GDPgrowthPct = [];
    const philippines_GDPgrowthPct = [];
    const singapore_GDPgrowthPct = [];
    const thailand_GDPgrowthPct = [];
    const vietnam_GDPgrowthPct = [];
    const usa_GDPgrowthPct = [];
    const china_GDPgrowthPct = [];
    const india_GDPgrowthPct = [];
    const japan_GDPgrowthPct = [];
    const skorea_GDPgrowthPct = [];


    // CSV are read as one big array. Each item in the array is a string with values seperated by commas. Hence, CSV.
    // Fetch Makes a Request
    // const response = await fetch('gapMinder.csv');
    // const response = await fetch('gdp_growth_1995_2018.csv');
    const response = await fetch('lineChart_trends_1995_2018_2.csv');
    // then we store the response in a variable called data
    const data = await response.text();
    // We want to split by a new line / line break \n. And slice(1) to get the array in the right array format with the index-like column that is just a number from 0 till the last item eg 100
    const table = data.split('\n').slice(1,-1);
    // console.log("here's the table")
    // console.log(table)

    // for each row in the table, we want to split all the values by commas. Then we want to extract each item for each room and store into a variable and then push it to a xlabels (array)
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[2];

        xLabels.push(year)

        //ALL THE Y Values aka Countries
        // change string to float and fix to 2 decimal places

        const brunei_value = parseFloat(columns[3]).toFixed(2);
        const cambodia_value = parseFloat(columns[4]).toFixed(2);
        const indonesia_value = parseFloat(columns[5]).toFixed(2);
        const lao_value = parseFloat(columns[6]).toFixed(2);
        const malaysia_value = parseFloat(columns[7]).toFixed(2);
        const myanmar_value = parseFloat(columns[8]).toFixed(2);
        const philippines_value = parseFloat(columns[9]).toFixed(2);
        const singapore_value = parseFloat(columns[10]).toFixed(2);
        const thailand_value = parseFloat(columns[11]).toFixed(2);
        const vietnam_value = parseFloat(columns[12]).toFixed(2);
        const usa_value = parseFloat(columns[13]).toFixed(2);
        const china_value = parseFloat(columns[14]).toFixed(2);
        const india_value = parseFloat(columns[15]).toFixed(2);
        const japan_value = parseFloat(columns[16]).toFixed(2);
        const skorea_value = parseFloat(columns[17]).toFixed(2);

        // console.log(
        //     year
        //     , brunei_value
        //     , cambodia_value
        //     , indonesia_value
        //     , lao_value
        //     , malaysia_value
        //     , myanmar_value
        //     , philippines_value
        //     , singapore_value
        //     , thailand_value
        //     , vietnam_value
        //     , usa_value
        //     , china_value 
        //     , india_value 
        //     , japan_value
        //     , skorea_value
        // );
        
        
        
        brunei_GDPgrowthPct.push(brunei_value);
        cambodia_GDPgrowthPct.push(cambodia_value);
        indonesia_GDPgrowthPct.push(indonesia_value);
        lao_GDPgrowthPct.push(lao_value);
        malaysia_GDPgrowthPct.push(malaysia_value);
        myanmar_GDPgrowthPct.push(myanmar_value);
        philippines_GDPgrowthPct.push(philippines_value);
        singapore_GDPgrowthPct.push(singapore_value);
        thailand_GDPgrowthPct.push(thailand_value);
        vietnam_GDPgrowthPct.push(vietnam_value);
        usa_GDPgrowthPct.push(usa_value);
        china_GDPgrowthPct.push(china_value);
        india_GDPgrowthPct.push(india_value);
        japan_GDPgrowthPct.push(japan_value);
        skorea_GDPgrowthPct.push(skorea_value);

    });
    
    // return an object with the x's and y's
    return {
        xLabels,
        brunei_GDPgrowthPct,
        cambodia_GDPgrowthPct,
        indonesia_GDPgrowthPct,
        lao_GDPgrowthPct,
        malaysia_GDPgrowthPct, 
        myanmar_GDPgrowthPct,
        philippines_GDPgrowthPct, 
        singapore_GDPgrowthPct,
        thailand_GDPgrowthPct, 
        vietnam_GDPgrowthPct, 
        usa_GDPgrowthPct,
        china_GDPgrowthPct, 
        india_GDPgrowthPct,    
        japan_GDPgrowthPct,
        skorea_GDPgrowthPct
    };
    // later have it return a list of objects of the countries 
    

};




