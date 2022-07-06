// Laurence Svekis - JavaScript Lessons
console.clear();

// Loop: Do while()


const fruits = [
    { id: 1, name: 'Oranges', type: 'Citrus' },
    { id: 2, name: 'Nectarines', type: 'Stone Fruit' },
    { id: 3, name: 'Watermelons', type: 'Melons' },
    { id: 4, name: 'Strawberries', type: 'Berries' },
];

let i = 0;
do {
    console.log(fruits[i].name);
    i++
} while (i < fruits.length)
/* Oranges
Nectarines
Watermelons
Strawberries */