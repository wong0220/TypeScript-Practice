//enum은 특정값들의 집합을 의미하는 자료형이다.

enum shoes {
  Nike = "나이키",
  Adidas = "아디다스",

  //enum의 경우 별도의 값을 지정해주지 않으면 숫자형으로 취급된다
  // Nike에 10을 할당해 줄 경우 Adidas의 경우는 차례대로 1씩 증가하기 때문에 11이 할당 됨
  // 문자를 할당해주면 문자가 그대로 할당되는 걸 볼 수 있음
}

let myShoes = shoes.Nike;
console.log(myShoes); // 0  //나이키

// ----- example -----
enum Answer {
  Yes = "Y",
  No = "N",
}

function answer(ans: Answer) {
  if (ans === Answer.Yes) {
    console.log("정답입니다");
  }
  if (ans === Answer.No) {
    console.log("오답입니다.");
  }
}
//파라미터의 타입이 enum일 경우 인자는 enum에서 제공해주는 값만 사용할 수 있다

answer(Answer.Yes);
answer(Answer.No);
