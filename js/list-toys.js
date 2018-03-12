const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.sqlite', (err) => {
  if (err) return console.log("unsuccessful", err);
  console.log('connection successful');
});

module.exports.listKidsToys = (name) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM toys WHERE name="${name}"`, function(err, data) {
      if (err) return reject (err);
      resolve(data);
    })
  })
};