
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([{
        "id": 1,
        "name": "Guthrey Crawley",
        "address": "02160 Maryland Junction",
        "spouse_name": "Chlo Wooff",
        "spouse_phone": "530-788-5495"
      }, {
        "id": 2,
        "name": "Hamish Molloy",
        "address": "76713 Huxley Alley",
        "spouse_name": "Bonnee Ogger",
        "spouse_phone": "355-311-0607"
      }, {
        "id": 3,
        "name": "Laraine Giovani",
        "address": "3 Continental Road",
        "spouse_name": "Tersina Ugoni",
        "spouse_phone": "305-594-8505"
      }, {
        "id": 4,
        "name": "Nolly Butter",
        "address": "22736 Park Meadow Drive",
        "spouse_name": "Alaster Honsch",
        "spouse_phone": "535-573-5734"
      }, {
        "id": 5,
        "name": "Vickie Cargill",
        "address": "8 Meadow Vale Terrace",
        "spouse_name": "Karlotta Dincke",
        "spouse_phone": "635-511-2201"
      }, {
        "id": 6,
        "name": "Bevon Bushe",
        "address": "98962 Everett Road",
        "spouse_name": "Jeramie Godsmark",
        "spouse_phone": "535-865-2617"
      }, {
        "id": 7,
        "name": "Allard Hanby",
        "address": "88 Kennedy Avenue",
        "spouse_name": "Walsh Lascell",
        "spouse_phone": "547-851-7961"
      }, {
        "id": 8,
        "name": "Adrian Lubeck",
        "address": "5230 Oxford Junction",
        "spouse_name": "Felipa Pridie",
        "spouse_phone": "753-622-0760"
      }, {
        "id": 9,
        "name": "Culley Broxup",
        "address": "9235 Bluestem Pass",
        "spouse_name": "Ollie Millar",
        "spouse_phone": "162-494-4050"
      }, {
        "id": 10,
        "name": "John Evesque",
        "address": "9395 Pond Plaza",
        "spouse_name": "Goldi Sempill",
        "spouse_phone": "501-474-2956"
      }, {
        "id": 11,
        "name": "Meghan Minter",
        "address": "9 Banding Terrace",
        "spouse_name": "Ruperta Earsman",
        "spouse_phone": "281-585-3954"
      }, {
        "id": 12,
        "name": "Katharine Gillivrie",
        "address": "44781 Alpine Circle",
        "spouse_name": "Alida Ings",
        "spouse_phone": "457-487-4421"
      }, {
        "id": 13,
        "name": "Rosanna Fawke",
        "address": "078 Cody Plaza",
        "spouse_name": "Katuscha Camois",
        "spouse_phone": "269-642-9259"
      }, {
        "id": 14,
        "name": "Otha Maseyk",
        "address": "58 Larry Circle",
        "spouse_name": "Annadiana Crust",
        "spouse_phone": "972-797-0767"
      }, {
        "id": 15,
        "name": "Matilda Suddick",
        "address": "23164 Lakeland Parkway",
        "spouse_name": "Danyelle Brittian",
        "spouse_phone": "675-298-5821"
      }, {
        "id": 16,
        "name": "Desmund Collings",
        "address": "3107 Hagan Drive",
        "spouse_name": "Katlin Drohan",
        "spouse_phone": "322-780-8300"
      }, {
        "id": 17,
        "name": "Charline Rough",
        "address": "70374 Everett Place",
        "spouse_name": "Cos Dericut",
        "spouse_phone": "594-250-4282"
      }, {
        "id": 18,
        "name": "Jo ann Gobolos",
        "address": "4228 Blaine Hill",
        "spouse_name": "Brewster Jemmison",
        "spouse_phone": "971-391-2442"
      }, {
        "id": 19,
        "name": "Shantee Arlt",
        "address": "20390 Kennedy Alley",
        "spouse_name": "Minnaminnie Finkle",
        "spouse_phone": "538-737-5217"
      }, {
        "id": 20,
        "name": "Faustine Juanico",
        "address": "59270 2nd Parkway",
        "spouse_name": "Vivyanne Matusov",
        "spouse_phone": "888-594-5763"
      }]);
    });
};

