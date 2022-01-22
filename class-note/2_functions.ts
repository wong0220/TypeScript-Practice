//함수의 파라미터에 타입을 정의하는 방식

// function sum(a: number , b: number)  {
//     return a + b
// }

// sum(10,20)


// 함수의 반환 값에 타입을 정의하는 방식// 
// 반환값이 있어야 하고 반환값이 넘버여야함
function add() : number{
    return 10;

}

//함수에 타입을 정의하는 방식

function sum(a: number , b: number) : number {
    return a + b
}


sum(10, 20, 30 ,40)  // 함수에 대한 스펙을 정확히 이해한 상태 (스펙이란 규칙이라고 생각하면 됨)



// 함수의 옵셔널 파라미터
// 넣어도 되고 안 넣어도 된다 선택적으로 쓰고 싶을 때
function log(a:string, b ?:string , c ?: string){


}

log('hello world')
log('hello ts' , 'abc')