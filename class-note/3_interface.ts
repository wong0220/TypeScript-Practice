//함수의 인자를 정의하는 인터페이스
interface stack {
  name: string;
  age: number;
}

function stackFunc(input: stack) {
  console.log(input);
}

stackFunc({ name: "인웅", age: 27 });

// 함수의 구조에 인터페이스 활용
interface temp {
  (a: number, b: number): number;
}

let sum: temp;

sum = function (a: number, b: number): number {
  return a + b;
};

//인덱싱

interface arr {
  [index: number]: string;
}

let tempArr: arr = ["강", "인", "웅"];
tempArr[0] = "황";

//딕셔너리 패턴

interface dictionary {
  [key: string]: RegExp;
}

let obj: dictionary = {
  name: /+/s,
  kang: /.css$/,
};

obj["inwoong"] = /.js$/;

Object.keys(obj).forEach((el) => console.log(el));

//인터페이스 확장

interface food {
  taste: string;
}

interface koreanFood extends food {
  spicy: string;
}

let eat: koreanFood = {
  spicy: "hot",
  taste: "good",
};
