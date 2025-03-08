//counter program 

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseeBtn = document.getElementById("increaseeBtn");
const CountLabel = document.getElementById("CountLabel");

let count = 0;

increaseeBtn.onclick = function(){
    count++;
    CountLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count --;
    CountLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    CountLabel.textContent = count;
}