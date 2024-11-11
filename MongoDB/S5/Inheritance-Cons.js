class Product {
  pName;
  category;

  constructor(pName, category) {
    this.pName = pName;
    this.category = category;
  }

  display() {
    console.log(this.pName, this.category);
  }
}

class Electronics extends Product {
  price;
  rating;
  constructor(pName, category, price, rating) {
    super(pName, category); //It is a call of Parent Class Constructor
    this.price = price;
    this.rating = rating;
  }

  print() {
    this.display();
    console.log(this.price, this.rating);
  }
}

var ele1 = new Electronics("Macbook", "Electronics", 94000, 4.7);
ele1.print();
