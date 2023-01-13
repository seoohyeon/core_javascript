/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

const first = getNode(".first");
const second = getNode(".second");
const ground = getNode(".ground");
const ball = getNode(".ball");

function handler() {
  console.log("hit !");

  // css('.second','display','none')
}

first.addEventListener("click", handler);

//const off = bindEvent(".first", "click", handler);
//bindEvent(".second", "click", off);

//resize
ground.addEventListener("mousemove", function (e) {
  console.log(e.offsetX, e.offsetY);

  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px, 
  ${e.offsetY - ball.offsetHeight / 2}px)`;
});

// second.addEventListener('click',function(){
//   first.removeEventListener('click', handler);
// })

// - addEventListener
// - removeEventListener
