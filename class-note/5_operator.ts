// function logMessage(mes: any){
//     console.log(mes)
// }

// logMessage('하이')
// logMessage(123)

// 타입을 하나 이상으로 쓸 수 있게 만들어주는 연산자를 유니온 타입이라고 한다.
function logMessage(mes: string | number) {
  console.log(mes);
}

logMessage("하이");
logMessage(123);

// 타입가드: 특정 타입으로 타입의 범위를 줄여나가는(필터링) 과정

function sum(a: string | number): void {
  if (typeof a === "string") {
    a.charAt(0);
  }

  if (typeof a === "number") {
    a.toString();
  }
}

interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

function askSomeone(someone: Person | Developer) {
  someone.name;

  // interface와 같은 구조체를 타입으로 명시 해주고 유니온 타입을 썼을 때 공통된 속성만 제공해주는 특징을 가지고 있음
}
askSomeone({ name: "강인웅", age: 27 });
askSomeone({ name: "강인웅", skill: "짱" });

function askSomeonee(someone: Person & Developer) {
  someone.name, someone.age, someone.skill;
  // 인터섹션 연산자를 썼을 때 타입가드가 필요없이 Person과 Developer의 모든 속성을 제공해준다는 걸 확인할 수 있다.
}
askSomeonee({ name: "강인웅", skill: "짱", age: 27 });

/* 유니언과 인터섹션의 차이라고 한다면 타입을  교집합하냐 합집합 하냐 차이로 이해하면 되고
실제로 유니온이 더 많이 쓰인다.
유니언의 경우는 타입가드를 해주는 게 좋지만 인터섹션과 같은 경우에는 타입가드를 해 줄 필요가 없다 
*/
