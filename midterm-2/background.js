class Background {
    constructor(width, height) {
        this.image1 = new Image()
        this.image1.src = 'sprites/background/bg1.png'

        this.image2 = new Image()
        this.image2.src = 'sprites/background/bg2.png'

        this.image3 = new Image()
        this.image3.src = 'sprites/background/bg3.png'

        this.image4 = new Image()
        this.image4.src = 'sprites/background/bg4.png'

        this.images = [
            {
                spritesheet : this.image1,
                width : 2400,
            },

            {
                spritesheet : this.image2,
                width : 2400,
            },

            {
                spritesheet : this.image3,
                // width : 9216,
                width: 2400
            },

            {
                spritesheet : this.image4,
                // width : 4372,
                width: 2400
            }
        ]

        this.width = width
        this.height = height
        this.currentImage = 0
        this.x = 0
        this.speed = 7;
        this.stopMoving = false
    }

    update() {
        // this.x -= this.speed --> shortcut version of the code below
        this.x = this.x - this.speed;

        if ((canvas.width - this.x >= this.images[this.currentImage].width) || this.stopMoving) {
            // this.x += this.speed
            this.x = this.x + this.speed;
            this.stopMoving = true
        }
    }

    nextBackground() {
        this.currentImage++

        // to check if I exhausted all of the images
        if (this.currentImage >= this.images.length) {
            this.currentImage = 0
        }

        this.stopMoving = false;
        this.x = 0;
    }

    draw() {
        context.drawImage(
            this.images[this.currentImage].spritesheet, 
            this.x, 
            0, 
            this.images[this.currentImage].width, 
            this.height
        );
    }
}