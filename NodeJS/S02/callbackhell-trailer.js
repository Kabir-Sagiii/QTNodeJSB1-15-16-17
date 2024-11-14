function x1() {
  console.log("x1 is called");
}

function x2(x1callback) {
  console.log("x2 is called");
  x1callback(); //x1 is called
}

function x3(x2callback) {
  console.log("x3 is called");
  x2callback(x1); // x2 is called
}

function x4(x3callback) {
  console.log("x4 is called");
  x3callback(x2); //x3 is called
}

function x5(x4callback) {
  console.log("x5 is called");
  x4callback(x3); //x4 is called
}

x5(x4);
