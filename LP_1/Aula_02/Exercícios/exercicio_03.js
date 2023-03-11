class Rectangle {
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
    }
    getArea(){
        const area = this.width * this.height;
        return `A área do retângulo é de ${area}.`
    }
}



const poligono = new Rectangle(5, 5);
console.log(poligono.getArea());