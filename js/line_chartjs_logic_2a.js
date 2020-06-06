// Script to gather line chart indicators first
// I seperated the scripts because I had issues with getting the whole line chart plotted, so to resolve that, I broke out the scripts to be ran in synchronous order for the line chart, and it resolved the issue.

var lineSelector = document.querySelector('#lineCtxIndicator_Selector');

var indicatorNames_raw = [];
async function gatherLineIndicators(){
    // console.time("totalTime:");

    await d3.csv('js/data_csv/line_ctx_indicator_names.csv', function(error, data) {
    if (error) throw error;
    // console.log('1st D3 LIST OF HBAR KEYS CSV FILE!!~~~~~~~');
        // console.log(data.length);
        console.log(data);

        for (var i = 0; i < data.length; i++) {

            indicatorNames_raw.push(data[i]['indicator_name']);
        }
    });
}


gatherLineIndicators();