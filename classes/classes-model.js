const db = require('../data/dbConfig');

module.exports = {
    getz,
    getClass,
    postClass,
    updateClass,
    removeClass
}

function getz() {
    return db('z').select('id', 'name', 'subject', 'created', 'teacher_id')
}
function getClass(id) {
    return db('z')
        .where('id', id)
        .select('id', 'name', 'subject', 'created', 'teacher_id');
}


function postClass(Class) {
    return db('z').insert(Class);
}


function updateClass(id, changes) {
    return db('z')
        .where({ id })
        .update(changes);
}
function removeClass(id) {
    return db('z')
        .where('id', id)
        .del();
}