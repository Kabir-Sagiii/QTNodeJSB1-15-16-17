function f1() {
  var promise = new Promise((resolve, reject) => {
    resolve(10);
  });

  return promise;
}

function f2(resultOfF1) {
  var resultOfF2 = resultOfF1 + 100;

  var promise = new Promise(function (resolve, reject) {
    resolve(resultOfF2);
  });

  return promise;
}

function f3(resultOfF2) {
  var finalResult = resultOfF2 + 1000;
  console.log(finalResult);
}

async function handlePromise() {
  var f1data = await f1();
  var f2data = await f2(f1data);
  f3(f2data);
}

handlePromise();
