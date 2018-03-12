const { createTable } = require('./create-table.js');
const  { argv: [,, ...arg] } = process;
const { listToys } = require('./list-all-toys.js');
const { addToy } = require('./add-toy.js');

createTable();

console.log(arg);
if (arg[0] === "add") {
  console.log(`{{toy: ${arg[1]}, name: ${arg[2]}}`)
  addToy( {toy: arg[1], name: arg[2]} )
  .then( (data) => {
    console.log(`${arg[1]} was added for ${arg[2]}`);
  });
}
else if (arg[0] === "ls") {
  // console.log('list', listToys());
  listToys()
  .then( (allToys) => {
    console.log('in lootbag.js', allToys);
    allToys.forEach( (toy) => {
      console.log(`${toy.name} wants a ${toy.toy} for Christmas`);
      // (`!${toy.delivered}`) ? console.log(`${toy.toy} has been delivered`) : console.log(`${toy.toy} has not been delivered`);
    })
  });
}