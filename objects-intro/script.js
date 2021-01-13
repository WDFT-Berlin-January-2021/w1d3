// an unordered, keyed collection of any 
// various values

const emtpyObj = {};

// property - key: value
const objStructure = {
    key1: 'value',
    key2: 'anotherValue'
}

const student = {
    name: 'hans',
    email: 'hans@gmail.com',
    age: 37,
    hobbies: ['chess', 'reading'],
    address: {
        city: 'Berlin',
        zip: 10405
    }
}
// console.log(student);

// accessing value
// dot notation
// console.log(student.name);

// change a value
student.age = 39;
// console.log(student.age);

// add a value
// student.address = 'Berlin';
// console.log(student);

// accessing a nested value - here: access 'chess'
// console.log(student.hobbies[0]);
// console.log(student.address.city);

// const input = prompt('which property do you want to see?');
// console.log(input);
// use the variable input to access the correct key
// whenever you want to use a variable to access 
// a key in an object use the brackets
// console.log(student[input]);

// deleting a property
// we wanna delete age from student
console.log(student);
delete student.age;
console.log(student);

// check if a property exists
console.log('age' in student);

// looping over an object
// using the for in loop
for (let key in student) {
    console.log(key);
    console.log(student[key]);
}

// two methods to get either all the keys or
// all the values of an object

// get all the keys -> returns an array
// console.log(Object.keys(student))

// get all the values -> returns an array
// console.log(Object.values(student))

// Object.values(student).forEach(function (value) {
//     console.log(value);
// })

const persons = [
    {
        name: 'mary',
        age: 27
    },
    {
        name: 'bob',
        age: 29
    },
    {
        name: 'alice',
        age: 24
    }
];

for (let person of persons) {
    console.log(person.name);
}










