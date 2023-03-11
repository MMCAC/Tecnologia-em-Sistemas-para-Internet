class Animal{
    constructor(name)
    {
        this.name = name;
    }
    speak()
    {
        return 'Som aleatório!';
    }
}

const animal = new Animal("coruja");
console.log(animal.speak());