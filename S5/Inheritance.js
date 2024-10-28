class A {
  #pin = 2345; //private Properties
  name = "sagar";
  gender = "male";

  display() {
    console.log(this.#pin);
  }

  get pinValue() {
    return this.#pin;
  }

  set newPinValue(newpin) {
    this.#pin = newpin;
  }
}

class B extends A {
  city = "Mumbai";
}

var b = new B();

console.log(b.city, b.name, b.pin);
b.display();
console.log(b.pinValue);
b.newPinValue = "9876";
console.log(b.pinValue);
