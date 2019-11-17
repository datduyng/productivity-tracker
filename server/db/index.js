var DataBase = require('./DataBase');

let db = new DataBase(sync_force=true);
db.connect();
let models = db.models;

module.exports = {
  db, models,
}