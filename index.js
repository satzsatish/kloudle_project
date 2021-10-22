const TESTS = require('./tests');

/**
 * Returns an array that does not have any duplicates
 * and is sorted in the order of decreasing amount of duplicates.
 * If two numbers have the same amount of duplicates,
 * the number that appeared earlier in `source` array
 * is to be kept before.
 *
 * @param {Array<Number>} source
 *
 * @returns {Array<Number>}
 */
var arr = [2, 9, 9, 1, 7, 1, 6, 9, 2, 7, 3];
var duplicate = [];
var no_arr = [];
var ina = [];
var i,j,d = 'N';
var cur_orc = 0,
prev_orc = 0;
function compute(source) {
  console.log(source);
}
compute(arr);
function runTests() {
  TESTS.forEach((test, index) => {
    const passed =
      JSON.stringify(compute(test.source)) === JSON.stringify(test.answer);

    console.log(`Test #${index + 1}:`, passed ? 'passed' : 'failed');
  });
}

// runTests();
