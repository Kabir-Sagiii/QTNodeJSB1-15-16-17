var x = 100;
function f1() {
  setImmediate(() => {
    console.log("f3 is called");
  });

  Promise.resolve("f1 is called")
    .then((res) => {
      console.log(res);
    })
    .catch(() => {});

  process.nextTick(() => {
    console.log("f2 is called");
  });
}
f1();
console.log(x);
