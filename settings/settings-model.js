const db = require('../data/dbConfig');

module.exports = {
    getSettings,
    getSettingsById,
    postSettings,
    updateSettings,
    removeSettings
}

function getSettings() {
    return db('settings').select('id', 'school_name', 'address')
}

function getSettingsById(id) {
    return db("settings")
      .where({ 'id': id })
      .first();
  }


function postSettings(settings) {
    return db('settings').insert(settings);
}
function updateSettings(id, changes) {
    return db('settings')
        .where({ id })
        .update(changes);
}
function removeSettings(id) {
    return db('settings')
        .where('id', id)
        .del();
}