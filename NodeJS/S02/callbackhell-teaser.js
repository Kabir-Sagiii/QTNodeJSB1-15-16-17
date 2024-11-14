function f1(f2Callback) {
  console.log("f1 is called");
  f2Callback(f3); // f2
}

function f2(f3callback) {
  console.log("f2 is called");
  f3callback();
}

function f3() {
  console.log("f3 is called");
}

f1(f2);
