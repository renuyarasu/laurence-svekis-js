// Laurence Svekis - JavaScript Lessons
console.clear();
// https://www.youtube.com/watch?v=8wLOyb_KOVw&list=PLTPx7x7O-7NCv6gWGvEfJc9OfQnxFPML-&index=16
// JavaScript Lesson How to Output JavaScript Objects and Arrays to a web page JSON

const output = document.querySelector('.output');

const myObject = {
    people: [
        { firstname: 'VedaGna', lastname: 'Yarasu' },
        { firstname: 'Gnapika', lastname: 'Yarasu' },
        { firstname: 'Hindu', lastname: 'Sajja' },
    ],
    fruits: [
        { name: 'oranges', type: 'citrus' },
        { name: 'strawberries', type: 'berries' },
        { name: 'watermelons', type: 'melons' },
        { name: 'tomatoes', type: 'vegies' },
    ]

}
myObject.people.forEach((person) => {
    console.log(person);
    output.innerHTML += `<h4>${person.firstname} ${person.lastname}</h4>`
})

myObject.fruits.forEach((ele) => {
    console.log(Object.keys(ele));
})