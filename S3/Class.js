class A {
  name = "xyz";
  price = 0;
  rating = 4.5;

  changeRating(newRating) {
    this.rating = newRating;
    this.display();
  }

  display() {
    console.log(this.name, this.price, this.rating);
  }
}

var obj1 = new A();
var obj2 = new A();
var obj3 = new A();
var obj4 = new A();

console.log(obj1.name);

obj1.display();
