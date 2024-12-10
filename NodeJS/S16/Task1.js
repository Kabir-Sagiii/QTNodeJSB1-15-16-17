var x = 10;

function f1() {
  setTimeout(() => {
    console.log("hello f1");
  }, 0);

  console.log(x);
}

console.log("Something");

f1();
