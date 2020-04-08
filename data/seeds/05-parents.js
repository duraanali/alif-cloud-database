
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([{
        "id": 1,
        "name": "Kevon Beseke",
        "address": "13858 Towne Junction",
        "spouse": "Danie Copnell",
        "spouse_phone": "282-206-3541"
      }, {
        "id": 2,
        "name": "Ivie Grollmann",
        "address": "1233 Graceland Junction",
        "spouse": "Kathryne Cote",
        "spouse_phone": "558-531-4745"
      }, {
        "id": 3,
        "name": "Jasmina Bignal",
        "address": "90 Eagle Crest Pass",
        "spouse": "Doloritas MacIlory",
        "spouse_phone": "780-418-2993"
      }, {
        "id": 4,
        "name": "Jayson Tease",
        "address": "5912 Merrick Street",
        "spouse": "Liuka Johnsey",
        "spouse_phone": "958-145-4478"
      }, {
        "id": 5,
        "name": "Gordan Hedau",
        "address": "8 Orin Hill",
        "spouse": "Jerrold O'Dunniom",
        "spouse_phone": "427-131-3238"
      }, {
        "id": 6,
        "name": "Ericka Licciardi",
        "address": "10 Gulseth Way",
        "spouse": "Ddene Malone",
        "spouse_phone": "564-931-4195"
      }, {
        "id": 7,
        "name": "Royce Filkin",
        "address": "5 Bellgrove Parkway",
        "spouse": "Rubia Quadling",
        "spouse_phone": "225-746-2825"
      }, {
        "id": 8,
        "name": "Joeann Midgley",
        "address": "50 Steensland Hill",
        "spouse": "Donna Amberson",
        "spouse_phone": "283-387-3496"
      }, {
        "id": 9,
        "name": "Baillie Paulitschke",
        "address": "46 Kinsman Junction",
        "spouse": "Kipp Batalini",
        "spouse_phone": "904-510-4087"
      }, {
        "id": 10,
        "name": "Ivan Cordes",
        "address": "84 Dixon Crossing",
        "spouse": "Anestassia Eliesco",
        "spouse_phone": "223-355-3888"
      }, {
        "id": 11,
        "name": "Erminia Paoletti",
        "address": "2 Lillian Junction",
        "spouse": "Ofella Ney",
        "spouse_phone": "988-811-2674"
      }, {
        "id": 12,
        "name": "Morissa Berntsson",
        "address": "96466 Atwood Trail",
        "spouse": "Debor Klasing",
        "spouse_phone": "854-369-7682"
      }, {
        "id": 13,
        "name": "Dahlia Trangmar",
        "address": "47 Sycamore Center",
        "spouse": "Ariana Rosenblatt",
        "spouse_phone": "606-236-0209"
      }, {
        "id": 14,
        "name": "Maure Meriel",
        "address": "674 Pierstorff Point",
        "spouse": "Ronni Kibbee",
        "spouse_phone": "270-447-2267"
      }, {
        "id": 15,
        "name": "Tam Ciobotaro",
        "address": "194 Killdeer Drive",
        "spouse": "Aggy Tape",
        "spouse_phone": "885-334-0402"
      }, {
        "id": 16,
        "name": "Keely Dudmarsh",
        "address": "17 Eliot Center",
        "spouse": "Randi Cabrer",
        "spouse_phone": "907-489-4928"
      }, {
        "id": 17,
        "name": "Harwilll McComish",
        "address": "3438 Sunbrook Road",
        "spouse": "Dare Masters",
        "spouse_phone": "773-221-8195"
      }, {
        "id": 18,
        "name": "Dina Laborda",
        "address": "151 Hanson Road",
        "spouse": "Danette Walford",
        "spouse_phone": "146-831-5408"
      }, {
        "id": 19,
        "name": "Murial Shelmardine",
        "address": "4 Oakridge Pass",
        "spouse": "Milly Shutt",
        "spouse_phone": "705-235-0376"
      }, {
        "id": 20,
        "name": "Heall Jewks",
        "address": "420 Alpine Center",
        "spouse": "Arri Maciejewski",
        "spouse_phone": "803-904-3124"
      }]);
    });
};

