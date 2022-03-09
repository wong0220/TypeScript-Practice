// 타입 단언
// 타입스크립트 보다 개발자가 더 타입을 잘 알고있을 때 타입스크립트에게 간주하라는 명령

var a;
a = 20;
a = "a";
var b = a as string;


//DOM API 조작
// <div id='app'>hi </div>
// null이나 HTMLDivElement 중 하나인 유니온 타입으로 추론이 되기 때문에 단언을 해줘야 한다
// 해주지 않으면 조건문을 써서 타입스크립트를 확인시켜주는 방법밖에 없음
var div = document.querySelector('div')

if(div){
    div.innerText
}

var div = document.querySelector('div'):HTMLDivElement
 div.innerText
