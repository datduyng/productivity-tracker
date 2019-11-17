var Sequelize = require('sequelize');

var User = require('./User');
var Note = require('./Note');

module.exports = {
  user : User,
  note : Note,
}