const countries = [
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
      laborpop_educated: "82%"
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
      laborpop_educated: "79%"
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
      laborpop_educated: "85%"
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
      laborpop_educated: "75%"
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
      laborpop_educated: "69%"
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
      laborpop_educated: "na"
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
      laborpop_educated: "63%"
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
      laborpop_educated: "100%"
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
      laborpop_educated: "84%"
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
      laborpop_educated: "87%"
    }
];


var mymap = L.map('mapid').setView([4.94029, 114.94806], 4);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12,
    id: 'mapbox/dark-v10',
    // id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(mymap);


const countryBorderColors = [
    '#FFEB4A',
    '#E866CB',
    '#7DFFE7',
    '#EBC769',
    '#B729FF'
];

const asean_geojson = [
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

for (let i = 0; i < countries.length; i++) {
  //test for color - working original above
  L.geoJSON(asean_geojson[i], {style: function (feature) {return {color: feature.properties.color}}}).bindPopup("<h2>" + countries[i].name +"</h2>"+"<hr>"+"<h5>Capital: " + (countries[i].capital) +"<h5>Head of State: " + (countries[i].leader) + "</h5>" +"<h5>GDP (Current US$B): " + (countries[i].gdp_curr_yr/1000000000) + "</h5>" + "</h5>"+"<h4>Population (MM): " + (countries[i].population/1000000) + "</h5>"+"<h5>Labor Population Educated: " + (countries[i].laborpop_educated) + "</h5>").addTo(myMap);
};