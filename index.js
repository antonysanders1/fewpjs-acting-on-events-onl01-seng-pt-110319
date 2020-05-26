// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "red"

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
        dodger.style.backgroundColor = "blue"
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
        dodger.style.backgroundColor = "yellow"
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});