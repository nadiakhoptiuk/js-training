//Передвиньте мяч по полю при клике на поле

// .football-field {
//   width: 400px;
//   position: relative;
//   height: 200px;
//   border: 1px solid #212121;
//   background: green;
// }
// .ball {
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: red;
// }

// <div class="football-field">
// <div class="ball"></div>
// </div>

const refs = {
  field: document.querySelector(".football-field"),
  ball: document.querySelector(".ball"),
};

refs.field.addEventListener("click", wrapperFunction);

function wrapperFunction(event) {
  const { x, y } = getCoordinates(event);
  moveBall(x, y);
}

function getCoordinates(event) {
  // console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x, y);
  return { x, y };
}

function moveBall(x, y) {
  // console.dir(refs.ball);

  refs.ball.style.left = `${x - refs.ball.clientWidth / 2}px`;
  refs.ball.style.top = `${y - refs.ball.clientHeight / 2}px`;
}
