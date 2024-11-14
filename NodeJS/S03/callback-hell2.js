function f1(callback) {
  var x = 10;
  callback(x);
}

function f2(resultOfF1, callback) {
  var resultOfF2 = resultOfF1 + 100;

  callback(resultOfF2);
}

function f3(resultOfF2) {
  var finalResult = resultOfF2 + 1000;
  console.log(finalResult);
}

f1((f1data) => {
  f2(f1data, (f2data) => {
    f3(f2data);
  });
});
