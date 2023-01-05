/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */
/* 


{

   const sum  = function (valueA,valueB){
    return valueA + valueB
  }

}


console.log('sum : ' , sum(10,30));





 */







function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// Object.prototype.hasOwnProperty = 'aaaa'

// prototype  → '존래식' 어? 이거 재밌겠는데 ? 한번 나도 만드러볼까~? jQuery



// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {

    // console.log(arguments);

    // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 불리는 변수 : arguments
    // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 있다.

    // 유사배열은 배열이 아니다. 고로 배열의 능력을 사용하려면 진.짜. 배열로 만들어야 한다.
    // 배열의 능력 : forEach, reduce
    
    let total = 0;


    let arr = Array.from(arguments) // static method
    // let arr = Array.prototype.slice.call(arguments)

    // arr.forEach(function(item,index){
      
    //   total += item;

    // });


    
    
    console.log();
    
    

    // for(let value of arguments){
    //   total += value;
    // }
    
   /*  for(let i = 0; i < arguments.length; i++){
      total += arguments[i];
    }
 */

    return arr.reduce(function (acc,item){
      return acc + item
    })


  // return moneyA + moneyB + moneyC + moneyD;
};


console.log(calculateTotal(100,500,300,150,400,150));


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function (){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello (){ };

/* 
movePage('https://www.naver.com',
(url)=>{  window.href = url},
()=>{})

 */
// 콜백 함수 (표현)식
let movePage = function (url,resolve,reject){
  // let url = 'https://www.naver.com';

  // let resolve = function (url){
  //   console.log(`${url} 해당 페이지로 이동합니다.`);
  // }

  // let reject = function (url){
    // throw new Error('url 입력 정보가 올바르지 않습니다.')
  // }

  // resolve()
  // reject()

  // if(typeof url === 'string' && url.includes('http') && url.includes('www')){
  if(typeof url === 'string' && url.match(/http.+www/)){
    resolve(url)
  }else{
    reject()
  }
  
};


movePage(
  'https://www.naver.com',
  function (url){
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function (){
    throw new Error('url 입력 정보가 올바르지 않습니다.')
  }
)
  



/* forEach는 내부에 이런 식으로 구현되어 있을려나요? 
forEach(function(currentValue, index, array){}, thisArg)


arr.forEach(function(item,index){})
 */

const user = {
  name:'tiger',
  age:32
}


function aa(){
  console.log(this);
}


let call = aa.call(user)
let bind = aa.bind(user)


// 함수 선언문 vs. 함수 (표현)식
const bb = function (){}






// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.
// JavaScript 함수는 그 자체로 값(literal)
// 함수 값을 즉시 실행 (이름 호출 없이)

//  모듈 프로그래맹이 없던 시절 ........

let IIFE;


//  var 함수 스코프
//  let, const  블록 스코프 


// 너 getNode 이거 나가 

// getNode 받아 


// const MASTER = (function(){

//   const KEY = 'alcls@#@!$%'

//   return {
//     getKey: function (){
//       return KEY
//     }
//   }
// })();


// 전역을 보호하자. 전역을 오염시키지 말자. 
(function($){

  
  
})(window);

const MASTER = (function($){ // parameter

  

  const KEY = 'alcls@#@!$%'


  // 내가 내보내고 싶은 항목들만 내보낼꺼야 
  //  모듈로서의 활용 
  //  정보 은닉화 incapsulation : 외부의 접근을 차단
  // 일부 정보만 노출 


  // console.log($('.first'));
  

  return {
    
    getKey: function (){
      return KEY
    },
    
  }
  
})(getNode) // arguments



MASTER.KEY

MASTER.getkey()



/* -------------------------------------------------------------------------- */
/* 모듈 프로그래밍                                                                   */
/* -------------------------------------------------------------------------- */

// 📂 10-2.function.js

export function getNode(node){
  return document.querySelector(node)
}



// 📂 index.js

import { getNode as $ } from "./10-2.function.js";


























