type Person = {
  name: string;
  age: number;
};

// interface Person {
//   name: string;
//   age: number;
// }

let inwoong: Person = {
  name: "woong",
  age: 27,
};

type realString = string;
let hello: realString = "하이";

/*
특정 타입에 대한 별칭을 type이라고 한다
type 같은 경우에는 interface와 같이 확장 즉 상속이 되지 않는다.

좋은 소프트웨어는 언제나 확장이 용이해야 되기 때문에 가능한한 type보다는 interface로 사용하는 것을 지향한다.
*/
