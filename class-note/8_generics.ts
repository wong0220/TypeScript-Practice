// 함수를 호출하는 순간에 타입을 정해서 넘겨준다

function temp<T>(params: T): T {
  console.log(params);
  return params;
}

temp<string>("하이");

function temp2(params: string | number) {
  console.log(params);
  // params.  했을 때 사용할 수 있는 메소드는 string과 number가 공통적으로 사용할 수 있는 메소드만 사용이 가능함  (타입가드를 사용해야함) 이것이 제네릭과의 차이점
  return params;
}

let 인웅 = temp2("강");
//  인웅.split X temp2에 '강'이라는 문자열을 넘겨주었음에도 불구하고 반환값이 string | number로 split메소드를 사용할 수가 없음. 한 마디로 타입을 추론을 못함
temp2(27);

// 함수 타입에 제네릭을 써주면 함수 호출 시 타입을 유연하게 지정해줄 수 있기 때문에 위의 단점들을 커버해줄 수 있는 장점을 가지고 있음
// 타입 정의에 대한 이점을 확실하게 가져갈 수 있음

function temp3<T>(params: T): T {
  console.log(params);
  return params;
}

const a = temp3<string>("강");
a.split(""); // 가능
const b = temp3<boolean>(true);

// 인터페이스에 제네릭을 선언해주는 방법

interface Kang<T> {
  name: T;
  age: number;
}

const inwoong: Kang<string> = {
  name: "kang",
  age: 27,
};

//제네릭의 타입제한
//제네릭 타입에 제한을 줌으로써 사용되는 메소드를 구체적으로 제시해줄 수 있다

function temp4<T>(params: T[]): T[] {
  console.log(params);
  params.length;
  return params;
}

temp4<string>(["강", "인", "웅"]);

//제네릭의 타입제한 2 - 정의된 타입 이용하기

interface Test {
  length: number;
}

// interface에 정의된 타입을 이용하여 사용할 수 있는 메소드를 힌트를 줘 에러를 없앨 수 있다.
function temp5<T extends Test>(params: T): T {
  console.log(params.length);
  return params;
}

temp5("강");
temp5(10); // X
temp5({ length: 4 });

// 제네릭의 타입제한 3 - keyof 이용하기

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function temp6<T extends keyof ShoppingItem>(params: T): T {
  return params;
}
// 컨트롤 스페이스바를 통해서 인자로 들어갈 값을 확인할 수 있음
// temp6({name: '강' , price:2700, stock:3})
temp6("name");
temp6("price");
