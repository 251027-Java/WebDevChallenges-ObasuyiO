const img = document.getElementById("gojoImage");
const toggleBtn = document.getElementById("toggleImgBtn");

toggleBtn.addEventListener("click", () => {
    if (img.src.includes("satoru-gojo-infinity-jujutsu-kaisen-wallpaper-1920x1080_48.jpg")) {
        img.src = "satoru-gojo-infinity-jujutsu-kaisen-wallpaper-1920x1080_48..jpg";
    } else {
        img.src = "deku1.jpg";
    }
});


const bgBtn = document.getElementById("bgColorBtn");

const colors = ["lightblue", "lightgreen", "lightpink", "lavender", "white"];
let index = 0;

bgBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;   
});

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});



