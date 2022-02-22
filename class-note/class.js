function Person(name, age) {
  (this.name = name), (this.age = age);
}

// class Person {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
// }

let kang = new Person("inwoong", 27);
console.log(kang);
