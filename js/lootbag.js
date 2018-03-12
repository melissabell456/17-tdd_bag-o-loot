const { createTable } = require('./create-table.js');
const  { argv: [,, ...arg] } = process;
const { listToys } = require('./list-all-toys.js');
const { addToy } = require('./add-toy.js');
const { removeToy } = require('./remove-toy.js');
const { listKidsToys } = require('./list-toys');

if (arg[0] === "add") {
  console.log(`{{toy: ${arg[1]}, name: ${arg[2]}}`)
  addToy( {toy: arg[1], name: arg[2]} )
  .then( (data) => {
    console.log(`${arg[1]} was added for ${arg[2]}`);
  });
}
else if (arg[0] === "ls" && arg.length === 2) {
  console.log('one child', arg[0], arg[1]);
  listKidsToys(arg[1])
  .then( (data) => {
    let childsList = [];
    data.forEach( (toy) => {
      childsList.push(toy.toy);
    })
    console.log(`${arg[1]}'s Christmas list: ${childsList}`);
  })
}
else if (arg[0] === "remove") {
  console.log(`{{toy: ${arg[2]}, name: ${arg[1]}}`)
  removeToy( {toy: arg[2], name: arg[1]} )
  .then( (data) => {
    console.log(`${arg[2]} was removed for ${arg[1]}`);
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