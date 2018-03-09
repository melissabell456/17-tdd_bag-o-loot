const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.sqlite', (err) => {
  if (err) return console.log("unsuccessful", err);
  console.log('connection successful');
});

module.exports.listToys = () => {
  return new Promise( (resolve, reject) => {
    db.all('SELECT * FROM toys', function(err, data) {
      if (err) return reject (err);
      resolve(data);
    });
  });
};