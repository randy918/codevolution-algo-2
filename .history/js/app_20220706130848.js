//!  70622.1102         VARIABLES

//!  70622.1102         FUNCTIONS

const summation = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

window.onload = function () {
  init();
};

const init = function () {
  main();
};

const main = function () {
  summation(10);
  c(summation(10));
};
