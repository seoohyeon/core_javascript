/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

// while <-> for문 왔다갔다 자주 해보기
// let j = 0;

// for (; j < 10; j++) {
//   console.log(j);
// }
// console.log("과연" + j);

// 2 ~ 10까지의 짝수 출력하기
for (let j = 0; j <= 10; j++) {
  if (j % 2 !== 0) continue;

  console.log(j);
}

// 조건 : SVG, jQuery는 출력하지 마세요

const frontEndDev = "HTML CSS SVG JavaScript jQuery React Redux".split(" ");

let l = frontEndDev.length;

for (let i = 0; i < l; i++) {
  if (frontEndDev[i].includes("jQuery")) break;

  console.log(frontEndDev[i]);
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.
//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.
// - 성능 향상에 도움이 되는 팁
//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
