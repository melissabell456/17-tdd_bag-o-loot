const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../bag.sqlite');
const { toys } = require('../data/toys');

module.exports.createTable = () => {
  console.log("in here");
  return new Promise( (resolve, reject) => {
    db.run('DROP TABLE IF EXISTS toys')
    .run(
      'CREATE TABLE IF NOT EXISTS toys (toy_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, toy TEXT, delivered INTEGER, naughty INTEGER)', (err) => {
        if (err) return reject(err);
        resolve(insertRows());
      });
  });
};

const insertRows = () => {
  return Promise.all(toys.map( ({ name, toy, delivered, naughty }) => {
    return new Promise( (resolve, reject) => {
      db.run(`INSERT INTO toys VALUES (null, "${name}", "${toy}", "${delivered}", "${naughty}")`, function(err){
        if (err) return reject(err);
        resolve(this.lastID)
      });
    });
  }));
};