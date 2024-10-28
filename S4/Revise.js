class Product {
  pname = "Iphone 16 Pro Max";
  price = 140000;
  rating = 4.7;
  qty = 10;

  constructor() {}

  display() {
    console.log(this.pname, this.price, this.rating, this.qty);
  }

  totalAmount() {
    return this.price * this.qty;
  }
}

var obj1 = new Product();
var obj2 = new Product();

obj1.pname = "Samsung Galaxy";
obj2.price = 180000;

console.log(obj1.pname, obj1.price);
console.log(obj2.pname, obj2.price);
