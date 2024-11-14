function f1() {
  console.log("f1 is called");
  return 1;
}

function f2(f1result) {
  console.log("f2 is called");
  var res = f1result + 1;
  return res;
}

function f3(f2result) {
  console.log("f3 is called");
  var res = f2result + 1;
  console.log(res);
}

f3(f2(f1()));

f1;
