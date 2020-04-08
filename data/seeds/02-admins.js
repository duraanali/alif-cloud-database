
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        { id: 1, name: "admin", email: "admin@email.com", password: "$2a$08$Q.NODULbt14MKc3mga7SheWHPe3Q3h5qDj8KpupSKwScp1rap5xDa" }, // password: 123456789
        { id: 2, name: "admin", email: "admin@mail.com", password: "$2a$08$1tyZnSQ9c7u6XKdth1CgUug15V2X49wRJcW8MpjO1Jn1hhkncA.4W" } // password: password
      ]);
    });
};
