const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

// set proper width and height of the window
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "/images/shadow_dog.png";

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(50,50,100,100);
    requestAnimationFrame(animate);
};
animate();