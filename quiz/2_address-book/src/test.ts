function test() {
  let item = [1, 2, 3, 4];
  return item;
}
//함수 내부에 동기적으로 작성했을 때 return값이 추론이 되는 반면
test();

function test2(): Promise<number[]> {
  let item = [1, 2, 3, 4];
  return new Promise(function (resolve) {
    resolve(item);
  });
}
// 프로미스와 같이 비동기적인 코드가 return값일 때는 추론을 못하기 때문에 제네릭과 같이 정의를 해줘야함
// 왜 프로미스에 제네릭을 타입으로 정의해줘야 하냐고 물어본다면 정해진 약속이라고 생각하면 된다.
test2();
