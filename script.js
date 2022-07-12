// Laurence Svekis - JavaScript Lessons
console.clear();

// Objects 
const person_01 = { name: 'VedaGna', surname: 'Yarasu', age: 5 }
const person_02 = { name: 'Hindu', surname: 'Yarasu', age: 25 }
const person_03 = { name: 'Gnapika', surname: 'Yarasu', age: 7 }
const person_04 = { name: 'Renu', surname: 'Yarasu', age: 35 }

const people = [person_01, person_02, person_03];
people.forEach((person) => {
    console.log(`${person.name} ${person.surname}`);
})