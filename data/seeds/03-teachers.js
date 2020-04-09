
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {
          id: 1,
          name: "Charlotta McGaraghan",
          email: "cmcgaraghan0@dyndns.org",
          password: "GiWAsEw"
        }, {
          id: 2,
          name: "Borg Morcombe",
          email: "bmorcombe1@blogs.com",
          password: "NELkwy8mdmLZ"
        }, {
          id: 3,
          name: "Xever Pougher",
          email: "xpougher2@networksolutions.com",
          password: "Md5sGZ1N"
        }, {
          id: 4,
          name: "Beth Niessen",
          email: "bniessen3@ibm.com",
          "password": "cTHxgDxF1iAK"
        }, {
          id: 5,
          name: "Larisa Brabham",
          email: "lbrabham4@vk.com",
          password: "oea0xnr"
        }
      ]);
    });
}; 