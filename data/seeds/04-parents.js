
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([{
        id: 1,
        name: "Valerie Carnalan",
        phone: 8369678245,
        address: "46744 Morningstar Lane",
        spouse_name: "Cyril Stothart",
        spouse_phone: 4625293920
      },{
        id: 2,
        name: "Calida Dunkerly",
        phone: 4029666355,
        address: "72 Havey Alley",
        spouse_name: "Alexei Kubalek",
        spouse_phone: 8229455169
      }, {
        id: 3,
        name: "Mischa Attard",
        phone: 1221483983,
        address: "23594 Saint Paul Point",
        spouse_name: "Matty Hansbury",
        spouse_phone: 4317784842
      }, {
        id: 4,
        name: "Daisey Martynka",
        phone: 2421064336,
        address: "9444 Marquette Terrace",
        spouse_name: "Royal Rosina",
        spouse_phone: 9107453515
      }, {
        id: 5,
        name: "Murry Bamfield",
        phone: 2073123037,
        address: "319 Gale Pass",
        spouse_name: "Kizzie McGerraghty",
        spouse_phone: 4641772934
      }, {
        id: 6,
        name: "Arney Manolov",
        phone: 4817524051,
        address: "768 Jenifer Center",
        spouse_name: "Kane Cobb",
        spouse_phone: 2701195051
      }, {
        id: 7,
        name: "Harmon Scarborough",
        phone: 9616660734,
        address: "98549 Hauk Court",
        spouse_name: "Leonore Urridge",
        spouse_phone: 6866947711
      }, {
        id: 8,
        name: "Baldwin Loftie",
        phone: 9143810234,
        address: "695 Porter Crossing",
        spouse_name: "Willi Vankov",
        spouse_phone: 1005353223
      }, {
        id: 9,
        name: "Adda Purchall",
        phone: 7685804020,
        address: "3277 Jay Road",
        spouse_name: "Shaina Strugnell",
        spouse_phone: 7276222610
      }]);
    });
};

