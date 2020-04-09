
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('parents').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([{
        id: 1,
        name: "Valerie Carnalan",
        phone: 8369678245,
        address: "46744 Morningstar Lane",
        spouse_name: "Cyril Stothart",
        spouse_phone: 4625293920
      }]);
    });
};

