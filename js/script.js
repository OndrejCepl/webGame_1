const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

// set proper width and height of the window
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "/images/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;


function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(100,50,100,100);
    // source image - 4 values cut out - 4 values position and cut out
    ctx.drawImage(playerImage, 0 * spriteWidth, 0 * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);
};
animate();