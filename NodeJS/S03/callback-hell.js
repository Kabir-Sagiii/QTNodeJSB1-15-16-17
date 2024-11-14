function f1() {
  return 10;
}

function f2(resultOfF1) {
  var resultOfF2 = resultOfF1 + 100;

  return resultOfF2;
}

function f3(resultOfF2) {
  var finalResult = resultOfF2 + 1000;
  console.log(finalResult);
}

// f3(f2(f1()));

// var f1data = f1();
// var f2data = f2(f1data);
// f3(f2data);

f1(() => {});
