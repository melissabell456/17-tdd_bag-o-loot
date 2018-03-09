const { createTable } = require('./create-table.js');
const  { argv: [,, arg1, arg2, arg3] } = process;

createTable();
console.log("1", arg1);
console.log("2", arg2);
console.log("3", arg3);