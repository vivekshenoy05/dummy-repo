//Modules
//we can even destructure it like
// const {vivek,rahul} = require("./4-names")
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");
//destructuring
const { vivek, rahul } = names;
sayHi(vivek);
sayHi(rahul);

sayHi(names.vivek);
sayHi(names.rahul);
console.log(names);

console.log(data);
