/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// let age = prompt("나이를 입력하세요");

// age >= 14 && age <= 90
//   ? console.log(`제 나이는 ${age}살 이므로 범위에 속합니다.`)
//   : console.log("속하지 않습니다.");

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };

let userName = prompt("사용자 이름을 입력해주세요", "");
let pw;

if (userName?.localeCompare("Admin")) {
  //

  pw = prompt("비번을 입력하시오.");
  console.log(typeof pw);
  if (pw?.toLowerCase() === "themaster") {
    alert("환영합니다!");
  } else if (pw === "" || pw === null) {
    alert("취소되었습니다.");
  } else {
    alert("인증에 실패하였습니다.");
  }
} else if (userName === "" || userName === null) {
  alert("취소되었습니다.");
} else {
  alert("누군지 모릅니다.");
}
