const indicatorNames_line = [];
async function gatherLineIndicators(){
    
    console.log('#####_6');
    const lineSelector = document.querySelector('#lineCtxIndicator_Selector');

    await d3.csv('lineChart_trends_1995_2018_2.csv', function(error, data) {
    if (error) throw error;
    // console.log('1st D3 LIST OF HBAR KEYS CSV FILE!!~~~~~~~');
    // console.log(data.length);
    // console.log(data);
    // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('#####_7');
    for(let i = 0; i < data.length; i++){
        // console.log('HERE"S THE D3 csv data LINE BY LINE');

        // console.log(data[i]['indicator_name']);
        // console.log('-------------------------');
        indicatorNames_line.push(data[i]['indicator_name']);
    }
    });
    console.log('#####_8');

    return indicatorNames_raw;
}