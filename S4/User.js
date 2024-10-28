class User {
  username;
  static city;
  id;

  constructor(name, city, id) {
    this.username = name;
    User.city = city;
    this.id = id;
  }

  display() {
    console.log(this.username, this.id, User.city);
  }
}

var user1 = new User("Raj", "Mumbai", 1010);
var user2 = new User("Rohan", "Mumbai", 1020);
var user3 = new User("Rithik", "Mumbai", 1030);

// console.log(user1);
// console.log(user2);

user1.display();
user2.display();

User.city = "Banglore";

user1.display();
user2.display();
