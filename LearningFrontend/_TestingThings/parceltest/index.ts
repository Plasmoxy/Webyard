import p5 from 'p5'

new p5((p: p5) => {

    p.setup = () => {
        p.createCanvas(300, 300)
    }

    p.draw = () => {
        p.background(255)
    }
})