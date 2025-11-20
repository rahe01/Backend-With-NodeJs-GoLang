// common to esm

// const {a} = require('./file2');
import {a} from "./file_es2.mjs"
import {a as x} from "./file_es3.mjs"


import utils from "./utils_esm/index.mjs"





console.log(utils.add(a,x))












