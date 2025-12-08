let container = document.querySelector(".container")
const blockheight = 50;
const blockwidth = 50;
const blocks = []
const columns = Math.floor(container.clientWidth / blockwidth)

const rows = Math.floor(container.clientHeight / blockheight)


for (row = 0; row < rows; row++) {
    for (column = 0; column < columns; column++) {
        const block = document.createElement('div')
        block.classList.add('box')
        container.appendChild(block);
        block.innerHTML = `${row}-${column}`
        blocks[`${row}-${column}`] = block
    }
    

}

let direction = "down";

snake =[{
    x:1,
    y:3
}]

function render(){
    snake.forEach(elem => {
    blocks[`${elem.x}-${elem.y}`].classList.add('fill')
     
        
    });
}
render();

setInterval(function(){
    let head = null;

    if(direction === "left"){
        head = {x:snake[0].x,y:snake[0].y-1}
    }else if(direction === "right"){
        head = {x:snake[0].x,y:snake[0].y+1}
    }else if(direction === "down"){
        head = {x:snake[0].x+1,y:snake[0].y}
    }else if(direction === "up"){
        head = {x:snake[0].x-1,y:snake[0].y}
    }
    snake.forEach(elem => {
    blocks[`${elem.x}-${elem.y}`].classList.remove('fill')
    })
    snake.unshift(head)
    snake.pop()
    render();
},300);


// ArrowDown
// script.js:60 
// script.js:60 
// script.js:60 ArrowLeft
addEventListener("keydown",function(event){
if(event.key == "ArrowDown"){
    direction = "down"
}else if(event.key == "ArrowUp"){
    direction = "up"
}else if(event.key == "ArrowRight"){
    direction = "right"
}else if(event.key == "ArrowLeft"){
    direction = "left"
}
    
})