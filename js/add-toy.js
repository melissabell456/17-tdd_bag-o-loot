"use strict";

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.sqlite', (err) => {
  if (err) return console.log("unsuccessful", err);
  console.log('connection successful');
});


module.exports.addToy = ({ toy, name }) => {
  console.log("I am in addToy", toy, name);
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO toys VALUES (null, "${name}", "${toy}", 0, 0)`, function (err) {
      if (err) return reject(err);
      resolve( { id : this.lastID } );
    });
  });
};