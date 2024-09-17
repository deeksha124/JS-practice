let car1 = "Fiat";
const car2 = { type: "Fiat", model: "500", color: "white" };
console.log("car2", car2);
console.log("car1" ,car1)
 car2.age = 22;
console.log("car2", car2);

// ----------------------------------------------********************------------------------------------------
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
  
  console.log("myCar1" ,myCar1 , "myCar2" ,myCar2)

//   --------------------------------------------********************--------------------------------------


class Car1 {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }

const date = new Date();
let year = date.getFullYear();
const myCar = new Car1("Ford", 2014);
console.log(`My car is a ${myCar.name} and it is ${myCar.age(year)} years old.`);



