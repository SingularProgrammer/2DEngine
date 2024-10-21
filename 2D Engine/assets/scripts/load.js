function loadAssets() {
    setsprite([
        "./assets/images/favicon.ico"
    ]);
}

function loadObjects() {
    setobject([
        {
            sprite: 0,
            x: 0,
            y: 0
        }
    ]);
    camera = { x: 0, y: 0 };
}

starttick(1);