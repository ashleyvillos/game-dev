class Player {
    constructor(posX, posY) {
        this.spritesheet_walk = new Image();
        this.spritesheet_walk.src = "sprites/Little Boy/run/spritesheet.png";

        this.spritesheet_dead = new Image();
        this.spritesheet_dead.src = "sprites/Little Boy/ko/spritesheet.png";

        this.spritesheet_idle = new Image();
        this.spritesheet_idle.src = "sprites/Little Boy/idle/spritesheet.png";

        this.spritesheet_punch = new Image();
        this.spritesheet_punch.src = "sprites/Little Boy/punch/spritesheet.png";

        this.x = posX;
        this.y = posY;

        this.gameFrame = 0;
        this.frameSpeed = 2;

        this.isMoving = false;
        this.isDead = false;

        this.actions = {
            'walk' : {
                'spritesheet' : this.spritesheet_walk,
                'frame_counter' : 0,
                'spriteWidth' : 391,
                'speed' : 5,
                'frame_limit' : 20
            },
            
            'idle' : {
                'spritesheet' : this.spritesheet_idle,
                'frame_counter' : 0,
                'spriteWidth' : 319,
                'frame_limit' : 20
            },

            'dead' : {
                'spritesheet' : this.spritesheet_dead,
                'frame_counter' : 0,
                'spriteWidth' : 748
            },

            'punch' : {
                'spritesheet' : this.spritesheet_punch,
                'frameCounter' : 0,
                'spriteWidth' : 671
            }
        }
    }

    move(keyType, key) {
        if (keyType == "key_down") {
            this.isMoving = true;

            if (key == "ArrowRight" && !this.isDead && this.x < (canvas.width/2)) {
                this.x = this.x + this.actions['walk'].speed;
            }
    
            else if (key == "ArrowLeft" && !this.isDead) {
                this.x = this.x - this.actions['walk'].speed;
            }
        }
        
        else if (keyType == "key_up") {
            this.isMoving = false;
        }
    }

    update(action) {
        // check if action exists in JSON
        // if (action in this.actions) {
        //     this.actions[action].frame_counter++;

        //     if (this.actions[action].frame_counter > this.actions[action].frame_limit) {
        //         this.actions[action].frame_counter = 0;
        //     }
        // }

        if (this.gameFrame % this.frameSpeed == 0) {
            if (action == "walk") {
                this.actions[action].frame_counter++;
    
                if (this.actions[action].frame_counter > 20) {
                    this.actions[action].frame_counter = 0;
                }
            }
    
            else if (action == "idle") {
                this.actions[action].frame_counter++;
    
                if (this.actions[action].frame_counter > 20) {
                    this.actions[action].frame_counter = 0;
                }
            }

            else if (action == "dead") {
                this.actions[action].frame_counter++;

                if (this.actions[action].frame_counter > 30) {
                    this.actions[action].frame_counter = 30;
                }
            }

            else if (action == 'punch') {
                this.actions[action].frameCounter++;

                if (this.actions[action].frame_counter > 11) {
                    this.actions[action].frame_counter = 0;
                }
            }
        }

        this.gameFrame++;
    }

    draw(action) {
        // drawImage(image object, x-coord, y-coord, width, height)
        // context.drawImage(this.actions[action].spritesheet, this.x, this.y, canvas.width, canvas.height*0.2)

        context.drawImage(
            this.actions[action].spritesheet, 
            this.actions[action].frame_counter*this.actions[action].spriteWidth, 
            0, 
            this.actions[action].spriteWidth, 
            this.actions[action].spritesheet.height, 
            this.x, 
            this.y, 
            canvas.width*0.08, 
            canvas.height*0.2
        )
    }
}