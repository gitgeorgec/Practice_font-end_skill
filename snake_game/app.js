const canvas = document.querySelector('#back')
const ctx = canvas.getContext('2d');
let circles = []
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// setInterval(()=>{
//     mouse.x=undefined,
//     mouse.y=undefined
// },2000)
// const mouse ={
//     x:undefined,
//     y:undefined
// }
// canvas.addEventListener("mousemove",(e)=>{
//     mouse.x=e.offsetX,
//     mouse.y=e.offsetY
// })

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
})
const direction = {
    x:1,
    y:0
}

window.addEventListener("keydown",(e)=>{
    if(e.code === "ArrowRight"){
        direction.x=1
        direction.y=0
    }else if(e.code === "ArrowUp"){
        direction.x=0
        direction.y=-1
    }else if(e.code === "ArrowLeft"){
        direction.x=-1
        direction.y=0
    }else if(e.code === "ArrowDown"){
        direction.x=0
        direction.y=1
    }
})
// function Circle(x,y,dx,dy,radius) {
//     const colors = [
//         '#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', // Blue 50->900
//         '#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00' // Amber 50->900
//       ];
//     maxRadius = 400
//     minRadius = 100
//     this.x = x
//     this.y = y
//     this.dx = dx
//     this.dy = dy
//     this.radius = radius
//     this.color = colors[Math.floor(Math.random()*colors.length)]
//     this.draw = function(){
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//         ctx.closePath();
//         ctx.fillStyle = this.color
//         ctx.fill();
//     }
//     this.update = function(){
//         this.x += this.dx
//         this.y += this.dy
//         if(this.x + this.radius >= canvas.width || this.x -this.radius <= 0){
//             this.dx = -this.dx
//         }
//         if(this.y + this.radius >= canvas.height || this.y -this.radius <= 0){
//             this.dy = -this.dy
//         }
//         // if(mouse.x -this.x < 50 && mouse.x -this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
//         //     if(this.radius < maxRadius){
//         //         this.radius +=5
//         //     }
//         // }else if(this.radius > 0){
//         //     this.radius -=1
//         // }
//         this.draw()
//     }
// }


function Snake(x,y,dx,dy){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = 10
    this.color = "#90CAF9"
    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color
        ctx.fill();
    }
    this.update = function(){
        if(this.x + this.radius >= canvas.width || this.x -this.radius <= 0){
            this.x = 100
        }else{
            this.dx = direction.x
        }
        if(this.y + this.radius >= canvas.height || this.y -this.radius <= 0){
            this.y = 100
        }else {
            this.dy = direction.y
        }
        this.x += this.dx
        this.y += this.dy
        if(this.x + this.radius >= canvas.width || this.x -this.radius <= 0){
            this.dx = -this.dx
        }
        if(this.y + this.radius >= canvas.height || this.y -this.radius <= 0){
            this.dy = -this.dy
        }
        this.draw()
        }
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // circles.forEach(circle=>{
    //     circle.update()
    // })
    snake.update()
    raf = window.requestAnimationFrame(animate);
}

function init(){
    // circles = []
    // for(let i = 0; i<1000; i++){
    //     x = Math.random()*window.innerWidth
    //     y = Math.random()*window.innerHeight
    //     dx = Math.random()*(Math.round(Math.random()) * 2 - 1)*3
    //     dy = Math.random()*(Math.round(Math.random()) * 2 - 1)*3
    //     circles.push(new Circle(x,y,dx,dy,1))
    // }
    snake = new Snake(1000,100,1,0)
    animate()
}

init()