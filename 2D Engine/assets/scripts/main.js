function click(x, y){

}
function keydown(keycode){
    if(keycode === "w") {
        camera.x -= 3;
        console.log("girdi");
    }else if(keycode === "s") {
        camera.x += 3;
    }
}
function keyup(keycode){
    if(keycode === "w") {
        camera.x -= 3;
        console.log("girdi");
    }else if(keycode === "s") {
        camera.x += 3;
    }
}

function start(){
    
}
function tick(){

}