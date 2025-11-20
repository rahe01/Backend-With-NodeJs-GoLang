const {a} = require('./file2');
const {a:x} = require('./file3')

// const {add} = require('./utils/add');
// const {sub} = require('./utils/sub');


const {add,sub} = require('./utils')


console.log(add(x,a));
console.log(sub(x,a));