const results = [];
const check = (a, b) => results.push(a === b ? "PASS" : "HAZARD");

const { ref: aRefESM } = require("a");
try {
  const { ref: bRefESM } = require("b");
  check(aRefESM, bRefESM);
} catch (e) {
  results.push(e.code); // 'b' cannot be require()d
}
const { ref: cRefESM } = require("c");
check(aRefESM, cRefESM);

console.log(results);
