const db = require('../data/dbConfig');

module.exports = {
    getStudents,
    getStudentById,
    postStudent,
    updateStudent,
    removeStudent
}

function getStudents() {
    return db('students').select('id', 'name', 'dob', 'class_id', 'parent_id')
}

function getStudentById(id) {
    return db("students")
      .where({ 'id': id })
      .first();
  }

function postStudent(student) {
    return db('students').insert(student);
}


function updateStudent(id, changes) {
    return db('students')
        .where({ id })
        .update(changes);
}
function removeStudent(id) {
    return db('students')
        .where('id', id)
        .del();
}