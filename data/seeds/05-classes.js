
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {id: 1, name: "Class 101", subject: "English", created: "09/27/2019", teacher_id: 1}
      ]);
    });
};