function askSomeone(someone: Person | Developer) {
  someone.name;
  console.log(someone);
  // interface와 같은 구조체를 타입으로 명시 해주고 유니온 타입을 썼을 때 공통된 속성만 제공해주는 특징을 가지고 있음
}
askSomeone({ name: "강인웅", skill: "짱", age: 27 });
