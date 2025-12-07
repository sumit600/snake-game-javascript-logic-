let container = document.querySelector(".container")
const blockheight = 30;
const blockwidth = 30;

const row = Math.floor(container.clientWidth / blockwidth)
console.log(row);
const column = Math.floor(container.clientHeight / blockheight)
console.log(column);

for(let i = 0;i< row*column;i++){
    const block = document.createElement('div')
    block.classList.add('box')
    container.appendChild(block);
}

