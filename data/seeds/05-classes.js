
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {id: 1, name: "Class 101", subject: "English", created: "09/27/2019", teacher_id: 1},
        {id: 2, name: "Class 120", subject: "Math", created: "04/11/2018", teacher_id: 3},
        {id: 3, name: "Class 301", subject: "History", created: "06/20/2015", teacher_id: 5},
        {id: 4, name: "Class 501", subject: "Science", created: "02/01/2012", teacher_id: 2}
      ]);
    });
};