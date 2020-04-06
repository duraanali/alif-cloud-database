const db = require('../data/dbConfig.js');


module.exports = {
    add,
    find,
    findById,
    findBy,
    findById,
};


function find() {
    return db('teachers').select('id', 'name', 'phone', 'email', 'password');
}

function findById(id) {
    return db("teachers")
      .where({ 'id': id })
      .first();
  }


function findBy(filter) {
    return db('teachers').where(filter);
}

function add(teacher) {
    return db('teachers')
        .insert(teacher, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function updateTeacher(id, changes) {
    return db('teachers')
        .where({ id })
        .update(changes);
}


function findById(id) {
    return db('teachers')
        .where({ id })
        .first();
}
