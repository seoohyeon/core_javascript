/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let number = prompt("숫자를 입력해 주세요", 0);

// if (number > 0) {
//   alert("1");
// } else if (number < 0) {
//   alert("-1");
// } else if (number == 0) {
//   alert("0");
// }

// let message = number > 0 ? 1 : number < 0 ? -1 : 0;
// alert(message);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "no";

// 영화 볼거니?
let goingToWatchMovie = "yes";

// if 문(statement)
if (didWatchMovie == "no") {
  goingToWatchMovie == "yes"
    ? console.log("영화보러가자")
    : console.log("앗... 안볼거구나 ㅠ");
} else {
  console.log("영화를 이미 봤수다.");
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
