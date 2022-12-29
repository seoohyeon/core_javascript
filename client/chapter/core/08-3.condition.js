/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
  NIGHT = "밤",
  LATE_NIGHT = "심야",
  DAWN = "새벽";

let thisTime;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// thisTime = prompt("언제 무얼하실까요?");

// switch (thisTime) {
//   case value:
//     break;

//   default:
//     break;
// }

// switch (thisTime) {
//   case "아침":
//     console.log(MORNING + "입니다");
//     break;
//   case "점심":
//     console.log(LUNCH + "입니다");
//     break;
//   case "저녁":
//     console.log(DINNER + "입니다");
//     break;
//   case "밤":
//     console.log(NIGHT + "입니다");
//     break;
//   case "심야":
//     console.log(LATE_NIGHT + "입니다");
//     break;
//   case "새벽":
//     console.log(DAWN + "입니다");
//     break;
//   default:
//     console.log("??");
// }
// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

// if (thisTime === "아침") {
//   console.log(MORNING + "입니다");
// } else if (thisTime === "점심") {
//   console.log(LUNCH + "입니다");
// } else if (thisTime === "저녁") {
//   console.log(DINNER + "입니다");
// } else if (thisTime === "밤") {
//   console.log(NIGHT + "입니다");
// } else if (thisTime === "심야") {
//   console.log(LATE_NIGHT + "입니다");
// } else if (thisTime === "새벽") {
//   console.log(DAWN + "입니다");
// }

/* switch vs. if -------------------------------------------------------- */

function getRandom(n) {
  return Math.round(Math.random() * n);
}

function getDay(number) {
  switch (number) {
    case 0:
      console.log("일");
      break;
    case 1:
      console.log("월");
      break;
    case 2:
      console.log("화");
      break;
    case 3:
      console.log("수");
      break;
    case 4:
      console.log("목");
      break;
    case 5:
      console.log("금");
      break;
    case 6:
      console.log("토");
      break;
  }
}

let result = getDay(getRandom(1));

console.log(result);
