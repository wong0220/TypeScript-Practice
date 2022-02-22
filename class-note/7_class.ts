class Person {
  //접근제한자를 사용해 변수의 유효범위도 설정해줄 수 있음
  // 클래스 내에서만 사용하고 싶다면 private 그렇지 않다면 기본값인 public 그외 protected 등등
  private name: string;
  public age: number;
  //es6와의 차이점이라 하면 사용할 변수의 타입을 정해줘야함
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}

let human = new Person("inwoong", 27);
