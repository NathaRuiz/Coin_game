const spin_coin = document.getElementById("spin_coin");
const restart_game = document.getElementById("restart_game");

let coin_content = document.getElementById("coin_content");

const face_counter = document.getElementById("face_counter");
const cross_counter = document.getElementById("cross_counter");

let counter_f = "0";
let counter_c = "0";

function random_spin (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

spin_coin.addEventListener("click", () =>{
    
    if (random_spin(1,2) === 1) {
        coin_content.textContent = "FACE";
        counter_f ++;
        face_counter.textContent = counter_f;
    } 
    else {
        coin_content.textContent = "CROSS";
        counter_c ++;
        cross_counter.textContent = counter_c;
    }
    
})

restart_game.addEventListener("click", () =>{
    coin_content.textContent = "?";
    face_counter.textContent = 0;
    cross_counter.textContent = 0;
})