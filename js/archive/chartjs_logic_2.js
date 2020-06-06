console.log('#####_1');

const color = Chart.helpers.color;

const indicatorNames = [];

// async function indicatorSelect_Setup() {
//     console.log('#####_2');
//     const select = document.querySelector('#hBarIndicator_Selector');

//     console.log('pulling data for: indicatorSelect_Setup');

//     await d3.csv('asean_data_hbar_total_updated2020_2.csv', function(error, data) {
//         if (error) throw error;
//         console.log('#####_3');
//         console.log('Printing Data Length for HBAR');
//         console.log(data.length);
//         console.log(data);
//         console.log('Done  Data Length for HBAR');
//         // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    
//         for(let i = 0; i < data.length; i++){
//             // console.log('HERE"S THE D3 csv data for HBAR');
//             // console.log(data[i]['indicator_name']);
//             // console.log('-------------------------');
//             indicatorNames.push(data[i]['indicator_name']);
//         }
//         console.log('#####_4');
//         let counter = 0;
//         indicatorNames.map(
//         (indicator) => select.innerHTML += `<option value ="${counter++}"> ${indicator}</option>`
//     );
//     console.log('#####_5');
//     });
//     // return indicatorNames;
//     // console.log('#####_6');
//     console.log('done: indicatorSelect_Setup');
// }; // goal of this is set up the select options

// LEFT OFF READING ABOUT FLOW CONTROL AND CALLBACKS, PROMISES, AND ASYNC / AWAIT

// GOAL IS TO GET THE SELECTORS ON THE SCREEN AND PLOT BOTH hBAR AND LINE CHART ASYCHRONOUSLY. MAIN PROBLEM IS THE FILE TAKES LONGER TO LOAD, SO I WANT TO FUNCTION ON CONTROL FLOW LIKE PYTHON NORMALLY IS, AFTER THE FILE IS DONE AND THEN EXECUTE THE PUSHING THE LIST OF OPTIONS TO THE LINE INDICATOR SELECTOR.
const indicatorNames_line = [];

function gatherLineIndicators(){
    
    console.log('#####_6');

    d3.csv('lineChart_trends_1995_2018_2.csv', function(error, data) {
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
    console.log('#####_8');

    return indicatorNames_line;
    });
}

function lineSelectSetUp(){
    const lineSelector = document.querySelector('#lineCtxIndicator_Selector');
    // gatherLineIndicators();
    gatherLineIndicators
    Array.from(new Set(indicatorNames_line)).map(
        (indicator) => lineSelector.innerHTML += `<option value ="${indicator}"> ${indicator}</option>`);
    console.log('done mapping unique indicators');
    console.log('#####_10');
}




// function LineChartTasks() {
//     function logError(e) {
//         console.error(e);
//         throw e;  // reject the Promise returned by then
//     }
//     let task1 = gatherLineIndicators();
//     let task2 = task1.then(lineSelectSetUp).then(null, logError);;
//     // var task3 = task2.then(startTask3);
//     let allTasks = console.log('last step - selectors should have been added');
//     return allTasks;
// }

// gatherLineIndicators()

window.onload = function() {

    lineSelectSetUp();


}




// async function LineSelector_Setup(array) {
//     const lineSelector = document.querySelector('#lineCtxIndicator_Selector');

//     console.log(lineSelector);
    
//     console.log('printing unique indicators');
//     let uniqueIndicators = Array.from(new Set(array));
    
//     console.log(uniqueIndicators);
//     console.log('DONE printing unique indicators');

//     uniqueIndicators.map(
//         (indicator) => lineSelector.innerHTML += `<option value ="${indicator}"> ${indicator}</option>`);
//     console.log('done mapping unique indicators');

//     // return indicatorNamesDistinct;
// }; 
