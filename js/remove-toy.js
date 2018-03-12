const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.sqlite', (err) => {
  if (err) return console.log("unsuccessful", err);
  console.log('connection successful');
});

module.exports.removeToy = ({ toy, name }) => {
  console.log(toy, name);
  return new Promise( (resolve, reject) => {
    db.run(`DELETE FROM toys WHERE name = "${name}" AND toy = "${toy}"`, function(err, row){
      if (err) return reject(err);
      resolve(true);
    });
  })
};

// WHERE favorite_website = 'techonthenet.com'
// AND customer_id > 6000;
// function({ customer_id, firstName, lastName, city, street, state, zip, phone }){
//   return new Promise( (resolve, reject) => {
//     db.run(`DELETE FROM customers WHERE customer_id = ${customer_id}`, function(err, row){
//       if (err) return reject(err);
//       console.log("resolves from delete", row);
//       // resolve({ id: this.customer_id });
//       resolve(true);
//     });
//   })
// };