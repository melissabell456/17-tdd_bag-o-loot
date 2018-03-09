const { createTable } = require('./create-table.js');
const  { argv: [,, arg] } = process;
const { listToys } = require('./list-all-toys.js');

// createTable();
console.log("3", arg);

if (arg === "ls") {
  // console.log('list', listToys());
  listToys()
  .then( (allToys) => {
    allToys.forEach( (toy) => {
      console.log(`${toy.name} wants a ${toy.toy} for Christmas`);
      // (`!${toy.delivered}`) ? console.log(`${toy.toy} has been delivered`) : console.log(`${toy.toy} has not been delivered`);
    })
  });
};