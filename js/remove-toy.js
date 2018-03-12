const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.sqlite', (err) => {
  if (err) return console.log("unsuccessful", err);
  console.log('connection successful');
});

module.exports.removeToy = ({ toy, name }) => {
  return new Promise( (resolve, reject) => {
    db.run(`DELETE FROM toys WHERE name = "${name}" AND toy = "${toy}"`, function(err, row){
      if (err) return reject(err);
      resolve(true);
    });
  })
};