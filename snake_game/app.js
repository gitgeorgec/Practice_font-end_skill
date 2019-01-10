const canvas = document.querySelector('#back')
const ctx = canvas.getContext('2d');
const playBtn = document.querySelector('#play')
const scoreBoard = document.querySelector('#scoreBoard')
const score = document.querySelector('#score')
let circles = []
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
let scoreCount = 0

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
const direction = {
    x:1,
    y:0
}

window.addEventListener("keydown",(e)=>{
    if(e.code === "ArrowRight" && direction.x !== -1){
        direction.x=1
        direction.y=0
    }else if(e.code === "ArrowUp" && direction.y !== 1){
        direction.x=0
        direction.y=-1
    }else if(e.code === "ArrowLeft" && direction.x !== 1){
        direction.x=-1
        direction.y=0
    }else if(e.code === "ArrowDown" && direction.y !== -1){
        direction.x=0
        direction.y=1
    }
})

function Snake(x,y,speed){
    this.x = x
    this.y = y
    this.speed = speed
    this.radius = 15
    this.color = "#fee"
    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color
        ctx.fill();
    }
    this.update = function(){
        // repeat
        // if(this.x + this.radius >= canvas.width){
        //     this.x = this.radius
        // } else if(this.x -this.radius <= 0){
        //     this.x = canvas.width-this.radius
        // }
        // if(this.y + this.radius >= canvas.height){
        //     this.y = this.radius
        // } else if(this.y -this.radius <= 0){
        //     this.y = canvas.height-this.radius
        // }
        //
        if(this.x + this.radius >= canvas.width ||this.x -this.radius <= 0){
            this.speed = 0
        } 
        if(this.y + this.radius >= canvas.height||this.y -this.radius <= 0){
            this.speed = 0
        }
        this.x += direction.x*this.speed
        this.y += direction.y*this.speed
        this.draw()
        }
}

function Food(x, y){
    this.x = x,
    this.y = y
    this.radius = 15
    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "#ff0000"
        ctx.fill();
    }
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if(snake.x -food.x < 15 && snake.x -food.x > -15 && snake.y - food.y < 15 && snake.y - food.y > -15){
        food.x = Math.random()*canvas.width
        food.y = Math.random()*canvas.height
        console.log(snakeBody.length)
        scoreCount++
        score.textContent = scoreCount
    }else{
        snakeBody.pop()
    }
    snakeBody.forEach(item => {
        if(item.x === snake.x && item.y === snake.y){
            snake.speed=0
        }
        item.draw()
    });
    snakeBody.unshift({
        x:snake.x,
        y:snake.y,
        radius:snake.radius,
        color:"#eee",
        draw:snake.draw
    })
    food.draw()
    snake.update()
    if(snake.speed === 0){
        console.log("stop")
        playBtn.classList.remove('hide')
    }else{
        raf = window.requestAnimationFrame(animate);
    }
}

function init(){
    snakeBody = []
    snake = new Snake(1000,100,3)
    for(let i = 0; i<100; i+=1){
        let item = {
            x:snake.x-1,
            y:snake.y,
            radius:snake.radius,
            color:"#eee",
            draw:snake.draw
        }
        snakeBody.push(item)
    }
    food = new Food(Math.random()*canvas.width,Math.random()*canvas.height) 
    animate()
}

playBtn.addEventListener('click',()=>{
    score.textContent = 0
    playBtn.classList.add('hide')
    scoreBoard.classList.remove('hide')
    init()
})