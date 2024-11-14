function f1(f2) {
  console.log("f1 is called");
  f2(f3);
}

function f2(f3) {
  console.log("f2 is called");
  f3();
}

function f3() {
  console.log("f3 is called");
}

f1(f2);
