
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
        id: 1,
        name: "Nan Simonetti",
        dob: "07/07/2003",
        class_id: 3,
        parent_id: 3
      }, {
        id: 2,
        name: "Beatrice Cutress",
        dob: "11/16/2000",
        class_id: 1,
        parent_id: 8
      }, {
        id: 3,
        name: "Sebastian Pohls",
        dob: "01/13/2009",
        class_id: 3,
        parent_id: 6
      }, {
        id: 4,
        name: "Cornelius Hilhouse",
        dob: "06/29/2008",
        class_id: 2,
        parent_id: 4
      }, {
        id: 5,
        name: "Terrie Hryniewicz",
        dob: "01/06/2007",
        class_id: 2,
        parent_id: 9
      }, {
        id: 6,
        name: "Latisha Bishop",
        dob: "06/09/2004",
        class_id: 4,
        parent_id: 5
      }, {
        id: 7,
        name: "Faustine Ney",
        dob: "10/28/1997",
        class_id: 2,
        parent_id: 1
      }, {
        id: 8,
        name: "Cassandre Linnard",
        dob: "08/25/2002",
        class_id: 4,
        parent_id: 8
      }
       
      ]);
    });
};
