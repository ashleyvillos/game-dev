let canvas = document.getElementById('canvas')
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.9;
let context = canvas.getContext("2d");

let ghost = new Image();
ghost.src = "sprites/Ghost/spritesheet.png"

let frameCounter = 0;
let spriteWidth = 398;
let spriteHeight = canvas.height
let gameFrame = 0;
let frameSpeed = 2;

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // drawImage(image object, x-coordinate, y-coordinate, width, height)
    // drawImage(image object, x-coord, y-coord, width, height, x-coord, y-coord, width, height)
    // context.drawImage(ghost, 0, 0, canvas.width, canvas.height);
    context.drawImage(ghost, frameCounter*spriteWidth, 0, spriteWidth, ghost.height, 0, 0, canvas.width*0.3, canvas.height*0.3)
    
    if (gameFrame % frameSpeed == 0) {
        frameCounter++;
    
        if (frameCounter > 10) {
            frameCounter = 0;
        }
    }

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();



// let ghost = new Image()
// ghost.src = 'sprites/Ghost/spritesheet.png'

// let frameX = 0;
// let gameFrame = 0;
// let staggerFrame = 5;
// const spriteWidth = 396;
// const spriteHeight = canvas.height;


// function animate() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.drawImage(ghost, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth * 0.4, ghost.height * 0.4);

//     if (gameFrame % staggerFrame == 0) {
        
//         frameX++;

//         if(frameX > 10) {
//             frameX = 0
//         }
//     }

//     gameFrame++;

//     requestAnimationFrame(animate);
// }

// animate();


// const ghost = new Image();
// ghost.src = 'sprites/ghost.png';

// const skeleton = new Image();
// skeleton.src = 'sprites/ghost_enemies.png'

// const spriteWidth = 396;
// const spriteHeight = canvas.height

// let frameX = 0;
// let gameFrame = 0; // frame counter
// let staggerFrames = 5; // variable used to slowdown sprite animation
// let incrementFrame = true; // increment sprite frames if true, decrement if false

// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(ghost, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth * 0.4, ghost.height * 0.4);
    
//     if (gameFrame % staggerFrames == 0) {

//         if (incrementFrame && frameX >= 10) {
//             incrementFrame = false;
//         }

//         else if (!incrementFrame && frameX <= 0) {
//             incrementFrame = true;
//         }
        
//         frameX = (incrementFrame) ? frameX + 1 : frameX - 1;
//     }

//     gameFrame++;

//     requestAnimationFrame(animate)
// }


// animate();