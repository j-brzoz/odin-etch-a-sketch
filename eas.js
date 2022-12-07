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

square.addEventListener('mousedown', );
square.addEventListener('mouseenter', )
