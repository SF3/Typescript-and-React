import { sum, pi } from "./lib/math.js"
console.log("2π = " + sum(pi, pi));

import * as math from "./lib/math.js";
console.log("2π = " + math.sum(math.pi, math.pi));

import sumAsDefault from "./lib/math.js";
console.log("3 + 7 = " + sumAsDefault(3, 7));



