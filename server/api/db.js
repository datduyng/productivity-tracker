var fs = require('fs');
const DB_PATH = '.database.sqlite.db';
var exists = fs.existsSync(DB_PATH);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(DB_PATH);


db.allAsync = function (query, param) {
    var that = this;
    return new Promise(function (resolve, reject) {
        that.all(query, param, function (err, row) {
            if (err){
              printDetailError({}, err);
              reject(err);
            }
            else
                resolve(row);
        });
    });
};

db.runAsync = function (query, param) {
  var that = this;  
  return new Promise(function (resolve, reject) {
      that.run(query, param, function (err) {
          if (err){
            printDetailError({}, err);
            reject(err.message);
          }
          else{
            resolve(this);
          }
            
      });
  });
};

module.exports = db;