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
  let primeFlag = 1;

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      primeFlag = 0;
    }
    let isPrime = primeFlag === 1 ? "is prime" : "is not prime";
  };
  return isPrime;
};

const main = function () {
    c(prim(5));
};

const init = function () {
  main();
};

window.onload = function () {
  init();
};
