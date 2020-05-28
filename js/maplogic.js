var countries = [
    {
      name: "Brunei Darussalam",
      currency: "B$ (Brunei Dollar)",
      location: [4.94029, 114.94806],
      capital: "Bandar Seri Begawan",
      leader: "His Majesty Sultan Haji Hassanal Bolkiah Mu’izzaddin Waddaulah",
      gdp_curr_yr: 12128089002,
      population: 428697,
      pop_male: "51%",
      pop_female: "49%",
      urban_pop: "77%",
      rural_pop: "23%",
      laborpop_educated: "82%",
      flag: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I76xY3xLF41YA2XDUKAecgHaEK%26pid%3DApi&f=1'
    },
    {
      name: "Cambodia",
      currency: "Riel",
      location: [11.562108, 104.888535],
      capital: "Phnom Penh",
      leader: "His Majesty King Norodom Sihamoni",
      gdp_curr_yr: 22158209503,
      population: 16005373,
      pop_male: "49%",
      pop_female: "51%",
      urban_pop: "23%",
      rural_pop: "77%",
      laborpop_educated: "79%",
      flag: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1OuUPzJaPJ8xcvv1Y7zBKgHaE8%26pid%3DApi&f=1'
    },
    {
      name: "Indonesia",
      currency: "Rupiah",
      location: [-6.21462, 106.84513],
      capital: "Jakarta",
      leader: "President Joko Widodo",
      gdp_curr_yr: 1020000000000,
      population: 263991379,
      pop_male: "50%",
      pop_female: "50%",
      urban_pop: "55%",
      rural_pop: "45%",
      laborpop_educated: "85%",
      flag: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.CZP04Jzt3DbVwumf_yzcuAHaE8%26pid%3DApi&f=1'
    },
    {
      name: "Lao PDR",
      currency: "Kip",
      location: [17.974855, 102.630867],
      capital: "Vientiane",
      leader: "Prime Minister Thongloun Sisoulith",
      gdp_curr_yr: 16853087485,
      population: 6858160,
      pop_male: "50%",
      pop_female: "50%",
      urban_pop: "35%",
      rural_pop: "65%",
      laborpop_educated: "75%",
      flag: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TSljz-YeQkWz4FZNnZGaRQHaEK%26pid%3DApi&f=1'
    },
    {
      name: "Myanmar",
      currency: "Kyat",
      location: [19.745, 96.129],
      capital: "Nay Pyi Taw",
      leader: "U Win Myint",
      gdp_curr_yr: 69320000000,
      population: 54324841,
      pop_male: "na",
      pop_female: "na",
      urban_pop: "37%",
      rural_pop: "63%",
      laborpop_educated: "na",
      flag: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XIuJZ4k9Fm0QTLDUCtrZaQHaFQ%26pid%3DApi&f=1'
    },
    {
      name: "Malaysia",
      currency: "Ringgit",
      location: [3.140853, 101.693207],
      capital: "Kuala Lumpur",
      leader: "His Majesty Seri Paduka Baginda Yang di-Pertuan Agong XV Sultan Muhammad V",
      gdp_curr_yr: 315000000000,
      population: 31624264,
      pop_male: "52%",
      pop_female: "48%",
      urban_pop: "25%",
      rural_pop: "75%",
      laborpop_educated: "69%",
      flag: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BmUmUuFvlgxZfKik1mhghQHaEK%26pid%3DApi&f=1'
    },
    {
      name: "Philippines",
      currency: "Peso",
      location: [14.599512, 120.984222],
      capital: "Manila",
      leader: "President Rodrigo Roa Duterte",
      gdp_curr_yr: 314000000000,
      population: 104918090,
      pop_male: "50%",
      pop_female: "50%",
      urban_pop: "47%",
      rural_pop: "53%",
      laborpop_educated: "63%",
      flag: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._-olKkfY2vR6DMp6xrpaUwHaEo%26pid%3DApi&f=1'
    },
    {
      name: "Singapore",
      currency: "S$ (Singapore Dollar)",
      location: [1.290270, 103.851959],
      capital: "Singapore",
      leader: "President Halimah Yacob",
      gdp_curr_yr: 324000000000,
      population: 5612253,
      pop_male: "49%",
      pop_female: "51%",
      urban_pop: "100%",
      rural_pop: "0",
      laborpop_educated: "100%",
      flag: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cciiwjnDvl687Q7mnhnGcgHaEo%26pid%3DApi&f=1'
    },
    {
      name: "Thailand",
      currency: "Baht",
      location: [13.736717, 100.523186],
      capital: "Bangkok",
      leader: "His Majesty King Maha Vajiralongkorn Bodindradebayavarangkun",
      gdp_curr_yr: 455000000000,
      population: 69037513,
      pop_male: "49%",
      pop_female: "51%",
      urban_pop: "49%",
      rural_pop: "51%",
      laborpop_educated: "84%",
      flag: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EYT0vGeX8kvtrg6igLUyKwHaE7%26pid%3DApi&f=1'
    },
    {
      name: "Vietnam",
      capital: "Ha Noi",
      currency: "Dong",
      location: [21.028511, 105.804817],
      leader: "Nguyen Phu Trong",
      gdp_curr_yr: 224000000000,
      population: 95540800,
      pop_male: "49%",
      pop_female: "51%",
      urban_pop: "35%",
      rural_pop: "65%",
      laborpop_educated: "87%",
      flag: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcensorshipinamerica.files.wordpress.com%2F2013%2F02%2Fvietnam-flag.jpg&f=1&nofb=1'
    }
];

var asean_geojson = [
  brunei,
  cambodia,
  indonesia,
  lao,
  myanmar,
  malaysia,
  philippines,
  singapore,
  thailand,
  vietnam
];



// Create initial map object
// var myMap = L.map('mapid').setView([4.94029, 114.94806], 4);
// coodinates of South China Sea
var myMap = L.map('mapid').setView([8.488092, 114.404754], 4);

// add a tile layer
var dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 3.5,
    maxZoom: 15,
    id: 'mapbox/dark-v10',
    // id: "mapbox.streets",
    // id: 'mapbox/light-v10',
    tileSize: 500,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap);

// Create a marker and pass in some initial options and add it to the map using addTo

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
  // let marker = L.marker(aseanCapitalsCoordinates[i], {icon: myIcon}).addTo(myMap);


  let marker = L.marker(aseanCapitalsCoordinates[i], {icon: myIcon}).bindPopup(
    "<h4>" + countries[i].name +"</h4>"+"<hr>"
    +"<h6>Capital: " + (countries[i].capital)+"</h6>"
    +"<h6>Head of State: " + (countries[i].leader) +"</h6>"
    +"<h6>GDP (Current US$B): " + (countries[i].gdp_curr_yr/1000000000)+"</h6>"
    +"<h6>Population (MM): " + (countries[i].population/1000000)+"</h6>"
    ).addTo(myMap);
};




for (let i = 0; i < countries.length; i++) {

L.geoJSON(asean_geojson[i], {
  style: function (features) {
    return {color: features.properties.color}
  }}).bindPopup(
    "<h4>" + countries[i].name +"</h4>"+"<hr>"
    +"<h6>Capital: " + (countries[i].capital)+"</h6>"
    +"<h6>Head of State: " + (countries[i].leader) +"</h6>"
    +"<h6>GDP (Current US$B): " + (countries[i].gdp_curr_yr/1000000000)+"</h6>"
    +"<h6>Population (MM): " + (countries[i].population/1000000)+"</h6>"
    ).addTo(myMap);

    // L.geoJSON(asean_geojson[i], {
    //   style: function (features) {
    //     return {color: features.properties.color}
    //   }}).bindPopup(
    //     `<h5> ${countries[i].name} ${countries[i].name}</h5> `
    //     "<h4>" + countries[i].name +"</h4>"+"<hr>"
    //     +"<h6>Capital: " + (countries[i].capital)+"</h6>"
    //     +"<h6>Head of State: " + (countries[i].leader) +"</h6>"
    //     +"<h6>GDP (Current US$B): " + (countries[i].gdp_curr_yr/1000000000)+"</h6>"
    //     +"<h6>Population (MM): " + (countries[i].population/1000000)+"</h6>"
    //     ).addTo(myMap);
    // };
};
