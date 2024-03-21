const results = [];
const check = (a, b) => results.push(a === b ? "PASS" : "HAZARD");

import { ref as aRefESM } from "a";
import { ref as bRefESM } from "b";
import { ref as cRefESM } from "c";

check(aRefESM, bRefESM);
check(aRefESM, cRefESM);

console.log(results);
