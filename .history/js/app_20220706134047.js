//!  70622.1102         VARIABLES

//!  70622.1102         FUNCTIONS

const fibonacci = function (n) {

    let sum = [0, 1];
    for (let i = 2; i <= n; i++) {
        sum.push(sum[i - 2] + sum[i - 1]);
    };
    return sum;


};

const main = function () {
  c(fibonacci());
};

const init = function () {
  main();
};

window.onload = function () {
  init();
};
