const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letterContainer = document.getElementById('letter-container');
const questionContainer = document.getElementById('question-container')
const questionCategory = document.getElementById('question-category');
const letterSlot = document.getElementsByClassName('letter-slot');

// generate letters table
inserLettersTable();

// get letter-button elements after generating letters table
const letterButtons = document.getElementsByClassName('letter-button');

// get css styles
const styles = {
    canvas : window.getComputedStyle(canvas),
    letterContainer : window.getComputedStyle(letterContainer),
    questionContainer : window.getComputedStyle(questionContainer),
    letterButton : window.getComputedStyle(letterButtons[0]), // get single element
    questionCategory : window.getComputedStyle(questionCategory)
}

// generate question table
insertQuestionTable();

// position the containers in the middle
letterContainer.style.left = ((canvas.width / 2) - (parseInt(styles.letterContainer.width) / 2)) + 'px';
questionContainer.style.left = ((canvas.width / 2) - (parseInt(styles.questionContainer.width) / 2)) + 'px';

// set element width and position based on question-container
questionCategory.style.width = (parseInt(styles.questionContainer.width) * 0.6) + 'px';
questionCategory.style.left = ((parseInt(questionContainer.style.left) + parseInt(styles.questionContainer.width)) / 2) - 40 + 'px'
// questionCategory.style.left = (parseInt(questionContainer.style.left)) + 'px'
questionCategory.style.top = (parseInt(styles.questionContainer.top) - (parseInt(styles.questionCategory.height) * 0.7)) + 'px';

// disable button if it is clicked
for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', () => { 
        letterButtons[i].classList = 'letter-button letter-button-disabled';
    })
}

function inserLettersTable() {
    const table = document.getElementById('letters-table');

    const tableContents = [
        ['Ash', 'B', 'C', 'D', 'E', 'F', 'Gem', 'H', 'I', 'J', 'KEN GWAPO', 'L', 'M'],
        ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'ZZZ']
    ]

    for (let i = 0; i < tableContents.length; i++) {
        // insert row at end of table
        let row = table.insertRow(-1);

        for (let j = 0; j < tableContents[i].length; j++) {
            // Insert a cell in the row at index 0
            let cell = row.insertCell(j);

            // create button
            let btn = document.createElement('button');
            btn.className = 'letter-button letter-button-enabled';
            btn.textContent = tableContents[i][j];
            
            // add button to table cell
            cell.appendChild(btn);
        }
    }
}

function insertQuestionTable() {
    const table = document.getElementById('question-slot-table');
    let padding = parseInt(styles.questionContainer.padding);
    let containerDimensions = [parseInt(styles.questionContainer.width), parseInt(styles.questionContainer.height)];
    let buttonDimensions = [parseInt(styles.letterButton.width), parseInt(styles.letterButton.height)];

    let limitRow = Math.floor((containerDimensions[1] - padding) / buttonDimensions[1])
    let limitCol = Math.floor((containerDimensions[0] - padding) / buttonDimensions[0])

    // loop count depends on number of rows
    for (let i = 0; i < limitRow; i++) {
        // insert row at end of table
        let row = table.insertRow(-1);
        
        // loop count depends on number of cols
        for (let j = 0; j < limitCol - 1; j++) {
            // Insert a cell in the row at index 0
            let cell = row.insertCell(j);

            // create button
            let btn = document.createElement('button');
            btn.className = 'letter-slot';
            
            // add button to table cell
            cell.appendChild(btn);
        }
    }
}
















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