class Player {
    constructor(posX, posY) {
        this.spritesheet = new Image();
        this.spritesheet.src = "sprites/plane/Fly/spritesheet.png";

        this.x = posX
        this.y = posY
        this.originalX = posX;
        // this.originalY = posY;

        this.frameCounter = 0;
        this.frameWidth = 448
        this.imageWidth = canvas.width * 0.12
        this.imageHeight = canvas.height * 0.13

        this.gameFrame = 0;
        this.frameSpeed = 2;
        this.planeSpeed = 14;
        this.nextRound = false; 

        this.movement = {
            LEFT : false,
            RIGHT : false,
            UP : false,
            DOWN : false,
        }

        this.keyCodes = {
            UP : "ArrowUp",
            LEFT : "ArrowLeft",
            RIGHT : "ArrowRight",
            DOWN : "ArrowDown"
        }
    }

    move(keyType, key) {
        // hold
        if (keyType == 'keydown') {
            if (key == this.keyCodes.UP || key == 'w') {
                this.movement.UP = true
                // this.y -= this.planeSpeed
            }

            if (key == this.keyCodes.DOWN || key == 's') {
                // this.y += this.planeSpeed
                this.movement.DOWN = true
            }

            if (key == this.keyCodes.LEFT || key == 'a') {
                // this.x -= this.planeSpeed
                this.movement.LEFT = true
            }

            if (key == this.keyCodes.RIGHT || key == 'd') {
                // this.x += this.planeSpeed
                this.movement.RIGHT = true
            }
        }

        // release
        else if (keyType == 'keyup') {
            if (key == this.keyCodes.UP || key == 'w') {
                this.movement.UP = false
                // this.y -= this.planeSpeed
            }

            if (key == this.keyCodes.DOWN || key == 's') {
                // this.y += this.planeSpeed
                this.movement.DOWN = false
            }

            if (key == this.keyCodes.LEFT || key == 'a') {
                // this.x -= this.planeSpeed
                this.movement.LEFT = false
            }

            if (key == this.keyCodes.RIGHT || key == 'd') {
                // this.x += this.planeSpeed
                this.movement.RIGHT = false
            }
        }
    }

    resetPosition() {
        this.x = this.originalX
        // this.y = this.originalY
        this.nextRound = false;
    }

    update() {
        if (this.gameFrame % this.frameSpeed == 0) { 
            // this.frameCounter = (this.frameCounter == 0) ? 1 : 0;
            if (this.frameCounter == 0) {
                this.frameCounter = 1;
            }

            else {
                this.frameCounter = 0;
            }

            if (this.movement.UP && this.y > 0) {
                this.y = this.y - this.planeSpeed
            }

            if (this.movement.DOWN && (this.y + this.imageHeight) < canvas.height) {
                this.y = this.y + this.planeSpeed
            }

            if (this.movement.LEFT && this.x > 0) {
                this.x = this.x - this.planeSpeed
            }

            if (this.movement.RIGHT) {
                if ((this.x + this.imageWidth) < canvas.width) {
                    this.x = this.x + this.planeSpeed
                }

                else {
                    this.nextRound = true;
                }
            }
        }

        this.gameFrame++;
    }

    draw() {
        context.drawImage(
            this.spritesheet,
            this.frameCounter*this.frameWidth,
            0,
            this.frameWidth,
            this.spritesheet.height,  // height
            this.x,
            this.y,
            this.imageWidth,
            this.imageHeight
        )
    }
}