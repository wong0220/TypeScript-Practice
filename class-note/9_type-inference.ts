// 타입스크립트는 내부적으로 할당된 값을 가지고 타입을 추론할 수 있는데 이것을 타입추론 이라고 함

//타입추론 기본 1
var a = "abc";

function getB(b = 10) {
  var c = "hi";
  return b + c;
}

//타입추론 기본 2
interface DropDwon<T> {
  value: T;
  title: string;
}

// interfac의 제네릭으로 인해 변수를 초기화 하기 전에도 타입추론에 의해서 string이 나오는 것을 볼 수 있다.
var shoppingItem: DropDwon<string> = {
  value: "abc",
  title: "hello",
};

// 타입 추론 기본 3
// 인터페이스의 제네릭을 다른 인터페이스의 extends를 통해서 넘겨줌으로써 사용할 수도 있음
interface DropUp<T> {
  value: T;
  title: string;
}

interface DetailedDropUp<K> extends DropUp<K> {
  tag: K;
  bool: boolean;
}

var detaileItem: DetailedDropUp<string> = {
  value: "hi",
  tag: "bye",
  title: "intergration",
  bool: true,
};

//Best Common Type
// 아래와 같이 여러 타입이 한 배열에 있는 경우 유니온 연산자를 이용해 추론하는 것을 볼 수 있음
let arr = [0, "hi", true];
