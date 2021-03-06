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