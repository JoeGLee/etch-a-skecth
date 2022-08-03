const container = document.querySelector('.container');
let x = 1;
let gridSize;
while(x ===1)
{
    gridSize = prompt('Grid size?');
    if(gridSize > 64)
    {
        alert('The max size is 64');
    }
    else if(gridSize < 10)
    {
        alert('The min size is 10')
    }
    else{
        x = 2;
    }
}

for(let i = 0; i < gridSize; i++){ //creates rows to hold columns
   const row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
}

const rows = document.querySelectorAll('.row');//creates nodelist of rows

for(let i = 0; i < gridSize; i++){
    for(let j = 0; j < gridSize; j++){
        const column = document.createElement('div');
        column.setAttribute('class', 'column clear');
        column.setAttribute('style', `padding: ${300/gridSize}px; border: solid; border-width: 1px;`);
        rows[i].appendChild(column);
    }
}

const columns = document.querySelectorAll('.column');

columns.forEach(column => {
    column.addEventListener('mouseover',
       () => {
           
           column.classList.remove('clear');
           column.classList.add('coloredIn');
       }
   )
});

const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    columns.forEach(column => {
        column.classList.remove('coloredIn');
        column.classList.add('clear');
    })
})


