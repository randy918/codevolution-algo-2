//!  70622.1102         VARIABLES

//!  70622.1102         FUNCTIONS

const fibonacci = function (n) {
  let sum = [0, 1];
  for (let i = 2; i < n; i++) {
    sum.push(sum[i - 2] + sum[i - 1]);
  }
  return sum;
};

const factorial = function (n) {
  let total = 1;
  for (let i = 2; i <= n; i++) {
    total = total * i;
  }
  return total;
};

const prime = function (n) {
  let isPrime = 1;
  for (let i = 2; i <= n; i++) {
    if 

  return isPrime;
};
};

const main = function () {
    c(prime(6));
};

const init = function () {
  main();
};

window.onload = function () {
  init();
};
