//!  70622.1102         VARIABLES

//!  70622.1102         FUNCTIONS

const fibonacci = function (n) {

    let sum = [0, 1];
    for (let i = 0; i < n; i++) {
        sum.push(sum[i] + sum[i + 1]);
    }


};

const main = function () {
  fibonacci();
};

const init = function () {
  main();
};

window.onload = function () {
  init();
};
