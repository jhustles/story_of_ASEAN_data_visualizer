// USA
// var myMap = L.map('mapid').setView([37.8, -96], 4);

// SE Asia
var myMap = L.map('mapid').setView([8.488092, 114.404754], 4);


var dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 3.5,
    maxZoom: 5,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1Ijoiamh1c3RsZXMiLCJhIjoiY2thb2ZiaGttMW5jZjJ0cDZoZmp6b242bCJ9.JjM5CMxGHdLAjdF8WcsF-A"
    // accessToken: API_KEY
})//.addTo(myMap);

var light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 3.5,
    maxZoom: 5,
    // id: 'mapbox/dark-v10',
    // id: "mapbox.streets",
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1Ijoiamh1c3RsZXMiLCJhIjoiY2thb2ZiaGttMW5jZjJ0cDZoZmp6b242bCJ9.JjM5CMxGHdLAjdF8WcsF-A"
    // accessToken: API_KEY
});//.addTo(myMap);

var street = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 3.5,
    maxZoom: 5,
    // id: 'mapbox/dark-v10',
    // id: "mapbox.streets",
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1Ijoiamh1c3RsZXMiLCJhIjoiY2thb2ZiaGttMW5jZjJ0cDZoZmp6b242bCJ9.JjM5CMxGHdLAjdF8WcsF-A"
    // accessToken: API_KEY
}).addTo(myMap);

//// FLAG ICONS
let aseanCountries = [];
let aseanCapitals = [];
let aseanCapitalsCoordinates = [];
let aseanFlags = [];
let aseanFlagIcons = [];

for (i=0; i < countries.length; i++){
  aseanCountries.push(countries[i]['name']);
  aseanCapitals.push(countries[i]['capital']);
  aseanCapitalsCoordinates.push(countries[i]['location']);
  aseanFlags.push(countries[i]['flag']);
  // let marker = L.marker(aseanCapitalsCoordinates[i], {
  //   draggable: false,
  //   title: aseanCapitals[i]
  // }).addTo(myMap);
  // marker.bindPopup(`${aseanCapitals[i]}, ${aseanCountries[i]}`);

  var myIcon = L.icon({
    iconUrl: aseanFlags[i],
    iconSize: [25, 25],
    iconAnchor: [9, 24],
    popupAnchor: [9, 24],
    // shadowUrl: '',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
  });

// Marker of Flag Icons of each respective country
  let marker = L.marker(aseanCapitalsCoordinates[i], {icon: myIcon}).bindPopup(
    "<h4>" + countries[i].name +"</h4>"+"<hr>"
    +"<h6>Capital: " + (countries[i].capital)+"</h6>"
    +"<h6>Head of State: " + (countries[i].leader) +"</h6>"
    +"<h6>GDP (Current US$B): " + (countries[i].gdp_curr_yr/1000000000)+"</h6>"
    +"<h6>Population (MM): " + (countries[i].population/1000000)+"</h6>"
    );
    aseanFlagIcons.push(marker)

};

var flagIconLayer = L.layerGroup(aseanFlagIcons).addTo(myMap);





// USA
// L.geoJson(statesData).addTo(myMap);

// // SE Asia
// L.geoJson(aseanData).addTo(myMap);


function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}


// function getColorOutline(id){
//     return id = '1' ? "red" :
//             id = '2' ? 'orange':
//             id = '3' ? 'rgb(223, 79, 255)':
//             id = '4' ? 'red':
//             id = '5' ? 'white':
//             id = '6' ? 'rgb(41, 199, 184)':
//             id = '7' ? '#66A4FA': // light blue - philippines
//             id = '8' ? 'red':
//             id = '9' ? 'rgb(111, 235, 74)':
//             yellow// last color here
// }


function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        // color: getColorOutline(feature.properties.id),
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// USA
// L.geoJson(statesData, {style: style}).addTo(myMap);

// SE Asia
// L.geoJson(aseanData, {style: style}).addTo(myMap);

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#FAEC2A', // yellow
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    // added this part for the Custom Control Info - update the control when the user hovers over a state, so we’ll also modify our listeners as follows:
    ;
    info.update(layer.feature.properties);

}


function resetHighlight(e) {
    geojson.resetStyle(e.target);

    // added this part for the Custom Control Info - update the control when the user hovers over a state, so we’ll also modify our listeners as follows:
    info.update();
}

// COME BACK TO THIS to set up listeners
var geojson;
// ... our listeners  USA
// geojson = L.geoJson(statesData);

// SE Asia
// geojson = L.geoJson(aseanData);

// var populationLayer = L.layerGroup(geojson);



function zoomToFeature(e) {
    myMap.fitBounds(e.target.getBounds());
}


function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}
//USA
// geojson = L.geoJson(statesData, {
    
    //SE Asia
//     geojson = L.geoJson(aseanData, {
//     style: style,
//     onEachFeature: onEachFeature
// }).addTo(myMap);


// Custom Info Control:
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Population Density</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / km<sup>2</sup>'
        : 'Hover over a state');
};

// info.addTo(myMap);




// Custom Legend Control
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));

    }

    div.innerHTML = labels.join('<br>');
    return div;
};


geojson = L.geoJson(aseanData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(myMap);


var baseMaps = {
    Street: street,
    Light: light,
    Dark: dark
    
};

var overlayMaps = {
    // Countries: countryOutlineLayer,
    Flags: flagIconLayer
    // Population: populationLayer
};

var controlSetup = {
    position : 'bottomleft'
};

//   var myMap = L.map('mapid').setView([8.488092, 114.404754], 4);
// myMap = L.map('mapid', {
//     // layers: [dark, countryOutlineLayer, flagIconLayer]
//     layers: [dark]
// }).setView([8.488092, 114.404754], 4);





info.addTo(myMap);
legend.addTo(myMap);

L.control.layers(baseMaps, overlayMaps, controlSetup).addTo(myMap);

L.control.scale().addTo(myMap);



