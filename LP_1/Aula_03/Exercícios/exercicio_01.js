const data = [
    {name:'John', age: 30, city:'New York'},
    {name:'Jane', age:25, city:'San Francisco'},
    {name: 'Bob', age:40, city:'Los Anegeles'}
];

const filteredData = data.filter(person => person.age > 30);

console.log(filteredData);