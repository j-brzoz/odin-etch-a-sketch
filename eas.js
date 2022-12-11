//making a grid
const grid = document.querySelector('#grid');

const row = document.createElement('div');
row.classList.add('row');
row.setAttribute('id', 'row')

const square = document.createElement('div');
square.classList.add('square');
square.setAttribute('id', 'square')


for(let i = 0; i < 16; i++){
    row.appendChild(square.cloneNode(true));
}

for(let i = 0; i < 16; i++){
    grid.appendChild(row.cloneNode(true));
}

//making grid according to user's input
function makeGrid(value, shades){
    const grid = document.querySelector('#grid');

    const row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', 'row')

    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('id', 'square')

    let sizeOfSquare = 960 / value;

    square.style.cssText = 'width: ' + sizeOfSquare + 'px; height: ' + sizeOfSquare + 'px;'    


    for(let i = 0; i < value; i++){
       row.appendChild(square.cloneNode(true));
    }

    for(let i = 0; i < value; i++){
        grid.appendChild(row.cloneNode(true));
    }

    while(shades.length > value * value)
        shades.pop();
    
    while(shades.length < value * value)
        shades.push(216);

    for (let i = 0; i < shades.length; i++) 
        shades[i] = 216;
}

//deleting old grid
function deleteGrid(){
    const row = document.querySelectorAll('#row');

    for(let i = 0; i < row.length; i++){
        row[i].remove();
    }
}

//displaying grid size
function rangeValue(value){
    let gridSize = document.querySelectorAll('#rangeValue');
    for(let i = 0; i < gridSize.length; i++)
        gridSize[i].textContent = value;   
}

//changing grid size according to user's input
function range(value){
    deleteGrid();
    makeGrid(value, shades);
    listen();
}

//functions for changing sqaure colors
function beforeDrawWhenMouseClicks(i) {
    return function drawWhenMouseClicks(e) {
        if(color == 0){
            e.target.style.backgroundColor = 'rgb(' + color + ', '  + color + ', ' + color + ')';
            shades[i] = 0;
        }
        else if (color == 255){
            e.target.style.backgroundColor = 'rgb(' + color + ', '  + color + ', ' + color + ')';
            shades[i] = 255;
        }
        else if (color < 0){
            e.target.style.backgroundColor = 'rgb(' + shades[i] + ', '  + shades[i] + ', ' + shades[i] + ')';
            shades[i] = shades[i] - 36;
            if(shades[i] < 0)
                shades[i] = 0;
        }
        else if(color == 1){
            if(shades[i] == 216)
                shades[i] = 255;
            shades[i] = shades[i] + 36;
            if(shades[i] > 255)
                shades[i] = 255;
            e.target.style.backgroundColor = 'rgb(' + shades[i] + ', '  + shades[i] + ', ' + shades[i] + ')';
        }
    }
}
function beforeDrawWhenMouseMoves(i) {
    return function drawWhenMouseMoves(e) {
        if(e.buttons > 0){
            if(color == 0){
                e.target.style.backgroundColor = 'rgb(' + color + ', '  + color + ', ' + color + ')';
                shades[i] = 0;
            }
            else if (color == 255){
                e.target.style.backgroundColor = 'rgb(' + color + ', '  + color + ', ' + color + ')';
                shades[i] = 255;
            }
            else if (color < 0){
                e.target.style.backgroundColor = 'rgb(' + shades[i] + ', '  + shades[i] + ', ' + shades[i] + ')';
                shades[i] = shades[i] - 36;
                if(shades[i] < 0)
                    shades[i] = 0;
            }
            
            else if(color == 1){
                if(shades[i] == 216)
                    shades[i] = 255;
                shades[i] = shades[i] + 36;
                if(shades[i] > 255)
                    shades[i] = 255;
                e.target.style.backgroundColor = 'rgb(' + shades[i] + ', '  + shades[i] + ', ' + shades[i] + ')';
            }
        }
    }
}

//function for getting user input
function listen(){
    let gridElement = document.querySelectorAll('.square');
    
    for (let i = 0; i < gridElement.length; i++) {
        gridElement[i].addEventListener('mousedown', beforeDrawWhenMouseClicks(i));
        gridElement[i].addEventListener('mouseenter', beforeDrawWhenMouseMoves(i));
    }
}


//tools
const eraseAll = document.querySelector('#eraseAll');
const erase = document.querySelector('#erase');
const lighten = document.querySelector('#lighten');
const shade = document.querySelector('#shade');
const draw = document.querySelector('#draw');

eraseAll.addEventListener('click', () => {
    let gridElement = document.querySelectorAll('.square');
    for (let i = 0; i < gridElement.length; i++) {
        //gridElement[i].setAttribute('style', 'background: white');
        gridElement[i].style.setProperty('background-color', 'white');
        shades[i] = 216;
    }
    color = 255;
})

erase.addEventListener('click', () => {
    color = 255;
})

lighten.addEventListener('click', () => {
    color = 1;
})

shade.addEventListener('click', () => {
    color = -1;
})

draw.addEventListener('click', () => {
    color = 0;
})


//initial color definitions
let color = 0;

let shades = new Array(256); 
for (let i=0; i<256; i++) 
    shades[i] = 216;

listen();