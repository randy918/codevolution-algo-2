//!  70622.1102         VARIABLES

//!  70622.1102         FUNCTIONS

const summation = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};



const init = function () {
  main();
};

window.onload = function () {
  init();
};