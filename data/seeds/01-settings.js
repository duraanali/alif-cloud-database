
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('settings').del()
    .then(function () {
      // Inserts seed entries
      return knex('settings').insert([
        { id: 1, school_name: "Alif Cloud", address: "1220 E St Cloud" }
      ]);
    });
};
