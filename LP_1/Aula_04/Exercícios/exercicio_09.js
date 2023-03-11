const createPerson = (name, age) => ({ name, age });
person = createPerson('João', 20);
console.log(person);

person.name = 'Maria';
person.age = 25;
console.log(person);

class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const student = new Student('João', 20);
console.log(student);

employee=function(name, age){
    this.name = name;
    this.age = age;
}

const emp = new employee("Diego", 35);
console.log(emp);