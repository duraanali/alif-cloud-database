
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        { id: 2, name: "admin", email: "admin@mail.com", password: "$2a$08$1tyZnSQ9c7u6XKdth1CgUug15V2X49wRJcW8MpjO1Jn1hhkncA.4W" } // password: password
      ]);
    });
};
