const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let isDrawing = false
let cursorX = 0
let cursorY = 0

window.addEventListener('mousemove', e => {
    cursorX = e.clientX
    cursorY = e.clientY
})

window.addEventListener('mousedown', e => {
    isDrawing = true
})

window.addEventListener('mouseup', e => {
    isDrawing = false
})


const render = () => {
    requestAnimationFrame(render)
    //ctx.clearRect(0, 0, canvas.width, canvas, height)

    if (isDrawing) {
        ctx.beginPath();
        ctx.arc(cursorX, cursorY, 10, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}

render()