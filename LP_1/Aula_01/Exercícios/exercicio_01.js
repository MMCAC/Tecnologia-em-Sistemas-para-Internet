class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet(){
        return `Hi, my name is ${this.name} and I am a ${this.age} years old, ${this.gender}.`
    }
}


const person1 = new Person('John', 25, 'male');
console.log(person1.greet());