const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const sprites = {};
var gameObjects = [];
var camera = { x: 0, y: 0 };

let loadedSprites = 0;
let tickRate = 40;

// Load Game
function setsprite(spritemap) {
    let i = 0;
    spritemap.forEach((k) => {
        sprites[i] = new Image();
        sprites[i].src = k;
        i++;
    });
}
function setobject(gameObjects_) {
    gameObjects = gameObjects_;
}
function load() {
    let i = 0;
    sprites.forEach((s) => {
        sprites[i].onload += spriteloaded();
        let i = 0;
    });
}
function spriteloaded() {
    loadedSprites++;
    if (loadedSprites == sprites.length) {
        load();
        render();
    }
}

function CameraRender() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (true) {
        gameObjects.forEach((object) => {
            var lX = camera.x - object.x;
            var lY = camera.y - object.y;

            ctx.drawImage(sprites[object.sprite], lX, lY);
        });
    }
}
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
function render(){
    tick();
    CameraRender();
    requestAnimationFrame(render, tick);
}
function starttick(tick) {
    tickRate = tick;
}


canvas.addEventListener('mousedown', (event) => {
    click(event.clientX, event.clientY);
});
canvas.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    click(touch.clientX, touch.clientY);
});
window.addEventListener('keydown', function (event) {
    keydown(event.key);
});
window.addEventListener('keyup', function (event) {
    keyup(event.key);
});
window.addEventListener('resize', () => {
    resize();
});