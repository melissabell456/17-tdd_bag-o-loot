const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.sqlite', (err) => {
  if (err) return console.log("unsuccessful", err);
  console.log('connection successful in list all toys');
});

module.exports.listToys = () => {
  console.log('in list toys');
  return new Promise( (resolve, reject) => {
    db.all('SELECT * FROM toys', function(err, data) {
      if (err) return reject (err);
      console.log(data);
      resolve(data);
    });
  });
};