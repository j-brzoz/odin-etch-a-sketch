//making a grid
const grid = document.querySelector('#grid');

const row = document.createElement('div');
row.classList.add('row');

const square = document.createElement('div');
square.classList.add('square');


for(let i = 0; i < 16; i++){
    row.appendChild(square.cloneNode(true));
}

for(let i = 0; i < 16; i++){
    grid.appendChild(row.cloneNode(true));
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
            shades[i] = shades[i] - 32;
            if(shades[i] < 0)
                shades[i] = 0;
        }
        else{
            shades[i] = shades[i] + 32;
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
                shades[i] = shades[i] - 32;
                if(shades[i] < 0)
                    shades[i] = 0;
            }
            
            else{
                shades[i] = shades[i] + 32;
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
        gridElement[i].setAttribute('style', 'background: white');
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
for (let i=0; i<256; ++i) 
    shades[i] = 216;

listen();