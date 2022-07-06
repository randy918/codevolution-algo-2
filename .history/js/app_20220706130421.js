//!  70622.1102         VARIABLES

//!  70622.1102         FUNCTIONS

window.onload = function () {
  main();
};

const init = function () {
};

const main = function () {
  init();
  summation(10);
  c();
};

const summation = function (n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
