let keyPressCount = 0;
let mouseClickCount = 0;
let lastTime = Date.now();
const memes = ["meme1.jpg", "meme2.jpg", "meme3.jpg"];

document.addEventListener("keydown", () => {
    keyPressCount++;
    checkRage();
});

document.addEventListener("mousedown", () => {
    mouseClickCount++;
    checkRage();
});

function checkRage() {
    let currentTime = Date.now();
    if (currentTime - lastTime < 5000 && (keyPressCount > 50 || mouseClickCount > 20)) {
        showMeme();
        playCalmMusic();
        keyPressCount = 0;
        mouseClickCount = 0;
    }
    lastTime = currentTime;
}

function showMeme() {
    let randomMeme = memes[Math.floor(Math.random() * memes.length)];
    document.getElementById("meme").src = randomMeme;
    document.getElementById("meme").style.display = "block";
    document.getElementById("status").innerText = "Calm down! 😆";
}

function playCalmMusic() {
    document.getElementById("calmAudio").play();
}
