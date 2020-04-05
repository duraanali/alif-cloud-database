const db = require('../data/dbConfig');

module.exports = {
    getParents,
    getParentById,
    postParent,
    updateParent,
    removeParent
}

function getParents() {
    return db('parents').select('id', 'name', 'phone', 'address', 'spouse_name', 'spouse_phone')
}

function getParentById(id) {
    return db("parents")
      .where({ 'id': id })
      .first();
  }

function postParent(parent) {
    return db('parents').insert(parent);
}
function updateParent(id, changes) {
    return db('parents')
        .where({ id })
        .update(changes);
}
function removeParent(id) {
    return db('parents')
        .where('id', id)
        .del();
}