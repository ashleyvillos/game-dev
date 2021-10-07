let canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

const bg = new Background(canvas.width, canvas.height);
const player = new Player(0, canvas.height/2)

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    bg.update()
    bg.draw()

    player.update()
    player.draw()

    if (bg.stopMoving && player.nextRound) {
        bg.nextBackground()
        player.resetPosition()
    }

    // if (bg.stopMoving) {
    //     bg.nextBackground();
    // }


    requestAnimationFrame(animate);
}

animate()

document.addEventListener('keydown', key_down_listener)
document.addEventListener('keyup', key_up_listener)

function key_down_listener(event) {
    // console.log('[hold]')
    player.move("keydown", event.key);
}

function key_up_listener(event) {
    // console.log('[release]')
    player.move("keyup", event.key)
}
