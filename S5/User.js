class User {
  uname;
  gender;
  static city;
  constructor(uname, gender, city) {
    this.uname = uname;
    this.gender = gender;
    User.city = city;
  }
  display() {
    console.log(this.uname, this.gender, User.city);
  }

  static changeCity(newCity) {
    User.city = newCity;
    console.log(User.city, this.city, this.username);
  }
}

var u1 = new User("xyz", "male", "c1");
u1.display();
User.changeCity("Delhi");
