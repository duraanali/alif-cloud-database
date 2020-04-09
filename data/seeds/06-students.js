
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          id: 1,
          name: "uthmaan ali",
          dob: "2015-08-22",
          class_id: 1,
          parent_id: 1
      }
       
      ]);
    });
};
