const prompt = require("prompt-sync")();

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        const area = Math.PI * Math.pow(this.radius, 2)
        return `A área do circulo é ${area}.`
    }
}
const num = prompt("Informe um raio: ")
const circulo1 = new Circle(num);
console.log(circulo1.getArea());