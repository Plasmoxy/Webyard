import p5 = require("p5")

const sketch = (p: p5) => {

    let i = 0

    p.setup = () => {
        p.createCanvas(600, 400)
    }

    p.draw = () => {
        i++
        p.background(0)
        p.stroke(255, 0, 0)
        p.line(0, 0, i, i*i)
    }
}

new p5(sketch)