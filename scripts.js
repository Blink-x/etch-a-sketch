const main = document.querySelector('.main');
const container = document.querySelector('.container');
const blkBtn = document.getElementById('blkBtn');
const grayBtn = document.getElementById('grayBtn');
const rgbBtn = document.getElementById('rgbBtn');
const resetBtn = document.getElementById('resetBtn')
const buttons = document.querySelector('.buttons');

function getGrid (column, row) 
{
    for (let i = 0; i < (column * row); i++)
    {
        const div = document.createElement('div');
        div.style.border = '1px solid lightgray';
        container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
    
}

function turnGray ()
{
    const boxes = container.querySelectorAll('.box');
    grayBtn.addEventListener('click', () => 
        {
            boxes.forEach(box => box.addEventListener('mouseover', () => 
                {
                    let randomNumber = Math.floor(Math.random() * 255);
                    box.style.background = `rgb(${randomNumber}, ${randomNumber}, ${randomNumber})`
                })) 
        })
}

function turnBlack ()
{
    const boxes = container.querySelectorAll('.box');
    blkBtn.addEventListener('click', () => 
        {
            boxes.forEach(box => box.addEventListener('mouseover', () => 
                {
                    box.style.background = 'black';
                })) 
        })
}

function turnColor ()
{
    const boxes = container.querySelectorAll('.box');
    rgbBtn.addEventListener('click', () => 
        {
            boxes.forEach(box => box.addEventListener('mouseover', () => 
                {
                    let R = Math.floor(Math.random() * 255);
                    let G = Math.floor(Math.random() * 255);
                    let B = Math.floor(Math.random() * 255);
                    box.style.background = `rgb(${R}, ${G}, ${B})`;
                }))
        })
}

function resetGrid () 
{
    resetBtn.addEventListener('click', () => 
    {
        let user = prompt('What size grid (1-100) would you like?')
        const boxes = container.querySelectorAll('.box');
        boxes.forEach(box => box.remove());
        if (user === null || user < 1 || user > 100) 
            {
                alert('Only sizes between 1-100 please')
                getGrid(16,16)
                turnGray();
                turnBlack();
                turnColor();
                resetGrid();;
                return;
            }
        else 
            {getGrid(user,user)}
            turnGray();
            turnBlack();
            turnColor();
    })
}

getGrid(16,16);
turnGray();
turnBlack();
turnColor();
resetGrid();