const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.sqlite', (err) => {
  if (err) return console.log("unsuccessful", err);
  console.log('connection successful');
});

module.exports.markAsDelivered = (name) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE toys SET delivered=1 WHERE name="${name}"`, function(err, data) {
      if (err) return reject (err);
      console.log("what is returned", data);
      resolve(data);
    })
  })
}

module.exports.markAsNotDelivered = (name) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE toys SET delivered=0 WHERE name="${name}"`, function(err, data) {
      if (err) return reject (err);
      console.log("what is returned", data);
      resolve(data);
    })
  })
}

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;