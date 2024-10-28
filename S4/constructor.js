class Products {
  name;
  price;
  rating;

  constructor(name, price, rating) {
    this.name = name;
    this.price = price;
    this.rating = rating;
  }

  // constructor() {
  //   this.name = "Samsung Galaxy ultra pro";
  //   this.price = 12000;
  //   this.rating = 4.6;
  // }
}

var o1 = new Products("Iphone", 140000, 4.7); //

var o2 = new Products("Samsung", 180000, 4.9);

console.log(o1);
console.log(o2);
