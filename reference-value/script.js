// Primitives are passed by reference - objects are passed by value
const beatles = ['John', 'Paul', 'George', 'Ringo'];

function prefix(input) {
    const ar = input.slice();
    for (let i = 0; i < ar.length; i++) {
        ar[i] = 'Mr ' + ar[i];
    }
    return ar
}

const prefixedBeatles = prefix(beatles);
console.log(prefixedBeatles);
console.log(beatles);

// const name = 'kevin';
// let nameCopy = name;
// nameCopy = 'hans';
// console.log(nameCopy);
// console.log(name);

const names = ['alice', 'bob'];
// const namesCopy = names;
// we can use slice() to create a copy of an array
// const namesCopy = names.slice();
// use the spread operator ... and spread the content into a new array
const namesCopy = [...names];
namesCopy.push('mary');
// console.log(namesCopy);
// console.log(names);

// this can be visualized on pythontutor.com

// console.log('a' === 'a');
const a = [3, 5];
const b = [3, 5];
// use JSON.stringify() to turn the arrays into strings before comparing them
// console.log();
// console.log(JSON.stringify(a) === JSON.stringify(b))

const person = {
    name: 'joe'
}
// spread operator works but json stringify and parse is better
// const copy = { ...person };
// copy.age = 35;
// JSON.parse()
// JSON.stringify()
// the best way to copy an object
const copy = JSON.parse(JSON.stringify(person))
console.log(typeof copy);
console.log(person);