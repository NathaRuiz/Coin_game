const spin_coin = document.getElementById("spin_coin");
const restart_game = document.getElementById("restart_game");

let coin_content = document.getElementById("coin_content");

const face_counter = document.getElementById("face_counter");
const cross_counter = document.getElementById("cross_counter");

let counter_f = "0";
let counter_c = "0";

function random_result(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function add_rotate_event(coin_side){
    coin_content.classList.add(`${coin_side}_rotate`);
    setTimeout(() => {
    coin_content.textContent = coin_side;
    coin_content.classList.remove(`${coin_side}_rotate`);
  }, 1000);
}


spin_coin.addEventListener("click", () => {
  if (random_result(0, 1) === 0) {
    add_rotate_event("FACE");
    counter_f++;
    face_counter.textContent = counter_f;
  } else {
    add_rotate_event("CROSS");
    counter_c++;
    cross_counter.textContent = counter_c;
  }
});

restart_game.addEventListener("click", () => {
  coin_content.textContent = "?";
  face_counter.textContent = 0;
  cross_counter.textContent = 0;
});


